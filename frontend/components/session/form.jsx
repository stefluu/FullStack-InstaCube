import React from 'react';

class GenericForm extends React.Component{

  render(){
    return {
      <div>
        <form onSubmit={() => this.props.action(this.state)}>
          <input type=text> </input>
          <input type=password> </input>
          <button type='submit' value={props.buttonText}> </button>
        </form>
      </div>
    };
  };
};

export default GenericForm
