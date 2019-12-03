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
        <p>Age</p>
        <input
          type="text"
          name="giftAge"
          value={props.giftAge}
          onChange={props.handleFormChange}
        />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateGift);
