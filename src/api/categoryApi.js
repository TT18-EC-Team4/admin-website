import axiosClient from "./axiosClient";

const categoryApi = {
    getAll: (params) => {
        const url = '/category';
        return axiosClient.get(url, {params});
    },
    createOne: () => {
        const url = '/category';
        return axiosClient.post(url);
    },
    delete: (id) => {
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    },
    update: (id) => {
        const url = `/category/${id}`;
        return axiosClient.put(url);
    }
}

export default categoryApi;