import request from 'superagent';

export const requestHouseDetails = (id) => {
  return (dispatch) => {
    request
      .get(`/api/houseDetails/${id}`)
      .end((err, res) => {
        if(err){
          throw(err);
        }else{
          dispatch(receiveHouse(res.body));
        }
      });
  };
};

export const receiveHouse = (detail) => {
  return ({
    type: 'RECEIVE_HOUSE',
    detail
  });
};

