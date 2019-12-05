import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import RockingHorse from '../images/rocking-horse.png'
import imgArr from '../images/images'

export default class AgesList extends React.Component {
  constructor() {
    super();
    this.state = {
      ages: []
    }
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000/list_by_age')
    const ages = response.data
    this.setState({
      ages
    })
  }

  render() {
    return (
      <>
        <div id="ages-heading-div">
          <img src={RockingHorse} alt="rockinghorse-image" />
          <h1>Gifts by Age</h1>
        </div>
        <div id="border"></div>
        <div id="ages-list">
          {
            this.state.ages.map(age => (
              <div key={age.id} className="age">
                <img src={imgArr[age.id-1]} alt="age image" />
                <h3>Age: {age.age}</h3>
                <Link to={`/gifts-by-age/${age.id}`}>
                  <button className="show-gifts-oval">Show Gifts</button>
                </Link>
              </div>
            ))
          }
        </div>
      </>
    )
  }
}