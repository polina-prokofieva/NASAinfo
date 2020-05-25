import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { monthChosen } from "../../../../actions";

import { months, currentMonth } from '../../../../constants';
import './SelectMonth.css';

const defaultValue = { value: currentMonth + 1, label: months[currentMonth] };

class SelectMonth extends Component {
  handleChange = (month) => {
    this.props.monthChosen(month.value);
  };

  render() {
    const { monthsOptions } = this.props;

    return (
      <Select
        className="galleryFilterSelect selectMonth"
        defaultValue = {defaultValue}
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