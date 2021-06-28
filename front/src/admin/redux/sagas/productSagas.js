import { takeLatest, put } from "redux-saga/effects"
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../types"
import {
    fetchAddProduct,
    fetchDeleteProduct,
    fetchUpdateProduct,
} from "../../helpers/httpServices"
import { togleIsLogin } from "../actions/loginAdmin"

function* addProduct({ payload }) {
    const {
        productName,
        productIngredients,
        productPrice,
        fileName,
        selectedCategoryId,
        isNew,
        isPromotion,
    } = payload
    console.log("payload in saga", payload)
    try {
        yield fetchAddProduct(
            productName,
            productIngredients,
            productPrice,
            fileName,
            selectedCategoryId,
            isNew,
            isPromotion
        )
        yield put(togleIsLogin())
    } catch (e) {
        console.log(e)
    }
}

function* deleteProduct({ payload }) {
    try {
        yield fetchDeleteProduct(payload)
        yield put(togleIsLogin())
    } catch (e) {
        console.log(e)
    }
}

function* updateProduct({ payload }) {
    const {
        productId,
        productName,
        productIngredients,
        productPrice,
        fileName,
        categoryId,
        isNew,
        isPromotion,
    } = payload
    try {
        yield fetchUpdateProduct(
            productId,
            productName,
            productIngredients,
            productPrice,
            fileName,
            categoryId,
            isNew,
            isPromotion
        )
        yield put(togleIsLogin())
    } catch (e) {
        console.log(e)
    }
}

export default [
    takeLatest(ADD_PRODUCT, addProduct),
    takeLatest(DELETE_PRODUCT, deleteProduct),
    takeLatest(UPDATE_PRODUCT, updateProduct),
]
