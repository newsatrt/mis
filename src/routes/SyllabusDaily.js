import React from 'react'
import {connect} from 'dva'
import {Input, Table, Icon} from 'antd'
import styles from './SyllabusDaily.css'
import Clock from '../components/Common/Clock'
import logout from '../assets/logout.png'
import moment from 'moment'
import _ from 'lodash'

function SyllabusDaily({dispatch, syllabus}) {
  const {list:dataSource} = syllabus
  const columns = [
    {
      title: 'Course Name',
      dataIndex: 'chapter',
      key: 'course_name',
      render: (text) => (
        <div>{_.get(text[0],"name")}</div>
      )
    }, {
      title: 'Material Name',
      dataIndex: 'chapter',
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
      title: 'Classroom',
      key: 'action',
      render: (text, record) => (
        <span>
         <a href="#" className={styles.enterBtn}>Enter</a>
    </span>
      ),
    }
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Syllabus Today</span>
        <img width={38} height={38} src={logout}/>
      </div>
      <div className={styles.content}>
        <div className={styles.clockBlock}>
          <Clock/>
        </div>
        <div className={styles.clockBlock}>
          <Clock nation="China"/>
        </div>
        <div className={styles.table}>
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


export default connect(({syllabus}) => ({syllabus}))(SyllabusDaily);
