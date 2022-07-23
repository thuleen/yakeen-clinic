import axios from "axios";
import { Register, Login } from "../constants/payload-type";

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

const login = async (payload: Login) => {
  const { email, password } = payload;
  try {
    const { data } = await axios.post<Register>(
      `${import.meta.env.VITE_APP_API_URL}/login-clinic-user`,
      {
        password: import.meta.env.VITE_APP_PWD,
        email: email,
        usrPassword: password,
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
export { login };
