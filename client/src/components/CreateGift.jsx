import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateGift(props) {
  return (
    <div className="create-form" >
      <h2>Create a new gift</h2>
      <form className="new-gift-form" onSubmit={props.newGift}>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          value={props.giftForm.name}
          onChange={props.handleFormChange} />
        <p>Image URL:</p>
        <input
          type="text"
          name="image_url"
          value={props.giftForm.image_url}
          onChange={props.handleFormChange} />
        <p>Amazon  URL:</p>
        <input
          type="text"
          name="amazon_url"
          value={props.giftForm.amazon_url}
          onChange={props.handleFormChange}
        />
        <label>
          For Girls
          <input
            name="for_girls"
            type="checkbox"
            checked={props.giftForm.for_girls}
            onChange={props.handleFormChange} />
        </label>
        <label>
          For Boys
          <input
            name="for_boys"
            type="checkbox"
            checked={props.giftForm.for_boys}
            onChange={props.handleFormChange} />
        </label>
        <label>
          For Age:
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
        </label>
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateGift);
