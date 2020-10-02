const incitial_values = {
  id: "98234y91283uy49",
};

export const menuReducer = (state = incitial_values, action) => {
  switch (action.type) {
    case "USER_MODIFY_NAME":
      return {
        ...state,
        id: action.id,
      };
      default:
        return state;
  }
};
