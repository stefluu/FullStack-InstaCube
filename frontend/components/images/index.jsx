import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar'
import IndexPosts from './post'


class IndexContainer extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchImages();
    this.props.fetchUsers();
  }

  render(){
    return(
      <div id="images-index">
        <Route exact path='/index' component={NavBarContainer} />
        <div className="news-feed">
          <ul>
            <section className="post">
                {this.props.images.map(image => (
                <li>
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
