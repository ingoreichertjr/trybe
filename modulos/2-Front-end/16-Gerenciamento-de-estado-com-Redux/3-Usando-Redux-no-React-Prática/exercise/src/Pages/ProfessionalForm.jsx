import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { professionalUpdate } from '../Redux/Actions';

class ProfessionalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: undefined,
      job: undefined,
      jobDescription: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { resume, job, jobDescription } = this.state;
    if (resume && job && jobDescription) {
      const { submit, history } = this.props;
      submit(this.state);
      history.push('/display');
    }
  }

  render() {
    const { resume, job, jobDescription } = this.state;
    const { handleSubmit, handleChange: HC } = this;
    return (
      <form>
        <textarea
          name="resume"
          placeholder="Write a summary of your resume."
          rows="5"
          value={ resume }
          onChange={ HC }
        />
        <textarea
          name="job"
          placeholder="What job are you applying for?"
          rows="5"
          value={ job }
          onChange={ HC }
        />
        <textarea
          name="jobDescription"
          placeholder="Write a job description."
          rows="5"
          value={ jobDescription }
          onChange={ HC }
        />
        <button type="button" onClick={ handleSubmit }>Enviar</button>
      </form>
    );
  }
}

ProfessionalForm.propTypes = {
  submit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submit: (payload) => dispatch(professionalUpdate(payload)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
