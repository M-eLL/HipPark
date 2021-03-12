import { fetch } from "./csrf.js";

const GET_ONE_SPOT = "spots/getOneSpot";
const GET_SPOTS = "spots/getSpots";

const getOneSpot = (spots) => ({
  type: GET_ONE_SPOT,
  payload: spots,
});

const getSpots = (spots) => ({
  type: GET_SPOTS,
  payload: spots,
});

export const oneSpot = (spotsId) => async (dispatch) => {
  let response = await fetch(`/api/spots/${spotsId}/`);
  dispatch(getOneSpot(response.data.spots));
  return response;
};

export const allSpots = () => async (dispatch) => {
  let response = await fetch(`/api/spots/`);
  dispatch(getSpots(response.data.spots));
  return response;
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SPOTS: {
      newState = [...action.payload];
      return newState;
    }
    case GET_ONE_SPOT: {
      const spots = {};
      const spotsArr = action.payload;
      spotsArr.forEach((spot) => {
        spots[spot.id] = spot;
      });
      newState = { ...state };
      newState.userSpots = spots;
      return newState;
    }
    default:
      return state;
  }
}

export default reducer;
