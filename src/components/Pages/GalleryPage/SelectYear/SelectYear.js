import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { yearChosen } from "../../../../actions";

import { APODallYears } from '../../../../constants';
import './SelectYear.css';

const options = APODallYears.map((a, i) => {
  return { value: a, label: a };
});

class SelectYear extends Component {
  handleChange = (year) => {
      this.props.yearChosen(year.value);
  };

  render() {
    return (
      <Select
        className="galleryFilterSelect selectYear"
        defaultValue={options[options.length - 1]}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

const mapStateToProps = ({ year }) => {
  return { year };
};

const mapDispatchToProps = { yearChosen };

export default connect(mapStateToProps, mapDispatchToProps)(SelectYear);
