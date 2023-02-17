import axios, { AxiosResponse } from "axios";

export const api = axios.create();
export type ApiResponse<T = any, D = any> = AxiosResponse<T, D>;
