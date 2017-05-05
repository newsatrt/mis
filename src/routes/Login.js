import React from 'react';
import {connect} from 'dva';
import {Button, Row, Form, Input, Icon, Checkbox} from 'antd';
import styles from './Login.css';

const FormItem = Form.Item;

function Login({
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) {
  return (
    <div className={styles.normal}>
      <main className={styles.content}>
        <h1>Class 100</h1>
        <h3>American Personalized Education Let Language Return Language</h3>
        <Form>
          <FormItem>
            <div className={styles.title}>
              Login
            </div>
          </FormItem>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'username'
                }
              ]
            })(<Input size='large' prefix={<Icon type="user" style={{fontSize: 17}}/>} placeholder='User Name'/>)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'password'
                }
              ]
            })(<Input size='large' type='password' prefix={<Icon type="lock" style={{fontSize: 17}}/>}
                      placeholder='Password'/>)}
          </FormItem>
          <FormItem style={{marginBottom: 8}}>
            {getFieldDecorator('autoLogin', {
              valuePropName: 'checked',
            })(
              <Checkbox>Auto login</Checkbox>
            )}
          </FormItem>
          <Row>
            <Button type='default' size='large'>
              Login
            </Button>
          </Row>
          <Row className={styles.message}>

          </Row>
        </Form>
      </main>
      <footer>
        <div className={styles.copyright}>
          <div>
            copyright @ 2014 class100.com,All Rights Reserved
          </div>
          <div>
            北京亿佰教育科技有限公司
          </div>
        </div>
        <div className={styles.qq}>
          <div>
            <i className={styles.qqIcon}></i>
          </div>
          <div>
            QQ:4006325656
          </div>
        </div>
      </footer>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Form.create()(Login));
