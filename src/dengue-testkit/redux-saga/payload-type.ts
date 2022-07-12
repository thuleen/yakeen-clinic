import { Sample } from "../../common/constants/payload-type";

export interface DengueSample extends Sample {
  c: boolean;
  igM: boolean;
  igG: boolean;
  cC: boolean;
  ns1Ag: boolean;
  interpretation: string;
}

export type Patient = {
  idType: string;
  name: string;
  socialId: string;
  mobileNo: string;
};

export type Photo = {
  tagNo: string;
  dataUri: string;
};
