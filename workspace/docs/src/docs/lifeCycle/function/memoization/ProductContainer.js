import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductContainer = () => {

  const [like , setLike] = useState(0)
  const [amount , setAmount] = useState(1)
  const [coupon , setCoupon] = useState(0)

  // const props = useMemo(() => {
  //   console.log("값이 변화됨")
  //   return {amount : amount , coupon : coupon}
  // } , [amount , coupon ])

  const amountMemo = useMemo(() => {
    console.log("amount 연산")
    return amount
  } , [amount])

  const couponMemo = useMemo(() => {
    console.log("coupon 연산")
    return coupon
  } , [coupon])

  const props = {amount : amountMemo , coupon : couponMemo}


  console.log("부모(product) 리랜더링!")



  const amountMore = useCallback(() => {
    setAmount(amount + 1)
  } , [amount])

  const amountLess = useCallback(() => {
    setAmount(amount - 1)
  } , [amount])

  const couponMore = useCallback(() => {
    setCoupon(coupon + 1)
  } , [coupon])

  const couponLess = useCallback(() => {
    setCoupon(coupon - 1)
  } , [coupon])

  

  //스타일


  const containerStyle = {
    width: "500px",
    height: "300px",
    margin: "20px auto"
  }

  const productStyle = {
      border: "1px solid lightgray", padding: "30px", lineHeight: "1.3"
  }

  const divStyle = {
      border: "1px solid blue",
      height: "60px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: "20px",
      padding: "20px",
  };

  const pStyle = {
      lineHeight: "0",
  };

  const buttonStyle = {
      width: "40px",
      height: "40px",
  }

  

  return (
    <div style={containerStyle}>
      <div style={productStyle}>
        <p>[책] 배워서 바로 써먹는 리액트</p>
        <button onClick={() => {setLike(like +1)}}>좋아요 {like}</button>
      </div>

      <Amount
        props = {props}
        divStyle= {divStyle}
        pStyle= {pStyle}
        buttonStyle = {buttonStyle}
        amountMore = {amountMore}
        amountLess = {amountLess}
        couponMore = {couponMore}
        couponLess = {couponLess}
      />

    </div>
  );
};

export default ProductContainer;