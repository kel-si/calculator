import Screen from "./Screen";
import ButtonList from "./ButtonList";
import "../styles/index.css";

export default function Container() {
  return (
    <div className="calc-container">
      This is the container
      <Screen />
      <ButtonList />
    </div>
  );
}
