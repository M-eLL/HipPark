import { fetch } from "./csrf.js";

const GET_BOOKINGS = "bookings/getBookings";
const DELETE_BOOKING = "bookings/deleteBooking";
const ADD_BOOKING = "bookings/addBooking";
const EDIT_BOOKING = "bookings/editBooking";

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
const editBooking = (payload) => {
  return {
    type: EDIT_BOOKING,
    payload: payload,
  };
};

export const bookings = (userId) => async (dispatch) => {
  let response = await fetch(`/api/users/${userId}/bookings/`);

  dispatch(getBookings(response.data));
  return response;
};

export const deleteBookings = (spotId, userId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/bookings/${spotId}/${userId}/`, {
      method: "DELETE",
    });
    const id = response.data.bookingId;
    dispatch(deleteBooking(id));
  };
};

export const addBookings = (spotId, userId) => async (dispatch) => {
  let response = await fetch(`/api/bookings/${spotId}/`, {
    method: "POST",
    body: JSON.stringify({ userId }),
  });

  dispatch(addBooking(response.data));
};

export const editBookings = (spotId, userId, nickname) => async (dispatch) => {
  let response = await fetch(`/api/bookings/spots/${spotId}/`, {
    method: "PUT",
    body: JSON.stringify({ userId, nickname }),
  });

  dispatch(editBooking(response.data));
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
    case EDIT_BOOKING: {
      newState = [...state];
      let currentIndex;
      newState.forEach((booking, index) => {
        if (booking.id === action.payload.id) {
          currentIndex = index;
        }
      });
      newState[currentIndex] = action.payload;

      return newState;
    }
    default:
      return state;
  }
}

export default reducer;
