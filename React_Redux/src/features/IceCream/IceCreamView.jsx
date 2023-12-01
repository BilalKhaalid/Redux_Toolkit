import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const numOfIceCreams = useSelector((lora) => lora.IceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCreams: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered(4))}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(10))}>Restock IceCream</button>
    </div>
  );
};

export default IceCreamView;
