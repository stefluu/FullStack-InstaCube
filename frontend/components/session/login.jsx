import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component{

  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).then( () => this.props.history.push('/login'));
  }
//split off the onSubmit from form bc it was getting to crowded
//default action for button in form is sending post request which causes rerender

  render(){
    return {
      <div>
        <form className='login-form' onSubmit={() => this.props.login(this.state)}>

          <input type='text'
            placeholder="Username"
            value={this.state.username} onChange={this.handleInput('username')}> </input>

          <input type='password'
            placeholder='Password'
            value={this.state.password} onChange={this.handleInput('password')}> </input>

          <button onClick={this.handleSubmit.bind(this)}>Log in</button>

          <div>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </div>
        </form>
      </div>
    };
  };
  //need to call this on handle submit bc it is not bound to this instance of state
};

export default withRouter(Login);
