import React from 'react'
import { connect } from 'react-redux'
import { addToCountAction } from '../actions/index'

// changeHandler = (evt) => {

// }

// addToCount = (count) => {
//   this.setState({
//     count: count
//   })
// }

// componentDidMount () {
//   const { addToCount } = this.props
//   addToCount()
// }

// onClick = () => {
//   increaseCount(this.state)
// }

function App ({ addToCountAction, myCount }) {
  return (
    <div className="App">
      <button onClick={addToCountAction}
      >{ myCount }
      </button>
    </div>)
}

const mapDispatchToProps = {
  addToCountAction
}

const mapStateToProps = (state) => {
  return {
    myCount: state.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
