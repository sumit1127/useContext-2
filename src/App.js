import FruitContext from "./FruitContext";
import Prop from "./Prop";

const App = () => {
  let arr = ["apple", "banana", "mango", "kiwi"];

  const message = {
    msg: "Fruits",
  };

  return (
    <>
      <FruitContext.Provider value={{ arr, message }}>
        <Prop />
      </FruitContext.Provider>
    </>
  );
};

export default App;
