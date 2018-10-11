import React from 'react';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      email: "",
      full_name: "",
      username: "",
      password: ""
    };
  };

  //constructor keeps track of all of the fields of form we are building
  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state).then( () => this.props.history.push('/api/images/index'));
  }
//split off the onSubmit from form bc it was getting to crowded
//default action for button in form is sending post request which causes rerender

  render(){
    return {
      <div>
        <form className='signup-form' onSubmit={() => this.props.signup(this.state)}>
          <input type='text'
            placeholder="Email"
            value={this.state.email} onChange={this.handleInput('email')}> </input>

          <input type='text'
            placeholder="Full Name"
            value={this.state.full_name} onChange={this.handleInput('full_name')}></input>

          <input type='text'
            placeholder="Username"
            value={this.state.username} onChange={this.handleInput('username')}> </input>

          <input type='password'
            placeholder='Password'
            value={this.state.password} onChange={this.handleInput('password')}> </input>

          <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
        </form>
      </div>
    };
  };
  //need to call this on handle submit bc it is not bound to this instance of state
};

export default Signup;