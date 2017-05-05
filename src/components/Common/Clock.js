import React, {Component} from 'react'
import {Icon} from 'antd'
import moment from 'moment'
import styles from './Clock.css'

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      date: moment(),
      setIntervalCancel: ''
    }
  }

  componentDidMount() {
    let me = this;
    let setIntervalCancel = setInterval(function () {
      me.setState({date: moment()});
    }, 1000)
    me.setState({setIntervalCancel: setIntervalCancel})
  }

  componentWillUnmount() {
    clearInterval(this.state.setIntervalCancel);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Icon type="clock-circle-o"/>
          {this.state.nation == "China" ? this.state.nation : "My" } Time
        </div>
        <div className={this.state.nation == "China" ? styles.chinaClock : styles.clock}>
          <div className={styles.amText}>{this.state.date.format('A')}.</div>
          <div className={styles.timeText}>{this.state.date.format('hh:mm:ss')}</div>
          <div className={styles.dateText}>{this.state.date.format('YYYY-MM-DD')}</div>
        </div>
      </div>

    )
  }
}

