import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Jomato</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Use Jomato123 to get 50% off upto 100 Rs." />
      </div>
    </Fragment>
  );
};

export default Header;