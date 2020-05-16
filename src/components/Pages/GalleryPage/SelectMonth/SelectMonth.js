import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { monthChosen } from "../../../../actions";

import { months, currentMonth } from '../../../../constants';
import './SelectMonth.css';

const options = months.map((a, i) => {
  return { value: i + 1, label: a };
});

const defaultValue = { value: currentMonth + 1, label: months[currentMonth] };

class SelectMonth extends Component {
  handleChange = (month) => {
    this.props.monthChosen(month.value);
  };

  render() {
    return (
      <Select
        className="galleryFilterSelect selectMonth"
        defaultValue = {defaultValue}
        options={options}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = ({ month }) => {
  return { month };
};

const mapDispatchToProps = { monthChosen };

export default connect(mapStateToProps, mapDispatchToProps)(SelectMonth);