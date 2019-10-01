export const homeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        message: action.data
      };
    case 'REMOVE_ALL_DATA':
      return {};
    default:
      return state;
  }
};
