import React from 'react'
import MealsSum from './MealsSum'
import AvailableMeals from './AvailableMeals'
import { Fragment } from 'react/cjs/react.production.min'

const Meals = () => {
    return (
        <Fragment>
            <MealsSum/>
            <AvailableMeals/>
        </Fragment>
    )
}

export default Meals
