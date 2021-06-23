import { useState } from "react"
import Categories from "./Categories"
import { useSelector } from "react-redux"

export default function CategoriesContainer() {
    const { categories } = useSelector((state) => state.data.data)

    return <Categories categoriesList={categories} />
}
