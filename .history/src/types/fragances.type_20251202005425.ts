export type Fragance = {
  name: string;
  intensity: string;
  category_id: string;
  created_at: string;
  updated_at: string;
};

export type Fragances = Fragance[];

export type FraganceCategory = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type FraganceCategories = FraganceCategory[];
