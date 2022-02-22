import React from "react";
import './SignIn.scss'
import FormInput from "../Form Input/form-input.component";
import Button from "../button-component/button.component";
class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput label={'Email'} handleChange={this.handleChange} type={'email'} name={'email'} value={this.state.email} required />
          {/* <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Email</label> */}
          <FormInput label={'Password'} handleChange={this.handleChange} type={'password'} name={'password'} value={this.state.password} required />
          {/* <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Password</label> */}
          <Button type='submit'>
            Sign In
          </Button>

        </form>
      </div>
    )
  }
}


export default SignIn