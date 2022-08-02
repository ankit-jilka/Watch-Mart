export const addItem = (prd) => {
    return {
        type: "ADDITEM",
        payload: prd
    }
}

export const delItem = (prd) => {
    return {
        type: "DELITEM",
        payload: prd
    }
}

export const checkOutGo = () => {
    return {
        type: "CHECKOUT"
    }
}

export const replaceQty = (prdObj) => {
    return {
        type: "REPLACEQTY",
        payload: prdObj
    }
}