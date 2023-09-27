import "./CardBack.css";
import CardImgB from "../../assets/bg-card-back.png";
import PropTypes from "prop-types";

function CardBack(props) {
  return (
    <div className="CardBack">
      <div className="CardBack-ImgBox">
        <img src={CardImgB} alt="" />
        <div className="CardBack-ImgBox-Txt">
          <p>{props.status.cvc ? `${props.status.cvc}` : "000"}</p>
        </div>
      </div>
    </div>
  );
}

CardBack.propTypes = {
  status: PropTypes.object,
};

export default CardBack;
