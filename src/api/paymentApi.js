import axiosClient from "./axiosClient";

const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, {params});
    },
    createOne: () => {
        const url = '/products';
        return axiosClient.post(url);
    },
    delete: (id) => {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
    update: (id) => {
        const url = `/products/${id}`;
        return axiosClient.put(url);
    }
}

export default productApi;