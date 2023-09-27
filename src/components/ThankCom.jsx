import "./ThankCom.css";
import CompleteIcon from "../assets/icon-complete.svg";

function ThankCom() {
  return (
    <div className="ThankComBox">
      <img src={CompleteIcon} alt="" />
      <h1 className="ThankComBox-Title">Thank you</h1>
      <p className="ThankComBox-Para">we&apos;ve added your card details</p>
      <button className="ThankComBox-Btn">Continue</button>
    </div>
  );
}
export default ThankCom;
