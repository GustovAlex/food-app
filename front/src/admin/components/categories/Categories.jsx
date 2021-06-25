import useStyles from "./categoriesStyles"
import TitleContainer from "../common/title/TitleContainer"
import CategoriesItemContainer from "./categoriesItem/CategoriesItemContainer"

export default function Categories({ categoriesList }) {
    const classes = useStyles()

    return (
        <div className={classes.categoriesWrap}>
            <TitleContainer
                titleText='List of Categories:'
                buttonText='add category'
                lable='category'
            />
            <div className={classes.categoriesContent}>
                {categoriesList
                    ? categoriesList.map((category) => (
                          <CategoriesItemContainer
                              key={category._id}
                              category={category}
                          />
                      ))
                    : null}
            </div>
        </div>
    )
}
