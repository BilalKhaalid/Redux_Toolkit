import React from "react";
import CakeView from "./features/Cake/CakeView";
import IceCreamView from "./features/IceCream/IceCreamView";
import UserView from "./features/users/UserView";
const App = () => {
  return (
    <div>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
};

export default App;
