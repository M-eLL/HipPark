import { fetch } from "./csrf.js";

const GET_SPOTS = "spots/getSpots";

const getSpots = (spots) => ({
  type: GET_SPOTS,
  payload: spots,
});

export const spot = () => async (dispatch) => {
  // let response = await fetch(`/api/spots/${spotsId}`);
  let response = await fetch(`/api/spots`);
  //   response = await response.toJSON()
  //   console.log(response)
  // let spots = response.data.spots
  dispatch(getSpots(response.data.spots));
  return response;
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SPOTS: {
      const spots = {};
      const spotsArr = action.payload;
      spotsArr.forEach((spot) => {
        spots[spot.id] = spot;
      });
      newState={...state}
      newState.userSpots = spots
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
