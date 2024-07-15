export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "The Hack Cambridge Foundation",
  description: "Official Hackathon of the University of Cambridge",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    email: "mailto://team@hackcambridge.com",
    facebook: "https://www.facebook.com/hackcambridge",
    linkedin: "https://www.linkedin.com/company/hack-cambridge",
    instagram: "https://www.instagram.com/hack_cambridge",
    github: "https://github.com/hackcambridge",
    twitter: "https://x.com/Hack_Cambridge",
    // docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/a8uxk8Jg",
    sponsor: "mailto://team@hackcambridge.com",
  },
};
