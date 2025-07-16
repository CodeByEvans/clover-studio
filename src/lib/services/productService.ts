import slugify from "slugify";
import { Product } from "../db/models/Product";
import {
  productInputSchema,
  productUpdateSchema,
} from "../schemas/productSchema";
import { uploadImageToCloudinary } from "./cloudinaryService";
import { Category } from "../db/models/Category";
import { Tag } from "../db/models/Tag";

// Servicio para obtener todos los productos activos
export const getAllProducts = () => Product.find({ isActive: { $ne: false } });

// Servicio para obtener un producto por su id
export const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

// Servicio para crear un producto nuevo
export const createProduct = async (data: FormData) => {
  // 1. Convertir FormData a objeto plano y separar archivos (imágenes)
  const obj: Record<string, any> = {};
  const files: File[] = [];
  data.forEach((value, key) => {
    if (key === "images" && value instanceof File) {
      files.push(value);
    } else {
      obj[key] = value;
    }
  });

  // 2. Convertir tags a array si es un string
  if (typeof obj.tags === "string") {
    obj.tags = [obj.tags];
  }

  // 3. Validar datos de entrada con zod, convertir price a número
  const validatedInput = productInputSchema.parse({
    ...obj,
  });

  // 4. Buscar categoría y tags
  const category = await Category.findById(validatedInput.category);

  if (!category) {
    throw new Error("Category not found");
  }

  // 5. Generar slug basado en el nombre del producto
  const slug = slugify(validatedInput.name, { lower: true });

  // 6. Verificar que no exista otro producto con el mismo nombre o slug
  const existingProduct = await Product.findOne({
    $or: [{ name: validatedInput.name }, { slug }],
  });
  if (existingProduct) {
    throw new Error("Product with this name or slug already exists");
  }

  // 7. Subir imágenes a Cloudinary
  const images = await Promise.all(
    files.map(async (file) => {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const result = await uploadImageToCloudinary(buffer, "products");
      return result;
    })
  );

  // 8. Preparar objeto para guardar, asignando slug y vaciando imágenes (se pueden subir después)
  const productToCreate = {
    ...validatedInput,
    slug,
    images: images,
    rating: 0,
    reviews: 0,
    category: category._id,
    isActive: true,
  };

  // 9. Crear el producto en la base de datos
  const product = await Product.create(productToCreate);

  return Product.findById(product._id).populate("category");
};

// Servicio para actualizar un producto existente
export const updateProduct = async (
  id: string,
  data: FormData | Record<string, any>
) => {
  // 1. Convertir datos a objeto plano y separar archivos si es FormData
  const obj: Record<string, any> = {};
  const files: File[] = [];

  if (data instanceof FormData) {
    data.forEach((value, key) => {
      if (key === "images" && value instanceof File) {
        files.push(value);
      } else {
        obj[key] = value;
      }
    });
  } else {
    // Si es un objeto JSON, usarlo directamente
    Object.assign(obj, data);
  }

  // 2. Validar entrada con zod, parseando price a número
  const validatedInput = productUpdateSchema.parse({
    ...obj,
  });

  // 3. Buscar producto actual en la base de datos
  const currentProduct = await Product.findById(id);
  if (!currentProduct) {
    throw new Error("Product not found");
  }

  // 4. Comprobar si cambió el nombre para regenerar slug
  const isNameChanged = currentProduct?.name !== validatedInput.name;
  const slug = isNameChanged
    ? slugify(validatedInput.name || "", { lower: true })
    : currentProduct.slug;

  // 5. Si cambió el nombre, verificar que no exista otro producto con ese nombre o slug
  if (isNameChanged) {
    const existingProduct = await Product.findOne({
      $or: [{ name: validatedInput.name }, { slug }],
    });
    if (existingProduct) {
      throw new Error("Product with this name or slug already exists");
    }
  }

  // 6. Preparar objeto para actualización
  const productToUpdate = {
    ...validatedInput,
    slug,
    images: currentProduct.images, // Mantener las imágenes existentes
  };

  // 7. Actualizar producto y devolver el nuevo documento
  return Product.findByIdAndUpdate(id, productToUpdate, { new: true });
};

// Servicio para eliminar un producto (soft delete)
export const deleteProduct = (id: string) =>
  Product.findByIdAndUpdate(id, { isActive: false });
