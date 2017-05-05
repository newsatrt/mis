/**
 * Created by Administrator on 2017/5/4 0004.
 */

import React from 'react'
import {connect} from 'dva'
import {Input, Table, Icon} from 'antd'
import styles from './SyllabusMonth.css'
import Clock from '../components/Common/Clock'
import logout from '../assets/logout.png'
import moment from 'moment'
import _ from 'lodash'

function SyllabusMonth({dispatch, syllabus}) {
  const {list:dataSource} = syllabus
  const columns = [
    {
      title: 'Course Name',
      dataIndex: 'course_name',
      key: 'course_name',
      render: (text) => (
        <div>{_.get(text[0],"name")}</div>
      )
    }, {
      title: 'Material Name',
      dataIndex: 'material_name',
      key: 'material_name',
      render: (text) => (
        <div>{_.get(text[0],"material.name")}</div>
      )
    },
    {
      title: 'Class Name',
      dataIndex: 'class_name',
      key: 'class_name'
    }, {
      title: 'Start Time',
      dataIndex: 'start_time',
      key: 'start_time',
      render: (text) => (
        <div>{moment.unix(text).format("YYYY-MM-DD HH:mm")}</div>
      )
    }, {
      title: 'End Time',
      dataIndex: 'end_time',
      key: 'end_time',
      render: (text) => (
        <div>{moment.unix(text).format("YYYY-MM-DD HH:mm")}</div>
      )
    }, {
      title: 'Course Type',
      dataIndex: 'course_type',
      key: 'course_type'
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    }
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Syllabus Month</span>
        <img width={38} height={38} src={logout}/>
        <Input prefix={<Icon type="search"/>}/>

      </div>
      <div className={styles.content}>
        <div className={styles.table}>
          <div className={styles.operation}>
            <a className={styles.last}>Last Month</a>
            <span>2017/12</span>
            <a className={styles.next}>Next Month</a>
          </div>
          <Table
            dataSource={dataSource}
            columns={columns}
            rowKey={record => record.id}
            pagination={false}
          />
        </div>
      </div>
    </div>
  )
}


export default connect(({syllabus}) => ({syllabus}))(SyllabusMonth);

