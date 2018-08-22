import React, { Component } from 'react';
// import RouterHead from '../RouterHead/RouterHead';
export default class Self extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '商品管理-自提点管理'
    };
  }
  render() {
    return (
      <div>
        <div className="head">
          {this.state.title}
        </div>
      </div>
    );
  }
}
