import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';


const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

class LifeCycleContainer extends Component {

  // 부모의 초기 컬러
  state = {
    color : "#000000"
  }

  // 언제 값이 변화하는 보기 위해 State 값 변경하는 함수
  onClickToChangeColor = () => {
    this.setState({
      color : getRandomColor()
    })
    console.log(this.state.color)
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickToChangeColor}>색상 변경</button>
        <LifeCycleComponent color={this.state.color}/>
      </div>
    );
  }
}

export default LifeCycleContainer;