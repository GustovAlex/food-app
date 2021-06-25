import { takeLatest, put } from "redux-saga/effects"
import {
    ADD_CATEGORY,
    ADD_CATEGORY_IMG,
    DELETE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY_IMG,
} from "../types"
import {
    fetchAddCategory,
    fetchAddImg,
    fetchDeleteCategory,
    fetchUpdateCetegory,
    fetchDeleteImg,
} from "../../helpers/httpServices"
import { togleIsLogin } from "../actions/loginAdmin"

function* addCategory({ payload }) {
    const { categoryName, fileName } = payload
    console.log("payload in saga", payload)
    try {
        yield fetchAddCategory(categoryName, fileName)
        yield put(togleIsLogin())
    } catch (e) {
        console.log(e)
    }
}

function* addCategoryImg({ payload }) {
    const { formData } = payload
    try {
        yield fetchAddImg(formData)
    } catch (e) {
        console.log(e)
    }
}

function* deleteCategoryImg({ payload }) {
    console.log(payload)
    const fileName = payload
    console.log("fileName in saga", fileName)
    try {
        yield fetchDeleteImg(fileName)
    } catch (e) {
        console.log(e)
    }
}

function* deleteCategory({ payload }) {
    try {
        yield fetchDeleteCategory(payload)
        yield put(togleIsLogin())
    } catch (e) {
        console.log(e)
    }
}

function* updateCategory({ payload }) {
    const { categoryId, categoryName, fileName } = payload
    try {
        yield fetchUpdateCetegory(categoryId, categoryName, fileName)
        yield put(togleIsLogin())
    } catch (e) {
        console.log(e)
    }
}

export default [
    takeLatest(ADD_CATEGORY, addCategory),
    takeLatest(ADD_CATEGORY_IMG, addCategoryImg),
    takeLatest(DELETE_CATEGORY, deleteCategory),
    takeLatest(UPDATE_CATEGORY, updateCategory),
    takeLatest(DELETE_CATEGORY_IMG, deleteCategoryImg),
]
