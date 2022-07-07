import {
  DECREASE_ASYNC,
  DECREASE_COUNTER,
  INCREASE_ASYNC,
  INCREASE_COUNTER,
  INTERPRET,
  INTERPRET_OK,
} from "../../common/constants/action-type";
import { InterpretPayload } from "./payload-types";

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
});

export const increaseAsync = () => ({
  type: INCREASE_ASYNC,
});

export const decreaseAsync = () => ({
  type: DECREASE_ASYNC,
});

export const interpretTest = (payload: InterpretPayload) => ({
  type: INTERPRET,
  payload: payload,
});

export const saveInterpretation = (payload: InterpretPayload) => ({
  type: INTERPRET_OK,
  payload: payload,
});
