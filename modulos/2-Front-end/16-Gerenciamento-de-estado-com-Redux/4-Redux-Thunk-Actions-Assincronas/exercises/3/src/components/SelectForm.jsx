import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReddit } from '../redux/actions'

class SelectForm extends Component {
  handleFetch = () => {
    const { getPosts } = this.props;
    const selected = document.getElementById('subreddit').value;
    getPosts(selected);
  }
  render() {
    const { time } = this.props;
    return (
      <div>
        <select name="subreddit" id="subreddit" onChange={ this.handleFetch }>
          <option value="ReactJS">ReactJS</option>
          <option value="frontend">Front-end</option>
        </select>
        <button onClick={ this.handleFetch }>refresh</button>
        {time && <span>{`Last fetch: ${time}`}</span> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  time: state.redditDB.time,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (subreddit) => dispatch(fetchReddit(subreddit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectForm)
