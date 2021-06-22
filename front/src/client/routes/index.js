import MainPage from "../pages/MainPage"
import AboutUsPage from "../pages/AboutUsPage"
import CartPage from "../pages/CartPage"

export const clientRoutes = [
    {
        path: "/client/main",
        component: MainPage,
        text: "main",
    },
    {
        path: "/client/aboutUs",
        component: AboutUsPage,
        text: "about Us",
    },
    {
        path: "/client/contacts",
        component: AboutUsPage,
        text: "contacts",
    },
    {
        path: "/client/delivery",
        component: AboutUsPage,
        text: "delivery",
    },
    {
        path: "/client/payment",
        component: AboutUsPage,
        text: "payment",
    },
    {
        path: "/client/cart",
        component: CartPage,
        text: null,
    },
]
