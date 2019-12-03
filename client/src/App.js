import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import AgesList from './components/AgesList'
import GiftProfile from './components/GiftProfile';
// import GiftPage from './components/GiftPage';
import CreateGift from './components/CreateGift'
import Login from './components/Login'
import Register from './components/Register'

import {
  createGift,
  readAllGifts,
  updateGift,
  destroyGift,
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'

import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: [],
      giftForm: {
        name: "",
        image_url: "",
        amazon_url: ""
      },
      giftAge: 0,
      currentUser: null,
      authFormData: {
        // first_name: "",
        email: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    this.getGifts();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  getGifts = async () => {
    const gifts = await readAllGifts();
    this.setState({
      gifts
    })
  }

  newGift = async (e) => {
    e.preventDefault();
    const gift = await createGift(this.state.giftForm, this.state.giftAge);
    this.setState(prevState => ({
      gifts: [...prevState.gifts, gift],
      giftForm: {
        name: "",
        image_url: "",
        amazon_url: ""
      },
      giftAge: 0
    }))
  }

  editGift = async () => {
    const { giftForm } = this.state
    //reminder to somehow pass age
    await updateGift(giftForm.id, giftForm);
    this.setState(prevState => (
      {
        gifts: prevState.gifts.map(gift => {
          return gift.id === giftForm.id ? giftForm : gift
        }),
      }
    ))
  }

  deleteGift = async (id) => {
    await destroyGift(id);
    this.setState(prevState => ({
      gifts: prevState.gifts.filter(gift => gift.id !== id)
    }))
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "giftAge") {
      this.setState({
        [name]: value
      })
    }
    else {
      this.setState(prevState => ({
        giftForm: {
          ...prevState.giftForm,
          [name]: value
        }
      }))
    }
  }

  mountEditForm = async (id) => {
    const gifts = await readAllGifts();
    const gift = gifts.find(el => el.id === parseInt(id));
    this.setState({
      giftForm: gift
    });
  }

  resetForm = () => {
    this.setState({
      giftForm: {
        name: "",
        image_url: "",
        amazon_url: ""
      },
      giftAge: 0
    })
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App" >
        <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Route exact path="/" render={() => (
          <AgesList />)} />
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/users/:userid" render={() => (
          <GiftProfile currentUser={this.state.currentUser} />)} />
        {/* <Route
          exact path="/"
          render={() => (
            <GiftsView
              gifts={this.state.gifts}
              giftForm={this.state.giftForm}
              handleFormChange={this.handleFormChange}
              newGift={this.newGift} />
          )}
        /> */}
        <Route
          path="/newgift"
          render={() => (
            <CreateGift
              handleFormChange={this.handleFormChange}
              giftForm={this.state.giftForm}
              giftAge={this.state.giftAge}
              newGift={this.newGift} />
          )} />
        {/* <Route
          path="/gifts/:id"
          render={(props) => {
            const { id } = props.match.params;
            const gift = this.state.gifts.find(el => el.id === parseInt(id));
            return <GiftPage
              id={id}
              gift={gift}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              editGift={this.editGift}
              giftForm={this.state.giftForm}
              deleteGift={this.deleteGift} />
          }}
        /> */}
      </div>
    );
  }
}

export default withRouter(App);