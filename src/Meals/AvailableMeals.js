import React from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './Available.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: '寿司',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'シュニッツェル',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'ハンバーガー',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'サラダ',
      description: 'Healthy...and green...',
      price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
    ));
    return (
        <section className={classes.meals}>
            <ul>
              <Card>
                {mealsList}
              </Card>
            </ul>
        </section>
    )
}

export default AvailableMeals
