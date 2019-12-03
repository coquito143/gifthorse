import React from 'react';
import { withRouter } from 'react-router-dom';

function EditGift(props) {
  return (
    <div>
      <h3>Create a new gift</h3>
      <form onSubmit={props.handleSubmit}>
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
        <p>Amazon URL:</p>
        <input
          type="text"
          name="amazon_url"
          value={props.giftForm.amazon_url}
          onChange={props.handleFormChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(EditGift);
