import axios from "axios";
import React from "react";
import { BASE_URL } from "./constants";

const axioInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axioInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("Token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axioInstance;
