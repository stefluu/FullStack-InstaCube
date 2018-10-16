import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ErrorsList from './errors_list';

class LoginContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  };

  componentDidMount(){
    this.props.clearSessionErrors();
  }

  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).then( () => this.props.history.push('/index'));
  };

  handleDummyLogin(e){
    e.preventDefault();
    this.props.login({username: "demo_user", password: "123456"}).then( () =>
    this.props.history.push('/index'));
  };

//split off the onSubmit from form bc it was getting to crowded
//default action for button in form is sending post request which causes rerender

//otherwise, use : onSubmit={() => this.props.login(this.state)}

  render(){
    return(
      <div>
        <ErrorsList errors={this.props.errors} />
        <div className="login-container">
          <form className='login-form'>

            <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"></link>


            <h2 id="instacube-name-login">
              <img src="https://s3-us-west-1.amazonaws.com/instacube-dev/Screen+Shot+2018-10-15+at+11.09.16+AM.png" />
              <sup>3</sup>
            </h2>

            <input type='text'placeholder="Username"
              value={this.state.username} onChange={this.handleInput('username')} />

            <input type='password'
              placeholder='Password'
              value={this.state.password} onChange={this.handleInput('password')}/>

            <button onClick={this.handleSubmit.bind(this)}>Log in</button>

            <section id="or-linebreak">
              <hr/> OR <hr/>
            </section>

            <button onClick={this.handleDummyLogin.bind(this)}>Demo Login</button>

          </form>
          <section id="donthaveaccount">
            <div id ="donthaveaccount-text">
              Don't have an account?
              <Link to='/signup'> Sign up</Link>
            </div>
          </section>
        </div>
      </div>
    );
  };
  //need to call this on handle submit bc it is not bound to this instance of state
};

export default withRouter(LoginContainer);
