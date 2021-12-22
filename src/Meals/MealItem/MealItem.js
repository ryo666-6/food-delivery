import React from 'react'
import MealForm from './MealForm'
import classes from '../MealItem/MealItem.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react/cjs/react.development'

const MealItem = props => {
    const cartCtx = useContext(CartContext)

    const price = `¥${props.price.toFixed(2)}`

    const AddToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price 
        })
    };
    return (
       <li className={classes.meal}>
           <div>
               <h3>{props.name}</h3>
               <div className={classes.description}>{props.description}</div>
               <div className={classes.price}>{price}</div>
           </div>
           <div>
                <MealForm onAddToCart={AddToCartHandler}/>
           </div>
       </li>
    )
}

export default MealItem
