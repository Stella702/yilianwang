import React, { Component } from 'react';
import './ChooseGoods.css';
import { Select, Button, Form, Input, Checkbox, Radio  } from 'antd';
import axios from 'axios';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const provinceData = ['手机', '数码'];
const cityData = {
  手机: ['Palm', '诺基亚', 'HTC'],
  数码: ['相机', '移动电源', '耳机'],
};
const xianData = {
  Palm: ['Pre3', 'Veer'],
  诺基亚: ['N95', 'N81'],
  HTC: ['Sensation', 'Hero'],
  相机: ['尼康', '索尼', '松下'],
  移动电源: ['鹅卵石', '飞毛腿'],
  耳机: ['Boss', 'JBL']
};
const CheckboxGroup = Checkbox.Group;
const options = [
  { label: 'WIFI功能', value: 'WIFI功能' },
  { label: 'GPS导航', value: 'GPS导航' },
  { label: '双卡双待', value: '双卡双待' },
  { label: '电视播放', value: '电视播放' },
  { label: '高清电视', value: '高清电视' },
];

export default class ChooseGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '商品管理-添加商品',
      cities: cityData[provinceData[0]],
      value: 1,
      firstCity: '手机',
      secondCity: cityData[provinceData[0]][0],
      thirdCity: xianData[cityData[provinceData[0]][0]][0],
      thirdCities: [],
      modelList: [1, 2, 3],
      brand: [],
      price: [],
      shape: [],
      camera: [],
      internet: [],
      OS: [],
      Smart: [],
      thickness: [],
      Resolution: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/data')
      .then(res => {
        // 设置信号option
        this.setState({
          // 手机型号列表
          modelList: res.data.Model,
          // 商品品牌列表
          brand: res.data.Brand,
          // 市场价
          price: res.data.Price,
          // 设置外观样式
          shape: res.data.Shape,
          // 设置摄像头
          camera: res.data.Camera,
          // 设置网路类型
          internet: res.data.Internet,
          // 设置操作系统
          OS: res.data.OS,
          // 设置是否智能
          Smart: res.data.Smart,
          // 设置厚度
          thickness: res.data.thickness,
          // 设置分辨率
          Resolution: res.data.Resolution
        });
      })
      .catch(console.log('获取失败'));
  }
  handleProvinceChange = (value) => {
    this.setState({
      firstCity: value,
      cities: cityData[value],
      secondCity: cityData[value][0],
      thirdCity: xianData[cityData[value][0]][0]
    });
  }
  onSecondCityChange = (value) => {
    this.setState({
      secondCity: value,
      thirdCities: xianData[value],
      thirdCity: xianData[value][0]
    });
  }
  onThirdCityChange = (value) => {
    this.setState(
      {
        thirdCity: value
      }
    );
  }
  handleChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
    const xianOption = this.state.thirdCities.map(city => <Option key={city}>{city}</Option>);
    const modelOption = this.state.modelList.map(city => <Option key={city}>{city}</Option>);
    const brandOption = this.state.brand.map(city => <Option key={city}>{city}</Option>);
    const priceOption = this.state.price.map(city => <Option key={city}>{city}</Option>);
    const shapeOption = this.state.shape.map(city => <Option key={city}>{city}</Option>);
    const cameraOption = this.state.camera.map(city => <Option key={city}>{city}</Option>);
    const internetOption = this.state.internet.map(city => <Option key={city}>{city}</Option>);
    const OSOption = this.state.OS.map(city => <Option key={city}>{city}</Option>);
    const SmartOption = this.state.Smart.map(city => <Option key={city}>{city}</Option>);
    const thicknessOption = this.state.thickness.map(city => <Option key={city}>{city}</Option>);
    const ResolutionOption = this.state.Resolution.map(city => <Option key={city}>{city}</Option>);
    return (
      <div>
        <div className="ChooseGoods">
          {this.state.title}
        </div>
        <div className="editForm">
          <div className="choosePhone">
            {/* 选择商品 */}
            <div className="topWrap">
              <div className="top">
                <div>1、选择商品类目</div>
                <div>
                  已选择类目:
                  <span>{this.state.firstCity}</span>
                  &#62;
                  <span>{this.state.secondCity}</span>
                  &#62;
                  <span>{this.state.thirdCity}</span>
                </div>
              </div>
              <div className="bottom">
                <span>一级分类:</span>
                <Select defaultValue={provinceData[0]} style={{ width: 90 }} onChange={this.handleProvinceChange}>
                  {provinceOptions}
                </Select>
                <span>二级分类:</span>
                <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>
                  {cityOptions}
                </Select>
                <span>三级分类:</span>
                <Select value={this.state.thirdCity} style={{ width: 90 }} onChange={this.onThirdCityChange}>
                  {xianOption}
                </Select>
              </div>
            </div>
          </div>
          {/* 编辑商品详细信息 */}
          <Form className="edit" onSubmit={this.handleSubmit}>
            <div className="top">
              <span>填写商品信息</span>
              <span><Button type="primary">重置</Button></span>
            </div>
            <div className="editMain">
              <div className="first">
                <span>
                商品名称:
                  <Select defaultValue="Galaxy" style={{ width: 90 }} >
                    {modelOption}
                  </Select>
                </span>
                <span>
                商品品牌:
                  <Select defaultValue="Nokia" style={{ width: 90 }} >
                    {brandOption}
                  </Select>
                </span>
              </div>
              <div >
                <span>
                市场价:
                  <Select defaultValue="100元" style={{ width: 90 }} >
                    {priceOption}
                  </Select>
                </span>
                <span>
                  会员价:
                  <Input className="editPriest"></Input>
                </span>
              </div>
              <div className="attribute">
                商品属性
                <div className="shuxing">
                  <div className="setPhone">
                    <div>
                      <span>
                        型号:
                        <Select defaultValue="Galaxy" style={{ width: 90 }} >
                          {modelOption}
                        </Select>
                      </span>
                      <span>
                        外观样式:
                        <Select defaultValue="直板" style={{ width: 90 }} >
                          {shapeOption}
                        </Select>
                      </span>
                    </div>
                    <div>
                      <span>
                        摄像头:
                        <Select defaultValue="800" style={{ width: 90 }} >
                          {cameraOption}
                        </Select>
                      </span>
                      <span>
                        网络类型:
                        <Select defaultValue="WCDMA" style={{ width: 90 }} >
                          {internetOption}
                        </Select>
                      </span>
                    </div>
                    <div>
                      <span>
                        操作系统:
                        <Select defaultValue="Android" style={{ width: 90 }} >
                          {OSOption}
                        </Select>
                      </span>
                      <span>
                        是否智能手机:
                        <Select defaultValue="是" style={{ width: 90 }} >
                          {SmartOption}
                        </Select>
                      </span>
                    </div>
                    <div>
                      <span>
                        厚度:
                        <Select defaultValue="8" style={{ width: 90 }} >
                          {thicknessOption}
                        </Select>
                      </span>
                      <span>
                        分辨率:
                        <Select defaultValue="1280*720" style={{ width: 90 }} >
                          {ResolutionOption}
                        </Select>
                      </span>
                    </div>
                  </div>
                  <div>
                    高级功能
                    <div>
                      <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div>
                    机身颜色:
                    <div className="phoneColor">
                      <RadioGroup onChange={this.onChange} value={this.state.value}>
                        <Radio className="radio" value="东北银">东北银</Radio><div className="red">宏</div>
                        <Radio className="radio" value="脑残粉">脑残粉</Radio><div></div>
                        <Radio className="radio" value="高级黑">高级黑</Radio><div></div>
                        <Radio className="radio" value="木耳粉">木耳粉</Radio><div></div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
