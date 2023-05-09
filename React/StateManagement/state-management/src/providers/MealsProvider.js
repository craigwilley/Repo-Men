import React from 'react';

const MealsContext = React.createContext();

const todaysMeals = [ "Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes" ];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = React.useState(todaysMeals);

  const addMeal = (meal) => {
    setMeals([...meals, meal]);
  };

  return (
    <MealsContext.Provider value={{ meals, addMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;