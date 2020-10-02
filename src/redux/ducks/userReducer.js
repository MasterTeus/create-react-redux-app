const incitial_values = {
  name: '',
};

export const userReducer = (state = incitial_values, action) => {
  switch (action.type) {
    case "USER_MODIFY_NAME":
      return {
        ...state,
        name: action.name,
      };
      default:
        return state;
  }
};
