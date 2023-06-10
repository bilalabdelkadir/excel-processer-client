const backendUrl = 'http://localhost:3001/api';

const uploadExcelFileUrl: string = `${backendUrl}/upload`;
const getProductsUrl: string = `${backendUrl}/product`;
const getProductByIdUrl = (id: string) => `${backendUrl}/product/${id}`;
const deleteProductByIdUrl = (id: string) => `${backendUrl}/product/${id}`;
const deleteAllProductsUrl : string = `${backendUrl}/product`;
const createProductUrl: string = `${backendUrl}/product`;
const updateProductUrl = (id: string) => `${backendUrl}/product/${id}`;

export {
    uploadExcelFileUrl,
    getProductsUrl,
    getProductByIdUrl,
    deleteProductByIdUrl,
    deleteAllProductsUrl,
    createProductUrl,
    updateProductUrl
}