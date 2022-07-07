import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  INTERPRET_OK,
} from "../../common/constants/action-type";
import { InterpretPayload } from "./payload-types";

type Interpretation = {
  tagNo: string;
  result: string;
};

export interface AppReducerState {
  count: number;
  interpretations: Array<InterpretPayload>;
}

const initialState = {
  count: 0,
  interpretations: [],
};

export default function dengueReducer(
  state: AppReducerState = initialState,
  action: any
) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREASE_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };

    case INTERPRET_OK:
      const { tagNo, result } = action.payload;
      const i = state.interpretations.filter((i) => i.tagNo === tagNo);
      let nuInterpretations = new Array<Interpretation>();
      nuInterpretations.push({ ...action.payload });
      return {
        ...state,
        interpretations: nuInterpretations,
      };

    default:
      return state;
  }
}
