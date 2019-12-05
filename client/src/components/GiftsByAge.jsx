import React from 'react'
import { Link } from 'react-router-dom';
import { readGiftsbyAge } from '../services/api-helper';
import imgArr from '../images/images'


export default class GiftProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: []
    }
  }

  async componentDidMount() {
    const gifts = await readGiftsbyAge(this.props.ageId);
    this.setState({
      gifts
    })
  }

  render() {
    const age = parseInt(this.props.ageId);
    return (
      <div className="profile-div">
        <div id="profile-hero-div">
          <img src={imgArr[age - 1]} />
          <h1 id="profile-header">Parent Recommended Gifts for {this.props.ageId} year olds</h1>
        </div>
        <div id="profile-border"></div>
        <div id="gifts-profile-list">
          {
            this.state.gifts.map(gift => (
              <div key={gift.id} className="gift">
                <img src={gift.image_url} alt="gift image" />
                <h3 className="remove-top-margin">{gift.name}</h3>
                <div className="buy-gifts-oval">
                  <a href={gift.amazon_url} target="_blank">Buy</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}