import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";

const Header = (props) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="align-center">
      <NavBarContainer>
        <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: "2rem" }}>
            MindSpace
          </h1>
        </Link>

        <div>
          {Auth.loggedIn() ? (
            <>
              <MenuToggle toggle={toggle} isOpen={isOpen} />
              <MenuLinks isOpen={isOpen} />
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
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
