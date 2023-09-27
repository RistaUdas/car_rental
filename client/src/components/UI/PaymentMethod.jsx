

import React from "react";

import Khalti from "../../assets/all-image/Khalti.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
    <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
            <input type="radio"  /> Direct Bank Transfer
        </label>
    </div>

    <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
            <input type="radio"  /> Cheque Payment
        </label>
    </div>

    <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
            <input type="radio"  /> Khalti
        </label>

        <img src={Khalti} alt="" className="mastercard-img" />
    </div>
    <div className="payment text-end mt-5">
        <button className="mb-3">Reserve Now</button>
    </div>
    </>
  );
};

export default PaymentMethod;
