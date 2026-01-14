
export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}
