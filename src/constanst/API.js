import axios from "axios";
export const API = "https://603e558448171b0017b2f2e0.mockapi.io/todolist/";

export function loadData() {
  return axios.get(API);
}
export function addItemToDoList(data) {
  return axios.post(API, data);
}
export function deleteItemToDoList(data) {
  return axios.delete(API + data.idItem);
}
export function updateItemToDoList(data) {
  return axios.put(API + data.id, {
    name: data.name,
    status: data.status
  });
}
