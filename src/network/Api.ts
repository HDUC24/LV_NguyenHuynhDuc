import axios from "axios";


export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post("https://example.com/api/login", {
        email,
        password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }

// export const getProducts = async () => {
//   try {
//     const response = await axios.get("https://example.com/api/products");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };