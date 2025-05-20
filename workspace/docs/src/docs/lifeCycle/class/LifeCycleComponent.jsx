import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  state = {
    number: 0,
    color: null
  }

  colorRef = null;

  onClickToIncrease = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  constructor(props) {
    super(props)
    console.log(props)
  }

  //마운트 직전 
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState)

    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color }
    }
    return null
  }

  //마운트 직후
  componentDidMount() {
    console.log("마운트 된 직후 componentDidMount")
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("shouldComponentUpdate", nextProp, nextState)
    return nextState.number % 5 !== 0;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState)

    if (prevProps.color !== this.props.color) {
      return this.colorRef.style.backgroundColor
    }

    return null;
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState) {
      console.log(`업데이트 직전 state : ${prevState}`)
    }
    if (snapshot) {
      console.log(`업데이트 직전 color : ${snapshot}`)
    }
  }





  render() {
    return (
      <div>
        <div
          ref={(el) => this.colorRef = el}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: this.state.color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "blue"
          }}
        >
          <h1>{this.state.number}</h1>
        </div>
        <button onClick={this.onClickToIncrease}>더하기 버튼</button>
      </div>
    );
  }
}

export default LifeCycleComponent;