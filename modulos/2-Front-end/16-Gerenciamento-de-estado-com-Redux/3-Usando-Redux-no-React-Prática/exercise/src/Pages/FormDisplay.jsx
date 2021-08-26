import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDisplay extends Component {
  render() {
    const { personalInfo, professionalInfo } = this.props;
    return (
      <>
        <div>
          <h2>Personal Information</h2>
          <p>{`Name: ${personalInfo.name}`}</p>
          <p>{`Email: ${personalInfo.email}`}</p>
          <p>{`CPF: ${personalInfo.cpf}`}</p>
          <p>{`Address: ${personalInfo.address}`}</p>
          <p>{`City: ${personalInfo.city}`}</p>
          <p>{`State: ${personalInfo.state}`}</p>
        </div>
        <div>
          <h2>Professional Information</h2>
          <p>{`Resume: ${professionalInfo.resume}`}</p>
          <p>{`Job: ${professionalInfo.job}`}</p>
          <p>{`Job Description: ${professionalInfo.jobDescription}`}</p>
        </div>
      </>
    );
  }
}

FormDisplay.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
  professionalInfo: PropTypes.shape({
    resume: PropTypes.string,
    job: PropTypes.string,
    jobDescription: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  personalInfo: state.personalInfo,
  professionalInfo: state.professionalInfo,
});

export default connect(mapStateToProps, null)(FormDisplay);
