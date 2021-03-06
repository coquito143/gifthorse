import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateGift(props) {
  return (
    <div className="create-form" >
      <h2 className="green-color remove-top-margin">Create a new gift</h2>
      <form className="new-gift-form" onSubmit={props.newGift}>
        <div className="form-line">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            value={props.giftForm.name}
            onChange={props.handleFormChange} />
        </div>
        <div className="form-line">
          <p>Image URL:</p>
          <input
            type="text"
            name="image_url"
            value={props.giftForm.image_url}
            onChange={props.handleFormChange} />
        </div>
        <div className="form-line">
          <p>Amazon  URL:</p>
          <input
            type="text"
            name="amazon_url"
            value={props.giftForm.amazon_url}
            onChange={props.handleFormChange}
          />
        </div>
        <div className="form-line gender">
          <p>For Girls:</p>
          <input
            name="for_girls"
            type="checkbox"
            checked={props.giftForm.for_girls}
            onChange={props.handleFormChange} />

          <p>For Boys:</p>
          <input
            name="for_boys"
            type="checkbox"
            checked={props.giftForm.for_boys}
            onChange={props.handleFormChange} />

        </div>
        <p>Child's Age: </p>
        <div className="select-wrapper">
          <select name="giftAge" value={props.giftAge} onChange={props.handleFormChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <span className="select-icon">
            <i className="material-icons">
              arrow_drop_down</i>
          </span>
        </div>
        <p>Price Range: </p>
        <div className="select-wrapper">
          <select name="price_range" value={props.price_range} onChange={props.handleFormChange}>
            <option value="<10">less than $10</option>
            <option value="10-20">$10-20</option>
            <option value="20-30">$20-30</option>
            <option value="30-50">$30-50</option>
            <option value="50-75">$50-75</option>
            <option value="75-100">$75-100</option>
            <option value="100+">$100+</option>
          </select>
          <span className="select-icon">
            <i className="material-icons">
              arrow_drop_down</i>
          </span>
        </div>
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateGift);
