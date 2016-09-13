export const houseResource = (state = [], action)=> {
  switch (action.type) {
  case 'RECEIVE_HOUSE_RESOURCE':
    return action.data;
  default:
    return state;
  }
};
