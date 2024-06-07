import { FaStar } from "react-icons/fa";

function Star({ isSelected, onClick }) {
  return (
    <FaStar
      className={`fa-star ${isSelected ? "yellow" : "grey"}`}
      onClick={onClick}
    ></FaStar>
  );
}

export default Star;
