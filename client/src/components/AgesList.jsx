import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import RockingHorse from '../images/rocking-horse.png'
import imgArr from '../images/images'
import { readAllAges } from '../services/api-helper'

export default class AgesList extends React.Component {
  constructor() {
    super();
    this.state = {
      ages: []
    }
  }

  async componentDidMount() {
    const ages = await readAllAges();
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
                <Link to={`/gifts-by-age/${age.id}`}>
                  <img src={imgArr[age.id - 1]} alt="age image" />
                  <h3>Age: {age.age}</h3>
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