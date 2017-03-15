import React from 'react';

class Home extends React.Component {

	render() {
		return <div>
      <h2>Home</h2>
    </div>
	}
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Home;