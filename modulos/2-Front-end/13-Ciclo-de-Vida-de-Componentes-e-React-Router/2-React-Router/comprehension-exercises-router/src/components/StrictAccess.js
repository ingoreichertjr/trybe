import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  AccessDenied() {
    alert('Access denied')
    return <Redirect to="/" />
  }
  render() {
    const { user } = this.props
    const logado = user.username === 'joao' && user.password === '1234' ? true : false
    return (
        logado ? <p>Welcome João</p> : this.AccessDenied()
    );
  }
}
 
export default StrictAccess;