import React, { Component } from 'react';
import EditGift from './EditGift'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class AddGift  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { gift } = this.props;
    return (
      <div className="gift-page">
        {gift === undefined ? <h2>Loading . . .</h2> : (
          <div>
            <h3>{gift.name}</h3>
            {this.state.isEdit ?
              <Route path={'/gift/:gift_id/edit'} render={() => (
                <EditGift
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editGift();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/gifts/${this.props.giftForm.id}`)
                  }}
                  giftForm={this.props.giftForm} />
              )} />
              :
              <>
                <h1>{gift.name}</h1>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/gift/${gift.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deleteGift(gift.id);
                  this.props.history.push('/')
                }}>Delete</button>
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(GiftsView);