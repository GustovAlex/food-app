import axios from "axios"

export const fetchLoginAdmin = async (adminEmail, password) => {
    const response = await axios.post("http://localhost:5000/api/admin", {
        adminEmail,
        password,
    })
    return response
}

export const fetchGetData = async () => {
    const response = await axios.get("http://localhost:5000/api/admin", {
        headers: { Authorization: localStorage.getItem("Authorization") },
    })
    return response
}

export const fetchAddCategory = async (categoryName, fileName) => {
    const response = await axios.post(
        "http://localhost:5000/api/category",
        {
            name: categoryName,
            img: fileName,
        },
        {
            headers: { Authorization: localStorage.getItem("Authorization") },
        }
    )
    console.log("response", response)
    return response
}

export const fetchAddImg = async (formData) => {
    try {
        const res = await axios.post(
            "http://localhost:5000/api/file",
            formData,
            {
                headers: {
                    Authorization: localStorage.getItem("Authorization"),
                },
            }
        )
        return res
    } catch (err) {
        if (err.response.status === 500) {
            console.log("There was a problem with the server")
        } else {
            console.log(err.response.data.msg)
        }
    }
}

export const fetchDeleteImg = async (fileName) => {
    console.log("fileName in HTTP", fileName)
    try {
        const res = await axios.post(
            "http://localhost:5000/api/file/delete",
            { fileName: fileName },
            {
                headers: {
                    Authorization: localStorage.getItem("Authorization"),
                },
            }
        )
        return res
    } catch (err) {
        if (err.response.status === 500) {
            console.log("There was a problem with the server")
        } else {
            console.log(err.response.data.msg)
        }
    }
}

export const fetchUpdateCetegory = async (
    categoryId,
    categoryName,
    fileName
) => {
    const response = await axios.put(
        `http://localhost:5000/api/category/${categoryId}`,
        {
            name: categoryName,
            img: fileName,
        },
        {
            headers: { Authorization: localStorage.getItem("Authorization") },
        }
    )
    return response
}

export const fetchDeleteCategory = async (categoryId) => {
    const response = await axios.delete(
        `http://localhost:5000/api/category/${categoryId}`,
        {
            headers: { Authorization: localStorage.getItem("Authorization") },
        }
    )
    return response
}

/////////// product

export const fetchAddProduct = async (
    productName,
    productIngredients,
    productPrice,
    fileName,
    selectedCategoryId,
    isNew,
    isPromotion
) => {
    const response = await axios.post(
        "http://localhost:5000/api/product",
        {
            name: productName,
            ingredients: productIngredients,
            price: productPrice,
            img: fileName,
            categoryId: selectedCategoryId,
            isNewProduct: isNew,
            isPromotionProduct: isPromotion,
        },
        {
            headers: { Authorization: localStorage.getItem("Authorization") },
        }
    )
    console.log("response", response)
    return response
}

export const fetchDeleteProduct = async (productId) => {
    const response = await axios.delete(
        `http://localhost:5000/api/product/${productId}`,
        {
            headers: { Authorization: localStorage.getItem("Authorization") },
        }
    )
    return response
}

export const fetchUpdateProduct = async (
    productId,
    productName,
    productIngredients,
    productPrice,
    fileName,
    categoryId,
    isNew,
    isPromotion
) => {
    const response = await axios.put(
        `http://localhost:5000/api/product/${productId}`,
        {
            name: productName,
            ingredients: productIngredients,
            price: productPrice,
            img: fileName,
            categoryId,
            isNewProduct: isNew,
            isPromotionProduct: isPromotion,
        },
        {
            headers: { Authorization: localStorage.getItem("Authorization") },
        }
    )
    return response
}
