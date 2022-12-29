// For Add item to Cart
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

// For Delete item to Cart
export const deleteCart = (product) => {
    return{
        type: "DELETEITEM",
        payload: product
    }
}