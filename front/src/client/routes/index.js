
import MainPage from "../pages/MainPage"
import AboutUsPage from '../pages/AboutUsPage'

export const clientRoutes = [
  {
    path: "/main",
    component: MainPage,
    text: "main",
  },
  {
    path: "/aboutUs",
    component: AboutUsPage,
    text: "about Us",
  },
  {
    path: "/contacts",
    component: AboutUsPage,
    text: "contacts",
  },
  {
    path: "/delivery",
    component: AboutUsPage,
    text: "delivery",
  },
  {
    path: "/payment",
    component: AboutUsPage,
    text: "payment",
  },
];