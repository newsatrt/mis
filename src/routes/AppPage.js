/**
 * Created by Administrator on 2017/5/4 0004.
 */
import React, {PropTypes} from 'react'
import {Layout} from 'antd'
import {connect} from 'dva'
import styles from './AppPage.css'
import Menus from '../components/Layout/Menus'

const {Header, Footer, Sider, Content} = Layout
function AppPage({children, location, dispatch,app}) {
  const {userInfo} = app;
  const menusProps = {
    location
  }
  return (
    <Layout className={styles.wrapper}>
      <Sider className={styles.sider}>
        <div className={styles.logo}></div>
        <div className={styles.user}>
          <img src={userInfo.avatar} width="60" height="60"/>
          <div className={styles.name}>{userInfo.name}</div>
          <Menus {...menusProps} />
        </div>
      </Sider>
      <Layout className={styles.main}>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

/*App.propTypes = {
 children: PropTypes.element.isRequired,
 location: PropTypes.object,
 dispatch: PropTypes.func,
 app: PropTypes.object
 }*/

export default connect(({app})=>({app}))(AppPage)
