import CategoriesPage from "../pages/CategoriesPage"
import ProductsPage from "../pages/ProductsPage"
import OrdersPage from "../pages/OrdersPage"

export const adminRoutes = [
    {
        path: "/admin/categories",
        component: CategoriesPage,
        text: "categories",
    },
    {
        path: "/admin/products",
        component: ProductsPage,
        text: "products",
    },
    {
        path: "/admin/orders",
        component: OrdersPage,
        text: "orders",
    },
]
