import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { yearChosen } from "../../../../actions";

import { YearsOptions, defaultYearOption } from '../../../../constants';
import './SelectYear.css';

class SelectYear extends Component {
  handleChange = (year) => {
      this.props.yearChosen(year.value);
  };

  render() {
    return (
      <Select
        className="galleryFilterSelect selectYear"
        defaultValue={defaultYearOption}
        onChange={this.handleChange}
        options={YearsOptions}
      />
    );
  }
}

const mapStateToProps = ({ year }) => {
  return { year };
};

const mapDispatchToProps = { yearChosen };

export default connect(mapStateToProps, mapDispatchToProps)(SelectYear);
