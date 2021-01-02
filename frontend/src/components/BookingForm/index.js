import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { oneSpot } from "../../store/spots";
import { useHistory } from "react-router-dom";

const BookingForm = () => {
  const COLORS = ["orange", "yellow", "white", "black", "brown", "gray"];

  const [color, setColor] = useState(COLORS[0]);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  //   const { spotId } = useParams();

  useEffect(() => {
    //     dispatch(oneSpot());
  }, [dispatch]);

  //   const userSpots = useSelector((state) => state.spots.userSpots);
  //   console.log("USER SPOTS:", userSpots);

  //   const loggedInUser = useSelector((state) => {
  //     console.log(state);
  //     return state.session.user;
  //   });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({});
    // history.push("/");
  };

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <h1>booking form</h1>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Select a date
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          {COLORS.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">book the spot</button>
    </form>
  );
};

export default BookingForm;
