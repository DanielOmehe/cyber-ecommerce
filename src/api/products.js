// src/api/index.js
export const getProducts = async () => {
  return fetch("/api/products").then(res => res.json());
};
