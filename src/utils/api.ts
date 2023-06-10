import axios from 'axios';
import { uploadExcelFileUrl } from './config';
import { getProductsUrl } from './config';

const uploadExcelFile = (file: any) => {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post(uploadExcelFileUrl, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

const getProducts = () => axios.get(getProductsUrl);

export {
    uploadExcelFile,
    getProducts

}

