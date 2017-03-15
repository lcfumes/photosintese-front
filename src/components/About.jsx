import React from 'react';

class About extends React.Component {

	render() {
		return <div>
      <h2>About</h2>
    </div>
	}
}

About.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default About;