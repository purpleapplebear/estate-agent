import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3000'
})

export const fetchAdmin=()=>{
    return estateApi.get('/auth').then(res=>{
        return res.data
    }
    )
}