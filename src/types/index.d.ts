export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type User = {
  name: string;
  email: string;
  image: string;
};
