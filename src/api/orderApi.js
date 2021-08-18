import axiosClient from "./axiosClient";

const orderApi = {
    getAll: (params) => {
        const url = '/orders';
        return axiosClient.get(url, {params});
    },
    delete: (id) => {
        const url = `/orders/${id}`;
        return axiosClient.delete(url);
    },
    update: (id) => {
        const url = `/orders/${id}`;
        return axiosClient.put(url);
    }
}

export default orderApi;