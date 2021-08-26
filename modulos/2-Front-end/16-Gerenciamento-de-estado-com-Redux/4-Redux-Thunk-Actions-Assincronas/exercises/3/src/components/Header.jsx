import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { selected } = this.props
    return (
      selected ? <h1>{`Selected subreddit: ${selected}`}</h1>
        : <h1>No subreddit selected</h1>
    )
  }
}

const mapStateToProps = (state) => ({
  selected: state.redditDB.selected
})

export default connect(mapStateToProps, null)(Header)
