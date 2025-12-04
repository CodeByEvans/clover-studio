export type FragranceFromDB = {
  id: string;
  name: string;
  intensity: string;
  category: { id: string; name: string }[]; // array porque así viene de Supabase
  created_at: string;
  updated_at: string;
};

export type Fragrance = {
  id: string;
  name: string;
  intensity: string;
  category: { id: string; name: string };
  created_at: string;
  updated_at: string;
};

export type Fragrances = Fragrance[];

export type FragranceCategory = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type FragranceCategories = FragranceCategory[];
