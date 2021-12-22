import { useContext, useState, useEffect } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartBtn.module.css';

const HeaderCartBtn = props => {
    const cartCtx = useContext(CartContext)
    const {items} = cartCtx;

    const [isHighlighted, setIsHighlighted] = useState(false);

    const btnClass = `${classes.button} ${isHighlighted ? classes.bump : ''}`
    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setIsHighlighted(true)
        const timer = setTimeout(() => {
            setIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    },[items])
    const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0);

    

    return (
        <button className={btnClass} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartBtn