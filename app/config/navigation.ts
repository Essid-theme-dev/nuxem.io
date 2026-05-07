import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Component,
  Briefcase,
  CalendarDays,
  Image,
  ClipboardList,
  FolderKanban,
  FolderGit,
  Languages,
  NotebookPen,
  PanelsTopLeft,
  LayoutDashboard,
  LayoutList,
  List,
  LogIn,
  Package,
  PieChart,
  ReceiptText,
  Rows3,
  Settings,
  ShoppingBag,
  SlidersHorizontal,
  UserPlus,
  Users,
} from "lucide-react";

export type PageTabItem = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  subtitle?: string;
};

export type NavSection = {
  id: string;
  title: string;
  defaultOpen?: boolean;
  items: NavItem[];
};

export const dashboardTabs: PageTabItem[] = [
  { label: "Sales", href: "/" },
  { label: "Booking", href: "/dashboard/booking" },
];

export const listPageTabs: PageTabItem[] = [
  { label: "Boxed list", href: "/boxed-list" },
  { label: "Fluid list", href: "/fluid-list" },
  { label: "Striped list", href: "/striped-list" },
];

export const gridPageTabs: PageTabItem[] = [
  { label: "Products", href: "/grid-pages/products" },
  { label: "Projects", href: "/project-management/list" },
];

export const projectManagementTabs: PageTabItem[] = [
  { label: "List", href: "/project-management/list" },
  { label: "Board", href: "/project-management/board" },
];

export const appointmentTabs: PageTabItem[] = [
  { label: "Employee", href: "/appointment/employee/1" },
];

export const singlePageTabs: PageTabItem[] = [
  { label: "Product", href: "/single-pages/product" },
  { label: "Project", href: "/single-pages/project" },
];

export const formPageTabs: PageTabItem[] = [
  { label: "Form layout", href: "/forms/layout" },
  { label: "Form controls", href: "/forms/controls" },
];

export const appPageTabs: PageTabItem[] = [
  { label: "Knowledge", href: "/apps/knowledge" },
  { label: "Survey", href: "/apps/survey" },
  { label: "Components", href: "/apps/components" },
  { label: "GitHub access", href: "/github-access" },
  { label: "Media cards", href: "/apps/media-cards" },
  { label: "Popups", href: "/apps/popups" },
];

export const authPageTabs: PageTabItem[] = [
  { label: "Login", href: "/auth/login" },
  { label: "Sign up", href: "/auth/sign-up" },
];

export const preferenceTabs: PageTabItem[] = [
  { label: "Overview", href: "/preferences" },
  { label: "Languages", href: "/preferences/languages" },
];

