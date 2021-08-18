import axiosClient from "./axiosClient";

const userApi = {
    login: () => {
        const url = '/login';
        return axiosClient.post(url);
    },
    logout: () => {
        const url = '/logout';
        return axiosClient.get(url);
    },
    getInfo: () => {
        const url = `/infor`;
        return axiosClient.get(url);
    },
}

export default userApi;