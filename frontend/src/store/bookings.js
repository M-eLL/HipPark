import { fetch } from "./csrf.js";

const GET_BOOKINGS = "bookings/getBookings";
const DELETE_BOOKING = "bookings/deleteBooking";
const ADD_BOOKING = "bookings/addBooking";

const getBookings = (payload) => ({
  type: GET_BOOKINGS,
  payload,
});
const addBooking = (payload) => ({
  type: ADD_BOOKING,
  payload,
});

const deleteBooking = (payload) => {
  return {
    type: DELETE_BOOKING,
    payload: payload,
  };
};

export const bookings = (userId) => async (dispatch) => {
  let response = await fetch(`/api/users/${userId}/bookings`);

  dispatch(getBookings(response.data));
  return response;
};

export const deleteBookings = (spotId, userId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/bookings/${spotId}/${userId}`, {
      method: "DELETE",
    });
    const id = response.data.bookingId;
    dispatch(deleteBooking(id));
  };
};

export const addBookings = (spotId, userId) => async (dispatch) => {
  let response = await fetch(`/api/bookings/${spotId}`, {
    method: "POST",
    body: JSON.stringify({ userId }),
  });

  dispatch(addBooking(response.data));
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_BOOKINGS: {
      newState = [...action.payload];
      return newState;
    }
    case DELETE_BOOKING: {
      newState = [...state];
      return newState.filter((booking) => booking.id !== action.payload);
    }
    case ADD_BOOKING: {
      newState = [...state, action.payload];
      return newState;
    }
    default:
      return state;
  }
}

export default reducer;
