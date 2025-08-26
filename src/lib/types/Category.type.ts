import { IconName } from "./IconName.type";

interface CategoryType {
  id: string;
  icon?: IconName;
  color: string;
  textColor: string;
  name: string;
  description: string;
  slug: string;
}

interface FeatureWithCount {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export type { CategoryType, FeatureWithCount };
