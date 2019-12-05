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



        <div id="gifts-profile-list">
          {
            this.state.gifts.map(gift => (
              <div key={gift.id} className="gift">
                <img src={gift.image_url} alt="gift image" />
                <h3>{gift.name}</h3>
                <div className="edit-delete-icons">
                  <Link to={`/gifts/${gift.id}/edit`}>
                    {/* <button>Edit</button> */}
                    <i class="material-icons edit-icon">edit</i>
                  </Link>
                  <i class="material-icons"
                    onClick={() => {
                      this.props.deleteGift(gift.id);
                      this.deleteUserGift(gift.id);
                      this.props.history.push(`/users/${this.props.currentUser.id}`)
                    }}>delete</i>
                </div>
              </div>
            ))
          }

          <Link to="/newgift">
            <div className="rainbow-wrapper" id="add-gift-div" >
              <img
                id="new-gift-img"
                alt="Create a new gift"
                src="https://image.flaticon.com/icons/png/512/14/14980.png"
                className="plus-sign" />
              <h2 className="remove-top-margin">Add a new gift</h2>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
export default withRouter(GiftProfile);