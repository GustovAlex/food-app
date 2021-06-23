import ProductsItem from "./ProductsItem"

export default function ProductsItemContainer({ product }) {
    console.log("product", product)
    return <ProductsItem product={product} />
}
