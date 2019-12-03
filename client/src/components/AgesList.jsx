import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div id="ages-list">
          {
            this.state.ages.map(age => (
              <div key={age.id} className="age">
                <img src={age.image_url} alt="age image" />
                <h3>Age: {age.age}</h3>
                <Link to={`/gifts-by-age/${age.id}`}>
                  <button>More Info</button>
                </Link>
              </div>
            ))
          }
        </div>
      </>
    )
  }
}