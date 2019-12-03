import React from 'react'
import { Link } from 'react-router-dom';
import { readUserGifts } from '../services/api-helper';


export default class GiftProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: []
    }
  }

  async componentDidMount() {
    const gifts = await readUserGifts();
    this.setState({
      gifts
    })
  }

  render() {
    return (
      <div className="profile-div">
        <Link to="/newgift">
          <img
            id = "new-gift-img"
          alt="Create a new gift"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" />
        <h3>Add a new gift</h3>
        </Link>

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