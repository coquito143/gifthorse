import React from 'react'
import { Link } from 'react-router-dom';
import { readUserGifts } from '../services/api-helper';
import { withRouter } from 'react-router';

class GiftProfile extends React.Component {
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

  deleteUserGift = async (id) => {
    this.setState(prevState => ({
      gifts: prevState.gifts.filter(gift => gift.id !== id)
    }))
  }

  render() {
    return (
      <div className="profile-div">
        <Link to="/newgift">
          <img
            id="new-gift-img"
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

                <Link to={`/gifts/${gift.id}/edit`}>
                  <button>Edit</button>
                </Link>

                <button onClick={() => {
                  this.props.deleteGift(gift.id);
                  this.deleteUserGift(gift.id);
                  this.props.history.push(`/users/${this.props.currentUser.id}`)
                }}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
export default withRouter(GiftProfile);