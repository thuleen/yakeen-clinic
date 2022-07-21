import axios from "axios";
import { SampleCreation, UpdateSamplePhoto } from "../constants/payload-type";

const apiCreateSample = async (payload: SampleCreation) => {
  // const { clinicId, tagNo, testType, name, mobileNo, idType, socialId } = payload;
  try {
    const { data } = await axios.post<SampleCreation>(
      `${import.meta.env.VITE_APP_API_URL}/create-sample`,
      {
        password: import.meta.env.VITE_APP_PWD,
        ...payload,
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
export { apiCreateSample };

const apiSavePhoto = async (payload: UpdateSamplePhoto) => {
  try {
    const { data } = await axios.put<SampleCreation>(
      `${import.meta.env.VITE_APP_API_URL}/update-sample-photo`,
      {
        password: import.meta.env.VITE_APP_PWD,
        ...payload,
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
export { apiSavePhoto };
