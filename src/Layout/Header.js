import { Fragment } from "react/cjs/react.production.min";
import mealsImage from '../assets/spencer-davis-5UeN8VrCxvs-unsplash.jpg';
import classes from './Header.module.css';
import HeaderCartBtn from "./HeaderCartBtn";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>MealsYou!</h1>
                <HeaderCartBtn onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!'/>
            </div>
        </Fragment>
    )
}

export default Header