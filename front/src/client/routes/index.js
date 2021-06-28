import MainPage from "../pages/MainPage"
import AboutUsPage from "../pages/AboutUsPage"
import CartPage from "../pages/CartPage"
import ProductPage from "../pages/ProductPage"
import PromotionPage from "../pages/PromotionsPage"
import NewPage from "../pages/NewPage"

export const clientRoutes = [
    {
        path: "/client/main",
        component: MainPage,
        text: "main",
        isFromMenu: true,
    },
    {
        path: "/client/aboutUs",
        component: AboutUsPage,
        text: "about Us",
        isFromMenu: true,
    },
    {
        path: "/client/contacts",
        component: AboutUsPage,
        text: "contacts",
        isFromMenu: true,
    },
    {
        path: "/client/delivery",
        component: AboutUsPage,
        text: "delivery",
        isFromMenu: true,
    },
    {
        path: "/client/payment",
        component: AboutUsPage,
        text: "payment",
        isFromMenu: true,
    },
    {
        path: "/client/cart",
        component: CartPage,
        text: "cart",
        isFromMenu: true,
    },
    {
        path: "/client/product/:categoryId",
        component: ProductPage,
        text: null,
        isFromMenu: false,
    },
    {
        path: "/client/promotion",
        component: PromotionPage,
        text: "promotion",
        isFromMenu: false,
    },
    {
        path: "/client/new",
        component: NewPage,
        text: "new",
        isFromMenu: false,
    },
]
