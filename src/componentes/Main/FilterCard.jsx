import "../../hojas-de-estilo/Styles-Main/FilterCard.css";
import Toggle from "./Toggle";

function FilterCard({ img, title, text }) {
  return (
    <>
    <div className="container-filterCard">

      <div className="container-filtercard-two">
        <div className="t1">
          <a href="#">{img}</a>
          <p>{title}</p>
        </div>
        <p>{text}</p>
      </div>
      
      <Toggle />
    </div>
    
  </>
  );
}

export default FilterCard;
