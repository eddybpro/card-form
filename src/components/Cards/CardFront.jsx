import "./CardFront.css";
import CardImgF from "../../assets/bg-card-front.png";
import Logo from "../../assets/card-logo.svg";
import PropTypes from "prop-types";

function CardFront(props) {
  const formateStr = (str) => {
    return str.match(/\w{4}/g).join(" ");
  };

  return (
    <div className="CardFront">
      <div className="CardFront-ImgBox">
        <img src={CardImgF} alt="" />
        <div className="CardFront-ImgBox-Txt">
          <img src={Logo} alt="" className="Logo" />
          <p className="CardFront-ImgBox-Txt-CardNumber">
            {props.status.number
              ? `${formateStr(props.status.number)}`
              : `0000 0000 0000
            0000`}
          </p>
          <div className="CardFront-ImgBox-Txt-Container">
            <p className="CardFront-ImgBox-Txt-Container-UserName">
              {props.status.name ? `${props.status.name}` : "jane appleseed"}
            </p>
            <p className="CardFront-ImgBox-Txt-Container-Date">
              <span className="CardFront-ImgBox-Txt-Container-Date-M">
                {props.status.month ? `${props.status.month}` : "00"}
              </span>
              /
              <span className="CardFront-ImgBox-Txt-Container-Date-Y">
                {props.status.year ? `${props.status.year}` : "00"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardFront.propTypes = {
  status: PropTypes.object,
};

export default CardFront;
