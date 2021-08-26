import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
  render() {
    const { loading, postList, error } = this.props;

    if (loading) return <h3>Loading posts...</h3>
    if (error) return <h3>{error}</h3>

    return (
      <div>
        <ul>
          {postList.map((post, index) => (
            <li key={index}>{ post.data.title }</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.redditDB.loading,
  postList: state.redditDB.list,
  error: state.redditDB.error,
})

export default connect(mapStateToProps, null)(Posts)
