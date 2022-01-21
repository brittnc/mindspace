import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import NavBarContainer from "./NavBarContainer";

const Header = (props) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="align-center">
      <NavBarContainer>
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: "2rem", color: "white" }}>
            MindSpace
          </h1>
        </Link>

        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/progress">
                Progress
              </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/journal">
                Journal
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </NavBarContainer>
    </header>
  );
};

export default Header;
