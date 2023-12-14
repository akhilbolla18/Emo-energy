import {Component} from 'react'
// import axios from 'axios';
// import Cookies from 'js-cookie'
import {withRouter,Link} from 'react-router-dom'

import './index.css'

class RegisterForm extends Component {
  state = {
    username:'',
    email:'',
    password:'',
    confirmpassword:'',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeConfirmPassword= event => {
    this.setState({confirmpassword: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.push('/login')

   
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username,email,password,confirmpassword} = this.state
    const userDetails = {username,email,password,confirmpassword}
    const url = 'https://emo-backend.onrender.com/register'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      console.log("Yes")
      this.onSubmitSuccess()
    } else {
      const error_msg = await response.text()
      console.log(error_msg)
      this.onSubmitFailure(error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          required
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          required
        />
      </>
    )
  }

  renderConfirmPasswordField = () => {
    const {confirmpassword} = this.state

    return (
      <>
        <label className="input-label" htmlFor="confirmPassword">
          CONFIRM PASSWORD
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="password-input-field"
          value={confirmpassword}
          onChange={this.onChangeConfirmPassword}
          placeholder="Confirm Password"
          required
        />
      </>
    )
  }

  renderEmailField = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="username-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
          required
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    

    return (
      <div className="login-form-container" >
        <img
          src="https://res.cloudinary.com/dumbnbfci/image/upload/v1702553054/enter-login-and-password-registration-page-on-screen-sign-in-to-your-account-creative-metaphor-login-page-mobile-app-with-user-page-identification-in-internet-vector_we2bin.jpg"
          className="login-img"
          alt="website login"
        />
          <form className="form-container" onSubmit={this.submitForm}>
            <h1 className=''>Register Form</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderEmailField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <div className="input-container">{this.renderConfirmPasswordField()}</div>
            <button type="submit" className="login-button">
              Submit
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            <div className='button-element'>
                <p className='login-para'>Already have account?</p>
                <Link to="/login" className='button-login' ><p className='button-login'>Login</p></Link>
            </div>
          </form>
        <br/>
        
       </div>
    )
  }
}

export default withRouter(RegisterForm)