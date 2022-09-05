import axios from 'axios'
import store from '../store/'
const axiosData={
    BaseURL_API:`${store.state.public}api`
}

axios.defaults.baseURL = axiosData.BaseURL_API;
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
axios.defaults.headers.ContentType = 'multipart/form-data';
axios.defaults.headers.Accept = 'application/json';

export default {axios,axiosData};