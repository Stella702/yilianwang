import React, { Component } from 'react';
import './Bottom.less';
export default class Bottom extends Component {
  render() {
    return (
      <div className="Bottom">
        <div className="Bottom-sj"></div>
        <div className="Bottom-tp">
          <div className="Bottom-ct1">
            <div className="title">新手上路</div>
            <p>注册/登陆</p>
            <p>购物流程</p>
            <p>关于积分</p>
            <p>物流配送</p>
          </div>
          <div className="Bottom-ct2">
            <div className="title">消费保障</div>
            <p>退换货政策</p>
            <p>退换货流程</p>
            <p>100%正品保证</p>
          </div>
          <div className="Bottom-ct3" >
            <div className="title">支付方式</div>
            <p>在线支付</p>
            <p>银行支付</p>
            <p>积分支付</p>
          </div>
          <div className="Bottom-ct4" >
            <div className="title">商家服务</div>
            <p>加盟优势</p>
            <p>入驻流程</p>
            <p>招商对象</p>
            <p>异联商学院</p>
          </div>
        </div>
        <div className="Bottom-bt">
        </div>
      </div>
    );
  }
}