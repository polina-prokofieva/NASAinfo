import React, { Component } from 'react';
import { connect } from 'react-redux';

import Preview from './Preview/Preview';
import SelectMonth from './SelectMonth/SelectMonth';
import SelectYear from "./SelectYear/SelectYear";
import './GalleryPage.css';


class GalleryPage extends Component {
  startDate = new Date(this.props.year, this.props.month, 1);
  endDate = new Date();

  state = {
    dates: []
  };

  twoDigits = (n) => `${n < 10 ? '0' : ''}${n}`;

  formatDate(date) {
    const year = date.getFullYear();
    const month = this.twoDigits(date.getMonth() + 1);
    const day = this.twoDigits(date.getDate());

    return `${year}-${month}-${day}`;
  }

  updateDates () {
    this.startDate = new Date(this.props.year, this.props.month, 1);
    this.endDate = new Date(this.props.year, this.props.month + 1, 1);
  }

  componentDidMount() {
    this.generateGalleryPreviews();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.year !== this.props.year || prevProps.month !== this.props.month) {
      this.updateDates();
      this.generateGalleryPreviews();
    }
  }

  generateGalleryPreviews = (start = this.startDate, end = this.endDate) => {
    const dates = [];

    for(let i = start; i < end; i.setDate(i.getDate() + 1)) {
      dates.unshift(this.formatDate(i));
    }

    this.setState({ dates: dates });
  };

  render() {
    const { dates } = this.state;

    return (
      <main className="Gallery">
        <h2> Gallery </h2>
        <div className="galleryFilter">
          <SelectYear />
          <SelectMonth />
        </div>
        <ul className="GalleryContent">
          {dates.map((date) => <Preview date={date} key={date} />)}
        </ul>
      </main>
    );
  }
};

const mapStateToProps = ({ year, month }) => {
  return { year, month }
};

export default connect(mapStateToProps)(GalleryPage);