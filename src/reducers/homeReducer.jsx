export const homeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        message: action.msg
      };
    case 'REMOVE_ALL_DATA':
      return {
        msg: '',
        sectionNav: []
      };
    default:
      return state;
  }
};
