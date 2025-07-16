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

export type { CategoryType };
