import React from 'react'
import { connect } from 'react-redux'
import { addToCountAction } from '../actions/index'

function App ({ addToCountAction, myCount }) {
  return (
    <div className="App">
      <button onClick={addToCountAction}>
        { myCount }
      </button>
    </div>)
}

const mapDispatchToProps = {
  addToCountAction
}

const mapStateToProps = (state) => {
  console.log('app:', state)
  return {
    myCount: state.rootReducer.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
