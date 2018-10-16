import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ErrorsList from './errors_list';

class SignupContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      email: "",
      full_name: "",
      username: "",
      password: ""
    };
  };

  componentDidMount(){
    this.props.clearSessionErrors()
  }



  //constructor keeps track of all of the fields of form we are building
  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state).then( () => this.props.history.push('/index'));
  }

  handleDummyLogin(e){
    e.preventDefault();
    this.props.login({username: "demo_user", password: "123456"}).then( () =>
    this.props.history.push('/index'));
  };
//split off the onSubmit from form bc it was getting to crowded
//default action for button in form is sending post request which causes rerender

  render(){
    return(
      <div>
        <ErrorsList id="errorlist-signup" errors={this.props.errors} />
        <div id="signup-container">
          <form className='signup-form' onSubmit={() => this.props.signup(this.state)}>

            <h2 className="instacube-name-signup">
              <img src="https://s3-us-west-1.amazonaws.com/instacube-dev/Screen+Shot+2018-10-15+at+11.09.16+AM.png" />
              <sup>3</sup>
            </h2>

            <h4 className="signup-tosee">Sign up to see photos and videos from your friends.</h4>
            <div className="button-input-section">
              <button onClick={this.handleDummyLogin.bind(this)}>Demo Login</button>

              <section id="or-linebreak">
                <hr/> OR <hr/>
              </section>
              <ul className="signup-input-field">
                <input type='text'
                  placeholder="Email"
                  value={this.state.email} onChange={this.handleInput('email')}/>

                <input type='text'
                  placeholder="Full Name"
                  value={this.state.full_name} onChange={this.handleInput('full_name')}/>

                <input type='text'
                  placeholder="Username"
                  value={this.state.username} onChange={this.handleInput('username')}/>

                <input type='password'
                  placeholder='Password'
                  value={this.state.password} onChange={this.handleInput('password')}/>
              </ul>

              <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>

              <h5 className="by-signingUp">By signing up, you agree to our Terms, Data Policy and Cookies Policy.</h5>
            </div>
          </form>

          <section id="haveaccountlogin">
            Have an account? <Link to='/'>Log in</Link>
          </section>

          <div id="get-connected-signup">
            <h4>Get connected.</h4>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

            <section className="my-links">
              <a href="https://github.com/stefluu"><i id="github-splash" class="fab fa-github"></i></a>

              <a href="https://www.linkedin.com/in/stefanieluu/"><i id="linkedin-splash" className="fab fa-linkedin"></i></a>
            </section>
          </div>
        </div>

        <footer id="footer-signup">
          <ul id="footer-list">
            <li>ABOUT US</li>
            <li>SUPPORT</li>
            <li>PRESS</li>
            <li>API</li>
            <li>JOBS</li>
            <li>PRIVACY</li>
            <li>TERMS</li>
            <li>DIRECTORY</li>
            <li>PROFILES</li>
            <li>HASHTAGS</li>
            <li>LANGUAGE</li>
            <li className="ig-copymark">© 2018 INSTACUBE</li>
          </ul>
        </footer>

      </div>
    );
  };
  //need to call this on handle submit bc it is not bound to this instance of state
};

export default withRouter(SignupContainer);
