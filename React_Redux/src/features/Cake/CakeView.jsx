import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
const CakeView = () => {
  const numOfCakes = useSelector((bullshit) => bullshit.cake.numOfCakes);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(1);
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes} </h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <input
        type="number"
        name="number"
        id="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Cake</button>
    </div>
  );
};

export default CakeView;
