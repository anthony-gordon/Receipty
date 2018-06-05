import React from 'react'
import {connect} from 'react-redux'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
        <div className='app-container'>
          <h1>Hello Cats</h1>
        </div>
    )
  }
}

export default connect()(App)
