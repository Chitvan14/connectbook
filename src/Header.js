import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubsciptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import { useStateValue } from "./StateProvider";
import "./Truncated.css";
import logo from "./connectbooklogo.png";
import ForumIcon from "@material-ui/icons/Forum";

import { NavLink } from "react-router-dom";



function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* header left  */}
      <div className="header__left">
        <img src={logo} />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Connectbook" />
        </div>
       
      </div>

      {/* header center  */}
      <div className="header__center">
        <NavLink to={"/"} exact activeClassName="header__option--active">
          <div className="header__option ellipsis" data-text="Home">
            <HomeIcon fontSize="large" />
          </div>
        </NavLink>
        <NavLink to={"/page"} activeClassName="header__option--active">
          <div className="header__option ellipsis" data-text="Pages">
            <FlagIcon fontSize="large" />
          </div>
        </NavLink>
        <NavLink to={"/watch"} activeClassName="header__option--active">
        <div className="header__option ellipsis" data-text="Watch">
          <SubsciptionsOutlinedIcon fontSize="large" />
        </div>
        </NavLink>
       
        <NavLink to={"/message"} activeClassName="header__option--active">
          <div className="header__option ellipsis" data-text="Message">
           
              <ForumIcon fontSize="large" />
           
          </div>
        </NavLink>
       
       
      </div>

      {/* header right  */}
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

      </div>
    </div>
  );
}

export default Header;
