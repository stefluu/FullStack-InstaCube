import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      username: "",
      password: ""
    };
  };

  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).then( () => this.props.history.push('/'));
  }

//split off the onSubmit from form bc it was getting to crowded
//default action for button in form is sending post request which causes rerender

//otherwise, use : onSubmit={() => this.props.login(this.state)}

  render(){
    return(
      <div>
        <form className='login-form'>


          <input type='text'placeholder="Username"
            value={this.state.username} onChange={this.handleInput('username')} />

          <input type='password'
            placeholder='Password'
            value={this.state.password} onChange={this.handleInput('password')}/>

          <button onClick={this.handleSubmit.bind(this)}>Log in</button>

          <div>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </div>
        </form>
      </div>
    );
  };
  //need to call this on handle submit bc it is not bound to this instance of state
};

export default withRouter(Login);
