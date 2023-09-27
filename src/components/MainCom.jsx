import { useState } from "react";
import Form from "./Form";
import Cards from "./Cards";
import "./MainCom.css";
import ThankCom from "./ThankCom";

function MainCom() {
  const [status, setStatus] = useState({
    name: "",
    number: "",
    year: "",
    cvc: "",
  });

  const [showThank, setShowThank] = useState(false);

  const handleSub = (data) => {
    setStatus(data);
  };

  const handleThank = (data) => {
    setShowThank(data);
  };

  return (
    <main>
      <div className="BackgroundBox">
        <div>
          <Cards status={status} />
        </div>
      </div>
      <div className="FormBox">
        {!showThank && <Form handleSub={handleSub} handleThank={handleThank} />}
        {showThank && <ThankCom />}
      </div>
    </main>
  );
}
export default MainCom;
