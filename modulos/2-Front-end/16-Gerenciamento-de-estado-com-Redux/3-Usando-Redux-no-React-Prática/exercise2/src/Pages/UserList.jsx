import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserList extends Component {
  render() {
    const { userDatabase, loginStatus } = this.props;

    if(!loginStatus.status) {
      return <h3>You're not logged</h3>
    }

    return (
      <div>
        {userDatabase.map((u) => (
          <div>
            <p>{`User: ${u.name}`}</p>
            <p>{`Email: ${u.email}`}</p>
            <p>{`Password: ${u.password}`}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userDatabase: state.registerRed,
  loginStatus: state.loginRed,
})

export default connect(mapStateToProps, null)(UserList)
