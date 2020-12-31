import { fetch } from "./csrf.js";

const GET_SPOTS = "spots/getSpots";

const getSpots = (spots) => ({
  type: GET_SPOTS,
  payload:spots
});

export const spot = () => async (dispatch) => {
  // let response = await fetch(`/api/spots/${spotsId}`);
  let response = await fetch(`/api/spots`);
  //   response = await response.toJSON()
  //   console.log(response)

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

    default:
      return state;
  }
}

export default reducer;
