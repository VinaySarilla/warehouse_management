import axios from "axios";
const URL = "http://localhost:8080"

const getProducts = async () => {
    return axios.get(`${URL}/getProducts`).then(res => res.data)
}

const addProduct = (product) => {
    return axios.post(`${URL}/addProduct`, product)
}

const deleteProduct = (id) => {
    return axios.post(`${URL}/deleteProduct?id=${id}`)
}


const getVendors = async () => {
    return axios.get(`${URL}/getVendors`).then(res => res.data)
}

const addVendors = (product) => {
    return axios.post(`${URL}/addVendors`, product)
}

const deleteVendors = (id) => {
    return axios.post(`${URL}/deleteVendors?id=${id}`)
}


const getEmployees = async () => {
    return axios.get(`${URL}/getEmployees`).then(res => res.data)
}

const addEmployee = (product) => {
    return axios.post(`${URL}/addEmployee`, product)
}

const deleteEmployee = (id) => {
    return axios.post(`${URL}/deleteEmployee?id=${id}`)
}


const getOrders = async () => {
    return axios.get(`${URL}/getOrders`).then(res => res.data)
}

const addOrder = (product) => {
    return axios.post(`${URL}/addOrder`, product)
}

const deleteOrder = (id) => {
    return axios.post(`${URL}/deleteOrder?id=${id}`)
}

const api = {
    getProducts, addProduct, deleteProduct, getOrders,
    getEmployees, getVendors, addEmployee, addOrder,
    addVendors, deleteOrder, deleteProduct, deleteVendors, deleteEmployee
}

export default api;