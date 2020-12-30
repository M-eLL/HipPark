import { fetch } from "./csrf.js";

const GET_BOOKINGS = "bookings/getBookings";

const getBookings = (payload) => ({
  type: GET_BOOKINGS,
  payload,
});

export const bookings = (userId) => async (dispatch) => {
  let response = await fetch(`/api/users/${userId}/bookings`);
  //   response = await response.toJSON()
  //   console.log(response)

  dispatch(getBookings(response.data));
  return response;
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_BOOKINGS: {
      newState = [...action.payload];
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
