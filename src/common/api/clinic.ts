import axios from "axios";
import { Register } from "../constants/payload-type";

const register = async (payload: Register) => {
  const { name, address, postcode, email } = payload;
  try {
    const { data } = await axios.post<Register>(
      `${import.meta.env.VITE_APP_API_URL}/register-clinic`,
      {
        password: import.meta.env.VITE_APP_PWD,
        name: name,
        address: address,
        postcode: postcode,
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};
export { register };
