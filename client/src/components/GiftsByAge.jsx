import React from 'react'
import { Link } from 'react-router-dom';
import { readGiftsbyAge } from '../services/api-helper';
import imgArr from '../images/images'


export default class GiftProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts10: [],
      gifts20: [],
      gifts30: [],
      gifts50: [],
      gifts75: [],
      gifts100: [],
      gifts200: []
    }
  }

  async componentDidMount() {
    const gifts = await readGiftsbyAge(this.props.ageId);
    gifts.map(gift => {
      switch (gift.price_range) {
        case "<10": this.setState(prevState => ({
          gifts10: [...prevState.gifts10, gift]
        })); break;
        case "10-20": this.setState(prevState => ({
          gifts20: [...prevState.gifts20, gift]
        })); break;
        case "20-30": this.setState(prevState => ({
          gifts30: [...prevState.gifts30, gift]
        })); break;
        case "30-50": this.setState(prevState => ({
          gifts50: [...prevState.gifts50, gift]
        })); break;
        case "50-75": this.setState(prevState => ({
          gifts75: [...prevState.gifts75, gift]
        })); break;
        case "75-100": this.setState(prevState => ({
          gifts100: [...prevState.gifts100, gift]
        })); break;
        case "100+": this.setState(prevState => ({
          gifts200: [...prevState.gifts200, gift]
        })); break;
        default: console.log("There is a bug in your GiftsByAge switch statement")
      }
    })
    
    // this.setState({
    //   gifts
    // })
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

          {!!this.state.gifts10.length &&
            <div className="gifts-by-price-div">
              <div className="price-box"><h2>Under $10</h2></div>
              {
                this.state.gifts10.map(gift => (
                  <div key={gift.id} className="gift">
                    <img src={gift.image_url} alt="gift image" />
                    <h3 className="remove-top-margin">{gift.name}</h3>
                    <div className="buy-gifts-oval">
                      <a href={gift.amazon_url} target="_blank">Buy</a>
                    </div>
                  </div>
                ))
              }
            </div>}
          
          {!!this.state.gifts20.length &&
            <div className="gifts-by-price-div">
              <div className="price-box"><h2>$10-20</h2></div>
              {
                this.state.gifts20.map(gift => (
                  <div key={gift.id} className="gift">
                    <img src={gift.image_url} alt="gift image" />
                    <h3 className="remove-top-margin">{gift.name}</h3>
                    <div className="buy-gifts-oval">
                      <a href={gift.amazon_url} target="_blank">Buy</a>
                    </div>
                  </div>
                ))
              }
            </div>}
          
          {!!this.state.gifts30.length &&
            <div className="gifts-by-price-div">
              <div className="price-box"><h2>$20-30</h2></div>
              {
                this.state.gifts30.map(gift => (
                  <div key={gift.id} className="gift">
                    <img src={gift.image_url} alt="gift image" />
                    <h3 className="remove-top-margin">{gift.name}</h3>
                    <div className="buy-gifts-oval">
                      <a href={gift.amazon_url} target="_blank">Buy</a>
                    </div>
                  </div>
                ))
              }
            </div>}
          
          {!!this.state.gifts50.length &&
            <div className="gifts-by-price-div">
              <div className="price-box"><h2>$30-50</h2></div>
              {
                this.state.gifts50.map(gift => (
                  <div key={gift.id} className="gift">
                    <img src={gift.image_url} alt="gift image" />
                    <h3 className="remove-top-margin">{gift.name}</h3>
                    <div className="buy-gifts-oval">
                      <a href={gift.amazon_url} target="_blank">Buy</a>
                    </div>
                  </div>
                ))
              }
            </div>}
          
        </div>
      </div>
    )
  }
}