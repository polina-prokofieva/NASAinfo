import React, { Component } from 'react';
import Preview from './Preview/Preview';
import './GalleryPage.css';

export default class GalleryPage extends Component {
  startDate = new Date(2020, 1, 1);
  endDate = new Date();

  state = {
    dates: []
  };

  twoDigits = (n) => `${n < 10 ? '0' : ''}${n}`;

  fromatDate(date) {
    const year = date.getFullYear();
    const month = this.twoDigits(date.getMonth() + 1);
    const day = this.twoDigits(date.getDate());

    return `${year}-${month}-${day}`;
  }

  componentDidMount() {
    this.generateGalleryPreviews();
  }

  generateGalleryPreviews = (start = this.startDate, end = this.endDate) => {
    const dates = this.state.dates;

    for(let i = start; i < end; i.setDate(i.getDate() + 1)) {
      dates.unshift(this.fromatDate(i));
    }

    this.setState({ dates: dates });
  };

  render() {
    return (
      <div className="Gallery">
        <h2> Gallery </h2>
        <h3> February 2020 </h3>
        <ul className="GalleryContent">
          {this.state.dates.map((date) => <Preview date={date} key={date} />)}
        </ul>
      </div>
    );
  }
};