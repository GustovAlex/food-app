import useStyles from "./productStyles"
import TitleContainer from "../common/title/TitleContainer"
import ProductsItemContainer from "./productsItem/ProductsItemContainer"

export default function Products({
    categoriesList,
    onClickSetCategoryId,
    selectedCategory,
}) {
    const classes = useStyles()

    // console.log("prod", selectedCategory.product.length)

    return (
        <div>
            <TitleContainer
                titleText='List of Products:'
                buttonText='add product'
                options={categoriesList}
                onClickSetCategoryId={onClickSetCategoryId}
            />
            <div className={classes.productsContent}>
                {selectedCategory?.product.length !== 0 ? (
                    selectedCategory?.product?.map((product) => (
                        <ProductsItemContainer
                            key={product._id}
                            product={product}
                        />
                    ))
                ) : (
                    <p className={classes.productText}>
                        There are no products in the{" "}
                        <span className={classes.categoryName}>
                            {selectedCategory?.name}
                        </span>{" "}
                        category.
                    </p>
                )}
            </div>

            {selectedCategory?.name}
        </div>
    )
}
