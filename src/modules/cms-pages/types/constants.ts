import { AuthRoutesPath } from "@/modules/auth/types";
import { CmsRoutesPath } from ".";

export const navbarData = {
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
  buttons: [{ name: "Get Started", path: AuthRoutesPath.Login }],
};
