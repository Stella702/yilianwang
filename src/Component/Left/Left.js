import React, { Component } from 'react';
import './Left.less';
import {  Link } from 'react-router-dom';
import {  Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
export default class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: ['sub1'],
    };
  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
      <div className="LeftWrap">

        <div className="LeftTop">
       功能管理项
        </div>
        <div className="LeftBottom">
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: 240 }}
          >
            <SubMenu key="sub1" className="item" title={<span><Icon type="mail" /><span>商品管理</span></span>}>

              <Menu.Item key="1" className="item"><Link to="/Home/choosegoods">商品选择</Link></Menu.Item>
              <Menu.Item key="2" className="item"><Link to="/Home/GoodsList">商品列表</Link></Menu.Item>
              <Menu.Item key="3" className="item"><Link to="/Home/Self">自提点管理</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" className="item" title={<span><Icon type="appstore" /><span>订单管理</span></span>}>
              <Menu.Item key="2" className="item"><Link to="/Home/choosegoods">订单查询</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" className="item" title={<span><Icon type="setting" /><span>店铺管理</span></span>}>

              <Menu.Item key="5" className="item"><Link to="/Home/choosegoods">商家资料管理</Link></Menu.Item>
              <Menu.Item key="6" className="item"><Link to="/Home/choosegoods">买家须知</Link></Menu.Item>
              <Menu.Item key="7" className="item"><Link to="/Home/choosegoods">店铺公告</Link></Menu.Item>
              <Menu.Item key="8" className="item"><Link to="/Home/choosegoods">轮播图片设置</Link></Menu.Item>
              <Menu.Item key="9" className="item"><Link to="/Home/choosegoods">店铺留言管理</Link></Menu.Item>

            </SubMenu>
            <SubMenu key="sub4" className="item" title={<span><Icon type="setting" /><span>系统设置</span></span>}>
              <Menu.Item key="9" className="item"><Link to="/Home/choosegoods">店铺留言管理</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </div>

      </div>
    );
  }
}
