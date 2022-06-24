import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getMeals } from '../Redux/Slice/mealsSlice';
// import getDrinks from '../components/getDrinks';

const Drinks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');

    dispatch(getMeals('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'));
  }, []);

  const Estados = useSelector((state) => state);

  return (
    <div>
      <Header title="Drinks" />

      <button
        type="button"
        data-testid="All-category-filter"
      >
        All

      </button>

      <button
        type="button"
        data-testid="magicString"
      >
        1
      </button>

      <button
        type="button"
        data-testid="magicString"
      >
        2
      </button>

      <button
        type="button"
        data-testid="magicString"
      >
        3
      </button>

      <button
        type="button"
        data-testid="magicString"
      >
        4
      </button>

      <button
        type="button"
        data-testid="magicString"
      >
        5
      </button>

      { Estados.mealsSlice.meals.map((mealCard) => (
        <div key={ mealCard.idMeal }>
          {/* <img src={ mealCard.strMealThumb } alt={ mealCard.strMeal } /> */}
          <h5>{ mealCard.strMeal }</h5>
        </div>))}
      <Footer />
    </div>
  );
};

export default Drinks;
