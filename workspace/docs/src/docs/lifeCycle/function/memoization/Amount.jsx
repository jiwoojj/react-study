import React, { useMemo } from 'react';

const Amount = ({
  props,
  divStyle,
  pStyle,
  buttonStyle,
  amountMore,
  amountLess,
  couponMore,
  couponLess
}) => {

  const {amount , coupon} = props

 

  console.log("자식 리 랜더링!!")
  return (
    <div style={divStyle}>
      {amount > 1 && <button onClick={amountLess} style={buttonStyle}> - </button>}
      <p style={pStyle}>수량: {amount}</p>
      <button onClick={amountMore} style={buttonStyle}> + </button>
      
      <br></br>

      {coupon > 0 &&  <button onClick= {couponLess} style={buttonStyle}> - </button>}
      <p style={pStyle}>쿠폰: {coupon}</p>
      <button onClick={couponMore} style={buttonStyle}> + </button>
    </div>
  );
};

export default Amount;