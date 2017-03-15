import React from 'react';
import { Route, Link } from 'react-router-dom';

import axios from 'axios';

import Topic from './contents/Topics/Topic';

class Topics extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      urls: []
    }
  }

  componentWillMount() {
    axios.get('http://api.lfum.es')
    .then(result => {
      this.setState({
        urls: result.data._embedded
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

	render() {
		return <div>
	    <h2>Topics</h2>
	    <ul>
        {this.state.urls.map((url, i) => {
          return <li key={`key_${i}`}>
            <Link to={`${this.props.match.url}/${url.hash}`}>
              {url.hash}
            </Link>
          </li>
        })}
      </ul>
	    <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
	    <Route exact path={this.props.match.url} render={() => (
	      <h3>Please select a topic.</h3>
	    )}/>
	  </div>
	}
}

Topics.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Topics;