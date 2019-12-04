import React from 'react'
import { Link } from 'react-router-dom';
import { readGiftsbyAge } from '../services/api-helper';


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
    return (
      <div className="profile-div">
        <h1>Gift for {this.props.ageId} year old</h1>
        <div id="gifts-profile-list">
          {
            this.state.gifts.map(gift => (
              <div key={gift.id} className="gift">
                <img src={gift.image_url} alt="gift image" />
                <h3>{gift.name}</h3>
                <a href={gift.amazon_url} target="_blank">Buy</a>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}