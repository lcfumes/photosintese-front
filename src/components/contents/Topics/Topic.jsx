import React from 'react';
import axios from 'axios';

class Topic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      info: {}
    }
  }

  componentWillMount() {
    axios.get(`http://api.lfum.es/${this.props.match.params.topicId}`)
    .then(response => {
      this.setState({
        info: response
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  componentWillReceiveProps(nextProps) {
    axios.get(`http://api.lfum.es/${this.props.match.params.topicId}`)
    .then(response => {
      this.setState({
        info: response
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

	render() {
    if (Object.keys(this.state.info).length === 0) {
      return <div>
        Aguardando...
      </div>
    }
		return <div>
	    <h3>{this.state.info.data._embedded[0].url}</h3>
	  </div>
	}
}

Topic.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Topic;