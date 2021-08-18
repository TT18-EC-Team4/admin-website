import axiosClient from "./axiosClient";

const uploadApi = {
    upload: () => {
        const url = '/upload';
        return axiosClient.post(url);
    },
    destroy: () => {
        const url = '/destroy';
        return axiosClient.post(url);
    }
}

export default uploadApi;