export const navSections: NavSection[] = [
  {
    id: "core",
    title: "Core",
    defaultOpen: true,
    items: [
      { label: "Sales", href: "/", icon: LayoutDashboard, subtitle: "Overview · metrics & charts" },
      {
        label: "Booking",
        href: "/dashboard/booking",
        icon: CalendarDays,
        subtitle: "Booking-style dashboard variant",
      },
    ],
  },
  {
    id: "lists",
    title: "List Pages",
    defaultOpen: false,
    items: [
      { label: "Boxed list", href: "/boxed-list", icon: LayoutList, subtitle: "Cards in a boxed grid" },
      { label: "Fluid list", href: "/fluid-list", icon: List, subtitle: "Full-width fluid rows" },
      { label: "Striped list", href: "/striped-list", icon: Rows3, subtitle: "Striped row emphasis" },
    ],
  },
  {
    id: "workspace",
    title: "Workspace",
    defaultOpen: true,
    items: [
      {
        label: "Products",
        href: "/grid-pages/products",
        icon: ShoppingBag,
        subtitle: "Product cards in a grid",
      },
      {
        label: "Projects",
        href: "/project-management/list",
        icon: FolderKanban,
        subtitle: "Project management list",
      },
    ],
  },
  {
    id: "details",
    title: "Detail Views",
    defaultOpen: false,
    items: [
      {
        label: "Product",
        href: "/single-pages/product",
        icon: Package,
        subtitle: "Single product detail layout",
      },
      {
        label: "Project",
        href: "/single-pages/project",
        icon: Briefcase,
        subtitle: "Single project detail layout",
      },
    ],
  },
  {
    id: "productivity",
    title: "Productivity",
    defaultOpen: true,
    items: [
      {
        label: "Form layout",
        href: "/forms/layout",
        icon: ClipboardList,
        subtitle: "Sections & field groups",
      },
      {
        label: "Form controls",
        href: "/forms/controls",
        icon: SlidersHorizontal,
        subtitle: "Inputs, toggles, selects",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    defaultOpen: false,
    items: [
      { label: "Charts", href: "/charts", icon: PieChart, subtitle: "Chart gallery & KPI sparklines" },
      { label: "Facturation", href: "/facturation", icon: ReceiptText, subtitle: "Invoices, payments and billing status" },
    ],
  },
  {
    id: "apps",
    title: "Apps & Integrations",
    defaultOpen: true,
    items: [
      { label: "Knowledge", href: "/apps/knowledge", icon: BookOpen, subtitle: "Knowledge base" },
      { label: "Survey", href: "/apps/survey", icon: NotebookPen, subtitle: "Survey & forms app" },
      { label: "Components", href: "/apps/components", icon: Component, subtitle: "Full UI kit and patterns" },
      { label: "GitHub access", href: "/github-access", icon: FolderGit, subtitle: "Repository access center" },
      { label: "Media cards", href: "/apps/media-cards", icon: Image, subtitle: "Image cards & gallery UI" },
      { label: "Popups", href: "/apps/popups", icon: PanelsTopLeft, subtitle: "Modal and popup patterns" },
    ],
  },
  {
    id: "preferences",
    title: "Preferences",
    defaultOpen: false,
    items: [
      { label: "Preferences", href: "/preferences", icon: Settings, subtitle: "Workspace personalization center" },
      { label: "Languages", href: "/preferences/languages", icon: Languages, subtitle: "Language selector settings" },
    ],
  },
  {
    id: "auth",
    title: "Authentication",
    defaultOpen: false,
    items: [
      { label: "Login", href: "/auth/login", icon: LogIn, subtitle: "Sign in (full page)" },
      { label: "Sign up", href: "/auth/sign-up", icon: UserPlus, subtitle: "Create account" },
    ],
  },
  {
    id: "settings",
    title: "Settings",
    defaultOpen: false,
    items: [{ label: "General", href: "/settings/general", icon: Settings, subtitle: "Workspace settings" }],
  },
  {
    id: "accounts",
    title: "People",
    defaultOpen: true,
    items: [
      { label: "Users", href: "/users", icon: Users, subtitle: "User table & search" },
      { label: "Employee profile", href: "/appointment/employee/1", icon: Users, subtitle: "Appointment employee view" },
    ],
  },
];

const allNavItems: NavItem[] = navSections.flatMap((s) => s.items);

export function resolvePageMeta(pathname: string): { title: string; subtitle: string } {
  if (pathname === "/auth/login" || pathname === "/auth/sign-up") {
    const item = allNavItems.find((i) => i.href === pathname);
    return {
      title: item?.label ?? "Auth",
      subtitle: item?.subtitle ?? "Authentication",
    };
  }

  const exact = allNavItems.find((i) => i.href === pathname);
  if (exact) {
    return { title: exact.label, subtitle: exact.subtitle ?? "Nuxem admin" };
  }

  const byPrefix = [...allNavItems]
    .filter((i) => i.href !== "/" && pathname.startsWith(i.href))
    .sort((a, b) => b.href.length - a.href.length)[0];
  if (byPrefix) {
    return { title: byPrefix.label, subtitle: byPrefix.subtitle ?? "Nuxem admin" };
  }

  if (pathname === "/") {
    return { title: "Sales", subtitle: "Overview · metrics & charts" };
  }

  return { title: "Nuxem", subtitle: "Admin UI inspired by Facit Modern" };
}

export function getTabGroupForPath(pathname: string): PageTabItem[] | null {
  if (pathname === "/" || pathname.startsWith("/dashboard/booking")) return dashboardTabs;
  if (
    pathname === "/boxed-list" ||
    pathname === "/fluid-list" ||
    pathname === "/striped-list"
  ) {
    return listPageTabs;
  }
  if (pathname.startsWith("/grid-pages/")) return gridPageTabs;
  if (pathname.startsWith("/project-management/")) return projectManagementTabs;
  if (pathname.startsWith("/appointment/employee/")) return appointmentTabs;
  if (pathname.startsWith("/single-pages/")) return singlePageTabs;
  if (pathname.startsWith("/forms/")) return formPageTabs;
  if (pathname === "/github-access") return appPageTabs;
  if (pathname.startsWith("/apps/")) return appPageTabs;
  if (pathname.startsWith("/preferences/")) return preferenceTabs;
  if (pathname.startsWith("/auth/")) return authPageTabs;
  return null;
}
