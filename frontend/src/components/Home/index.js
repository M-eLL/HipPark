import "./index.css";
import picture from "./logo.png";

import { useSelector } from "react-redux";

const Home = () => {
  const loggedInUser = useSelector((state) => {
    console.log(state);
    return state.session.user;
  });

  return (
    <div id="home-page-container">
      {/* <img src={picture} /> */}
      {/* <div id="home-page-overlay">
        <h1>WElcome!</h1>
      </div> */}
      {loggedInUser && (
        <h3>welcome {loggedInUser.username}, let's find some parking!</h3>
      )}
    </div>
  );
};

export default Home;
