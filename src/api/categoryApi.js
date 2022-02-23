import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/catalog";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/catalog/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/catalog";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/catalog/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/catalog/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
