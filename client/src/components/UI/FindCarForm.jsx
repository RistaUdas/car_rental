

import React from "react";
import "../../styles/find-car-form.css";
import {Form, FormGroup} from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="car__form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
            <input type="text" placeholder="Form address" required />
        </FormGroup>

        <FormGroup className="form__group">
            <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
            <input type="date" placeholder="PickUp date" required />
        </FormGroup>

        <FormGroup className="form__group">
            <input className="pickup__time" type="time" placeholder="PickUp time" required />
        </FormGroup>

        <FormGroup className="select__group">
            <select>
                <option value="ac">AC Car</option>
                <option value="non-ac">Non AC Car</option>
            </select>
        </FormGroup>

        <FormGroup className="form__group">
            <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
        </div>  
    </Form>
  );
};

export default FindCarForm;
