import { CmsRoutesPath } from ".";

export const navbarData = {
  logoUrl: "./logo.png",
  navigationMenu: [
    {
      name: "Home",
      path: CmsRoutesPath.Home,
    },
    {
      name: "About Us",
      path: CmsRoutesPath.AboutUs,
    },
    {
      name: "Services",
      path: CmsRoutesPath.Services,
    },
    {
      name: "Contact Us",
      path: CmsRoutesPath.ContactUs,
    },
  ],
  buttons: ["Get Started"],
};
