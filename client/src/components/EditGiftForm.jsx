import React from 'react';
import axios from 'axios'
import { readSingleGift, updateGift } from '../services/api-helper';
import { withRouter } from 'react-router-dom';

class EditGiftForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        image_url: "",
        amazon_url: "",
        for_girls: false,
        for_boys: false,
        price_range: "<10"
      },
      giftAge: 1
    }
  }

  async componentDidMount() {
    // const giftId = parseInt(this.props.giftId)
    const gift = await readSingleGift(this.props.giftId);
    this.setState({
      formData: {
        name: gift.name,
        image_url: gift.image_url,
        amazon_url: gift.amazon_url,
        for_girls: gift.for_girls,
        for_boys: gift.for_boys,
        price_range: gift.price_range
      },
      giftAge: gift.ages[0].age
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "giftAge") {
      this.setState({
        [name]: parseInt(value)
      })

    }

    else if ((name === "for_girls") || (name === "for_boys")) {
      if (value === "on") {
        this.setState(prevState => ({
          formData: {
            ...prevState.formData,
            [name]: !prevState.formData[name]
          }
        }))
      }
    }
    else {
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          [name]: value
        }
      }))
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const formData = this.state.formData
    const response = await updateGift(this.props.giftId, formData)
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }

  render() {
    const { name, image_url, amazon_url, for_girls, for_boys, price_range } = this.state.formData
    return (
      <div className="create-form">
        <h1 className="green-color remove-top-margin">Edit Gift</h1>
        <form id="edit-form" onSubmit={this.handleSubmit}>
          <div className="form-line">
            <p>Name:</p>
            <input
              onChange={this.handleChange}
              name="name" placeholder="Gift Name..."
              value={name}
            />
          </div>
        <div className="form-line">
          <p>Image URL:</p>
          <input
            onChange={this.handleChange}
            name="image_url"
            placeholder="URL for Gift Cover Image..."
            value={image_url}
            />
            </div>
        <div className="form-line">
          <p>Amazon URL:</p>
          <input
            onChange={this.handleChange}
            name="amazon_url"
            placeholder="URL for Gift Cover Image..."
            value={amazon_url}
          />
          </div>
        <div className="form-line gender">

          <label>
            For Girls
          <input
              name="for_girls"
              type="checkbox"
              checked={for_girls ? "on" : ""}
              onChange={this.handleChange} />
          </label>
          <label>
            For Boys
          <input
              name="for_boys"
              type="checkbox"
              checked={for_boys ? "on" : ""}
              onChange={this.handleChange} />
          </label>
          </div>
          <p>Child's Age: </p>
          <div class="select-wrapper">
            <select name="giftAge" value={this.state.giftAge} onChange={this.handleChange}>
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
            <span class="select-icon">
              <i class="material-icons">
                arrow_drop_down</i>
            </span>
          </div>
          <p>Price Range: </p>
          <div class="select-wrapper">
            <select name="price_range" value={price_range} onChange={this.handleChange}>
              <option value="<10">less than $10</option>
              <option value="10-20">$10-20</option>
              <option value="20-30">$20-30</option>
              <option value="30-50">$30-50</option>
              <option value="50-75">$50-75</option>
              <option value="75-100">$75-100</option>
              <option value="100+">$100+</option>
            </select>
            <span class="select-icon">
              <i class="material-icons">
                arrow_drop_down</i>
            </span>
          </div>
          <button>Update</button>
        </form>
      </div>
    )
  }
}

export default withRouter(EditGiftForm)