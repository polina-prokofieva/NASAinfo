import React, { Component } from 'react';
import { connect } from 'react-redux';

import Preview from './Preview/Preview';
import SelectMonth from './SelectMonth/SelectMonth';
import SelectYear from "./SelectYear/SelectYear";
import ErrorBoundry from '../../ErrorBoundry/ErrorBoundry';

import { formatDate } from '../../../utils/dateUtils';

import styles from './GalleryPage.module.scss';

class GalleryPage extends Component {
  startDate = new Date(this.props.year, this.props.month, 1);
  endDate = new Date();

  state = {
    dates: []
  };

  updateDates () {
    this.startDate = new Date(this.props.year, this.props.month, 1);
    this.endDate = new Date(this.props.year, this.props.month + 1, 1);
  }

  componentDidMount() {
    this.generateGalleryPreviews();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.year !== this.props.year || prevProps.month !== this.props.month) {
      this.updateDates();
      this.generateGalleryPreviews();
    }
  }

  generateGalleryPreviews = (start = this.startDate, end = this.endDate) => {
    const dates = [];

    for(let i = start; i < end; i.setDate(i.getDate() + 1)) {
      dates.unshift(formatDate(i));
    }

    this.setState({ dates: dates });
  };

  render() {
    const { dates } = this.state;

    return (
      <ErrorBoundry>
        <main className={styles.GalleryPage}>
          <div className={styles.filter}>
            <SelectYear />
            <SelectMonth />
          </div>
          <ul className={styles.content}>
            {dates.map((date) => <Preview date={date} key={date} />)}
          </ul>
        </main>
      </ErrorBoundry>
    );
  }
};

const mapStateToProps = ({ year, month }) => {
  return { year, month }
};

export default connect(mapStateToProps)(GalleryPage);