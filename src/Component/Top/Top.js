import React, { Component } from 'react';
import './Top.css';
// import Button from 'antd/lib/button';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default class Top extends Component {
  render() {
    return (
      <div className="Top">
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom">
          <div className="left">
            <div className="title">
              <div className="title-left">YILIAN</div>
              <div className="title-right">
                <span className="right-top">易联网</span>
                <span className="right-bottom">.com</span>
              </div>
            </div>
            <span className="zizhu">商家自助管理系统</span>
          </div>
          <div className="right">
            <div className="r-top">
              <div className="top-lw">
                <span className="r-top-l">易连商城倒闭了</span>
                <span>王八蛋老板黄鹤跟小姨子跑了</span>
              </div>
              <div className="bpp">
                <Button type="primary">管理首页</Button>
                <Button type="primary">商城首页</Button>
                <Button type="primary">帮助中心</Button>
                <Button type="primary">退出系统</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
