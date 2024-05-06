import axios from "axios"

function getBridal(){
    const promisse = axios.get(`${process.env.REACT_APP_API_URL}/charraia/list-itens`)
    return promisse
}

function insertToCart(body){
    const promisse = axios.post(`${process.env.REACT_APP_API_URL}/charraia/cart`, body)
    return promisse
}

function editQuantity(param){
    const promisse = axios.put(`${process.env.REACT_APP_API_URL}/charraia/list-itens/${param}`)
    return promisse
}
const apiAuth = {getBridal, insertToCart, editQuantity};

export default apiAuth