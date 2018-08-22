import React from 'react';
import areaData from '../src/assets/AreaData';

class AreaDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectProvince: areaData[0].name,
      selectCity: areaData[0].city[0],
      selectCounty: areaData[0].city[0].districtAndCounty[0],
    };
  }

  changeProvince(e) {
    this.setState({ selectProvince: e.target.value });
    areaData.map((item, index) => {
      if (e.target.value === item.name) {
        this.setState({ selectCity: item.city[0] });
      }
      return true;
    });
  }

  changeCitys(e) {
    this.setState({ selectCity: e.target.value });
  }
  changeCounties(e) {
    this.setState({ selectCounty: e.target.value });
  }
  render() {
    const names = areaData.map((item, index) => {
      return <option key={index}>{item.name}</option>;
    });
    const citys = areaData.map((item, index) => {
      if (this.state.selectProvince === item.name) {
        return item.city.map((item, index) =>
          <option key={index}>{item.name}</option>
        );
      }
      return true;
    });
    return (
      <div>
        <select value={this.state.selectProvince} onChange={this.changeProvince.bind(this)}>{names}</select>
        <select value={this.state.selectCity} onChange={this.changeCitys.bind(this)}>{citys}</select>
        {/* <select value={this.state.selectCounty} onChange={this.changeCounties.bind(this)}>{counties}</select> */}
      </div>
    );
  }
}
export default AreaDate;
