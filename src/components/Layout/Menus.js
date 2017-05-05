import React, {PropTypes} from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'dva/router'
import menu from '../../utils/menu'

const topMenus = menu.map(item => item.key)
const getMenus = function (menuArray, collapsed, parentPath) {
  parentPath = parentPath || '/'
  return menuArray.map(item => {
    if (item.child) {
      return (
        <Menu.SubMenu key={item.key} title={<span>{item.icon ?
          <Icon type={item.icon}/> : ''}{collapsed && topMenus.indexOf(item.key) >= 0 ? '' : item.name}</span>}>
          {getMenus(item.child, collapsed, parentPath + item.key + '/')}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={parentPath + item.key}>
            {item.icon ? <Icon type={item.icon}/> : ''}
            {collapsed && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
          </Link>
        </Menu.Item>
      )
    }
  })
}

function Menus({collapsed, location,handleClickNavMenu, navOpenKeys, changeOpenKeys}) {
  const menuItems = getMenus(menu, collapsed);
  return (
    <Menu>
      {menuItems}
    </Menu>
  )
}

Menus.propTypes = {
  collapsed: PropTypes.bool,
  location: PropTypes.object,
  handleClickNavMenu: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func
}

export default Menus
