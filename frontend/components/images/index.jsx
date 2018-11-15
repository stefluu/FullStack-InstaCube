import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar'
import IndexPosts from './post_container'


class IndexContainer extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchImages();
    this.props.fetchUsers();
    this.props.fetchAllLikes();
    // this.props.clearSessionErrors();
  }

  render(){
    if(!this.props.users) return null;
    return(

      <div id="images-index">
        <Route exact path='/index' component={NavBarContainer} />
        <div className="news-feed">
          <ul>
            <section className="post">
                {Object.values(this.props.images).map(image => (
                <li key={image.id}>
                  <IndexPosts image={image} users={this.props.users}/>
                </li>
              ))}

          </section>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(IndexContainer);
