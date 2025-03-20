import FruitContext from "./FruitContext";
import { useContext } from "react";

const Prop = () => {
  const { arr, message } = useContext(FruitContext);
  const mapData = arr.map((x, i) => <li key={i}>{x}</li>);
  return (
    <div>
      <p>{message.msg}</p>
      <ul>{mapData}</ul>
    </div>
  );
};

export default Prop;
