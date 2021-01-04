import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { oneSpot } from "../../store/spots";
import { bookings, deleteBookings, addBookings } from "../../store/bookings";
import { editBookings } from "../../store/bookings";

const BookingForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const { spotId } = useParams();

  const loggedInUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");

  const deleteHandler = () => {
    console.log(spotId);
    dispatch(deleteBookings(spotId, user.id));
    history.push("/bookings");
  };

  const addBookingHandler = () => {
    console.log(spotId);
    dispatch(addBookings(spotId, user.id));
    history.push("/bookings");
  };

  const editBookingHandler = () => {
    console.log(spotId);
    dispatch(editBookings(spotId, loggedInUser.id, name));
    history.push("/bookings");
  };

  useEffect(() => {
    dispatch(oneSpot());
    dispatch(bookings(1));
  }, [dispatch]);

  return (
    <div className="booking-form">
      {loggedInUser && (
        <>
          <div>
            <div id="leave-note">
              <label>
                Leave a note
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={editBookingHandler}>✔</button>
              </label>
            </div>
          </div>

          <div>
              <button onClick={addBookingHandler}>add booking</button>
          </div>

          <div>
            <button onClick={deleteHandler}>delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingForm;
