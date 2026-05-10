export interface LinkItem {
  label: string;
  url: string;
}

export interface CategoryCardData {
  id: string;
  title: string;
  description?: string;
  icon: string; // Lucide icon name
  links: LinkItem[];
}
