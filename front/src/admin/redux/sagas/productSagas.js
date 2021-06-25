import { takeLatest, put } from "redux-saga/effects"
import { ADD_PRODUCT } from "../types"
import { fetchAddProduct } from "../../helpers/httpServices"
import { togleIsLogin } from "../actions/loginAdmin"

function* addProduct({ payload }) {
    const {
        productName,
        productIngredients,
        productPrice,
        fileName,
        selectedCategoryId,
    } = payload
    console.log("payload in saga", payload)
    try {
        yield fetchAddProduct(
            productName,
            productIngredients,
            productPrice,
            fileName,
            selectedCategoryId
        )
        yield put(togleIsLogin())
    } catch (e) {
        console.log(e)
    }
}

// function* addCategoryImg({ payload }) {
//     const { formData } = payload
//     try {
//         yield fetchAddImg(formData)
//     } catch (e) {
//         console.log(e)
//     }
// }

// function* deleteCategoryImg({ payload }) {
//     console.log(payload)
//     const fileName = payload
//     console.log("fileName in saga", fileName)
//     try {
//         yield fetchDeleteImg(fileName)
//     } catch (e) {
//         console.log(e)
//     }
// }

// function* deleteCategory({ payload }) {
//     try {
//         yield fetchDeleteCategory(payload)
//         yield put(togleIsLogin())
//     } catch (e) {
//         console.log(e)
//     }
// }

// function* updateCategory({ payload }) {
//     const { categoryId, categoryName, fileName } = payload
//     try {
//         yield fetchUpdateCetegory(categoryId, categoryName, fileName)
//         yield put(togleIsLogin())
//     } catch (e) {
//         console.log(e)
//     }
// }

export default [takeLatest(ADD_PRODUCT, addProduct)]
