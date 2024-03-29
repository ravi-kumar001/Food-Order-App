import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeal";
import MealsSummary from "./MealSummery";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
