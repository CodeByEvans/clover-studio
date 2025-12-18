export type Crumb = {
  label: string;
  href: string;
};

export type SectionHeaderProps = {
  title: string;
  href: string;
  crumbs: Crumb[];
};
