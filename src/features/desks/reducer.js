import * as actionType from "./types";

const initialState = {
  list: [],
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case actionType.ADD_DESK: {
      const { desk } = payload;
      const list = [...state.list, desk];

      return {
        ...state,
        list,
      };
    }

    case actionType.SET_DESKS: {
      const { desks } = payload;

      return {
        ...state,
        list: desks,
      };
    }

    case actionType.REMOVE_DESK: {
      const { removeId } = payload;
      const list = state.list.filter(({ id }) => id !== removeId);

      return {
        ...state,
        list,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
