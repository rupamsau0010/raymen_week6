import axios from "axios"

const instance = axios.create({
    baseURL: "https://jalirani.github.io/files"
})

export default instance