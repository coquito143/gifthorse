import React from 'react';
import axios from 'axios'
import { readSingleGift, readUserGifts } from '../services/api-helper';
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
        for_boys: false
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
        for_boys: gift.for_boys
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
    const response = await axios.put(`http://localhost:3000/gifts/${this.props.giftId}`, formData)
    this.props.history.push('/')
  }

  render() {
    const { name, image_url, amazon_url, for_girls, for_boys } = this.state.formData
    return (
      <form id="edit-form" onSubmit={this.handleSubmit}>
        <p>Name:</p>
        <input
          onChange={this.handleChange}
          name="name" placeholder="Gift Name..."
          value={name}
        />
        <p>Image URL:</p>
        <input
          onChange={this.handleChange}
          name="image_url"
          placeholder="URL for Gift Cover Image..."
          value={image_url}
        />
        <p>Amazon URL:</p>
        <input
          onChange={this.handleChange}
          name="amazon_url"
          placeholder="URL for Gift Cover Image..."
          value={amazon_url}
        />

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
        <label>
          For Age:
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
        </label>

        <button>Edit Gift</button>
      </form>
    )
  }
}

export default withRouter(EditGiftForm)