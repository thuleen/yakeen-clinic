import axios from "axios";
import {
  SampleCreation,
  UpdateSamplePhoto,
  UpdateSamplePatient,
  UpdateSampleResult,
  DeleteSample,
  GetSamples,
} from "../constants/payload-type";

const create = async (payload: SampleCreation) => {
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
export { create };

const savePatient = async (payload: UpdateSamplePatient) => {
  // const { clinicId, tagNo, testType, name, mobileNo, idType, socialId } = payload;
  try {
    const { data } = await axios.put<UpdateSamplePatient>(
      `${import.meta.env.VITE_APP_API_URL}/update-patient`,
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
export { savePatient };

const savePhoto = async (payload: UpdateSamplePhoto) => {
  try {
    const { data } = await axios.put<UpdateSamplePhoto>(
      `${import.meta.env.VITE_APP_API_URL}/update-photo`,
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
export { savePhoto };

const saveResult = async (payload: UpdateSampleResult) => {
  try {
    const { data } = await axios.put<UpdateSampleResult>(
      `${import.meta.env.VITE_APP_API_URL}/update-result`,
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
export { saveResult };

const deleteSample = async (payload: DeleteSample) => {
  try {
    const { data } = await axios.delete<DeleteSample>(
      `${import.meta.env.VITE_APP_API_URL}/sample`,
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
export { deleteSample };

const getSamples = async (payload: GetSamples) => {
  try {
    const { data } = await axios.post<GetSamples>(
      `${import.meta.env.VITE_APP_API_URL}/samples`,
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
export { getSamples };
