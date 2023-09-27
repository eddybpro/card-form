import "./Cards.css";
import CardBack from "./Cards/CardBack";
import CardFront from "./Cards/CardFront";
import PropTypes from "prop-types";

function Cards(props) {
  return (
    <div className="CardsWrapper">
      <div className="CardsWrapper-Front">
        <CardFront status={props.status} />
      </div>
      <div className="CardsWrapper-Back">
        <CardBack status={props.status} />
      </div>
    </div>
  );
}

Cards.propTypes = {
  status: PropTypes.object,
};

export default Cards;
