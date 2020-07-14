import React from 'react'
import { connect } from 'react-redux'
import { addToCount } from '../actions/index'

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

function App ({ addToCount, myCount }) {
  return (
    <div className="App">
      <button onClick={addToCount}
      >{ myCount }
      </button>
    </div>)
}

const mapDispatchToProps = {
  addToCount
}

const mapStateToProps = (state) => {
  return {
    myCount: state.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
