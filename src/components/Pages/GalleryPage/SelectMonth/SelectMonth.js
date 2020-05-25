import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { monthChosen } from "../../../../actions";

import { defaultMonthOption } from '../../../../constants';
import './SelectMonth.css';

class SelectMonth extends Component {
  handleChange = (month) => {
    this.props.monthChosen(month.value);
  };

  render() {
    const { monthsOptions } = this.props;

    return (
      <Select
        className="galleryFilterSelect selectMonth"
        defaultValue = {defaultMonthOption}
        options={monthsOptions}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = ({ month, monthsOptions }) => {
  return { month, monthsOptions };
};

const mapDispatchToProps = { monthChosen };

export default connect(mapStateToProps, mapDispatchToProps)(SelectMonth);