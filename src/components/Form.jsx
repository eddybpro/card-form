import { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";

function Form(props) {
  const [inputs, setInputs] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [isError, setIsError] = useState({
    isErr: false,
    nameErr: "",
    numberErr: "",
    monthErr: "",
    yearErr: "",
    cvcErr: "",
  });

  const nameRegex = /([a-zA-Z]{3,8})+\s+([a-zA-Z]{2,8})/i;
  const numberRegex = /^\d{12}$/;
  const cvcRegex = /^\d{3}$/;

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleThank(true);

    if (!nameRegex.test(inputs.name)) {
      setIsError((prev) => ({
        ...prev,
        isErr: true,
        nameErr: "must be valid name",
      }));

      props.handleThank(false);
    }

    if (!numberRegex.test(inputs.number)) {
      setIsError((prev) => ({
        ...prev,
        isErr: true,
        numberErr: "wrong format, numbers only",
      }));

      props.handleThank(false);
    }
    if (inputs.month == "" || inputs.year == "") {
      setIsError((prev) => ({
        ...prev,
        isErr: true,
        monthErr: "can't be blank",
        yearErr: "can't be blank",
      }));

      props.handleThank(false);
    }
    const currentDate = new Date().getTime();
    const expYear = `20` + inputs.year;
    const expMonth = `${Number(inputs.month) - 1}`;
    const expDate = new Date(expYear, expMonth, "01");
    const expTime = expDate.getTime();

    if (+inputs.month > 12) {
      setIsError((prev) => ({
        ...prev,
        isErr: true,
        monthErr: "wrong date",
        yearErr: "wrong date",
      }));

      props.handleThank(false);
    }
    if (currentDate > expTime) {
      setIsError((prev) => ({
        ...prev,
        isErr: true,
        monthErr: "wrong date",
        yearErr: "wrong date",
      }));

      props.handleThank(false);
    }
    if (!cvcRegex.test(inputs.cvc)) {
      setIsError((prev) => ({
        ...prev,
        isErr: true,
        cvcErr: "wrong format!",
      }));

      props.handleThank(false);
    }
    if (inputs.cvc == "") {
      setIsError((prev) => ({
        ...prev,
        isErr: true,
        cvcErr: "can't be blank",
      }));

      props.handleThank(false);
    }
    props.handleSub(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className={isError.nameErr ? "error" : ""}>
        cardholder name
        <input
          type="text"
          name="name"
          id="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="e.g.Jane Appleseed"
        />
        <p className="FormError">{isError.nameErr}</p>
      </label>
      <label htmlFor="number" className={isError.numberErr ? "error" : ""}>
        card number
        <input
          type="text"
          name="number"
          id="number"
          value={inputs.number}
          onChange={handleChange}
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <p className="FormError">{isError.numberErr}</p>
      </label>
      <div className="Date-Month-cvcBox">
        <fieldset>
          <legend>exp. date (mm/yy)</legend>
          <label htmlFor="month" className={isError.monthErr ? "error" : ""}>
            <input
              id="month"
              name="month"
              type="text"
              value={inputs.month}
              onChange={handleChange}
              placeholder="mm"
            />
          </label>

          <label htmlFor="year" className={isError.yearErr ? "error" : ""}>
            <input
              type="text"
              id="year"
              name="year"
              value={inputs.year}
              onChange={handleChange}
              placeholder="yy"
            />
          </label>
          <p className="FormError">{isError.monthErr}</p>
          <p className="FormError">{isError.yearErr}</p>
        </fieldset>
        <label htmlFor="cvc" className={isError.cvcErr ? "error" : ""}>
          cvc
          <input
            type="text"
            name="cvc"
            id="cvc"
            value={inputs.cvc}
            onChange={handleChange}
            placeholder="e.g.123"
          />
          <p className="FormError">{isError.cvcErr}</p>
        </label>
      </div>
      <button className="FormBtn">Confirm</button>
    </form>
  );
}

Form.propTypes = {
  handleSub: PropTypes.func,
  handleThank: PropTypes.func,
};

export default Form;
