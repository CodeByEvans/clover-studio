/*

// Servicio para obtener todas las tags
export const getAllTags = () => Tag.find();

// Servicio para obtener una tag por id
export const getTagById = async (id: string) => {
  const tag = await Tag.findById(id);
  if (!tag) throw new Error("Tag not found");
  return tag;
};

// Servicio para crear una tag
export const createTag = async (data: Record<string, any>) => {
  // 1. Validar input
  const validatedInput = tagInputSchema.parse(data);

  // 2. Crear slug
  const slug = slugify(validatedInput.name, { lower: true });

  // 3. Comprobar si ya existe tag con ese nombre o slug
  const existingTag = await Tag.findOne({
    $or: [{ name: validatedInput.name }, { slug }],
  });
  if (existingTag) {
    throw new Error("Tag with this name or slug already exists");
  }

  // 4. Preparar objeto para guardar
  const tagToCreate = {
    ...validatedInput,
    slug,
  };

  // 5. Validar objeto final
  const validatedTagToCreate = tagOutputSchema.parse(tagToCreate);

  // 6. Crear y devolver la tag
  return Tag.create(validatedTagToCreate);
};

// Servicio para actualizar una tag
export const updateTag = async (id: string, data: Record<string, any>) => {
  // 1. Validar input
  const validatedInput = tagInputSchema.parse(data);

  // 2. Buscar tag actual
  const currentTag = await Tag.findById(id);
  if (!currentTag) {
    throw new Error("Tag not found");
  }

  // 3. Comprobar si cambió el nombre para actualizar slug
  const isNameChanged = currentTag.name !== validatedInput.name;
  const slug = isNameChanged
    ? slugify(validatedInput.name, { lower: true })
    : currentTag.slug;

  // 4. Si cambió, verificar que no exista otra tag con ese nombre o slug
  if (isNameChanged) {
    const existingTag = await Tag.findOne({
      $or: [{ name: validatedInput.name }, { slug }],
      _id: { $ne: id },
    });
    if (existingTag) {
      throw new Error("Tag with this name or slug already exists");
    }
  }

  // 5. Preparar objeto para actualizar
  const tagToUpdate = {
    ...validatedInput,
    slug,
  };

  // 6. Actualizar y devolver la tag
  return Tag.findByIdAndUpdate(id, tagToUpdate, { new: true });
};

// Servicio para eliminar una tag (soft delete)
export const deleteTag = (id: string) =>
  Tag.findByIdAndUpdate(id, { isActive: false });

*/
