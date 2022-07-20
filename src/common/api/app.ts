import axios from "axios";
import { Register } from "../constants/payload-type";

interface InitializeResponse {}

const initialize = async () => {
  try {
    const { data } = await axios.post<InitializeResponse>(
      `${import.meta.env.VITE_APP_API_URL}/login-client-app`,
      { password: import.meta.env.VITE_APP_PWD },
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
export { initialize };
