import slugify from "slugify";
import { Category } from "../db/models/Category";
import {
  categoryInputSchema,
  categoryOutputSchema,
  categoryUpdateSchema,
} from "../schemas/categorySchema";

// Servicio para obtener todas las categorías
export const getAllCategories = () => Category.find();

// Servicio para obtener categoría por id
export const getCategoryById = async (id: string) => {
  const category = await Category.findById(id);
  if (!category) throw new Error("Category not found");
  return category;
};

// Servicio para crear categoría
export const createCategory = async (data: Record<string, any>) => {
  // 1. Validar input
  const validatedInput = categoryInputSchema.parse(data);

  // 2. Crear slug
  const slug = slugify(validatedInput.name, { lower: true });

  // 3. Comprobar si existe nombre o slug
  const existingCategory = await Category.findOne({
    $or: [{ name: validatedInput.name }, { slug }],
  });
  if (existingCategory) {
    throw new Error("Category with this name or slug already exists");
  }

  // 4. Crear objeto para guardar
  const categoryToCreate = {
    ...validatedInput,
    slug,
  };

  const validatedCategoryToCreate =
    categoryOutputSchema.parse(categoryToCreate);

  return Category.create(validatedCategoryToCreate);
};

// Servicio para actualizar categoría
export const updateCategory = async (id: string, data: Record<string, any>) => {
  // 1. Validar input
  const validatedInput = categoryUpdateSchema.parse(data);

  const currentCategory = await Category.findById(id);
  if (!currentCategory) {
    throw new Error("Category not found");
  }

  // 2. Verificar si cambió el nombre para actualizar slug
  const isNameChanged = currentCategory.name !== validatedInput.name;
  const slug = isNameChanged
    ? slugify(validatedInput.name || "", { lower: true })
    : currentCategory.slug;

  // 3. Si el nombre cambió, verificar que no exista otra con ese nombre o slug
  if (isNameChanged) {
    const existingCategory = await Category.findOne({
      $or: [{ name: validatedInput.name }, { slug }],
      _id: { $ne: id },
    });
    if (existingCategory) {
      throw new Error("Category with this name or slug already exists");
    }
  }

  const categoryToUpdate = {
    ...validatedInput,
    slug,
  };

  return Category.findByIdAndUpdate(id, categoryToUpdate, { new: true });
};

// Servicio para eliminar categoría (soft delete)
export const deleteCategory = (id: string) =>
  Category.findByIdAndUpdate(id, { isActive: false });
