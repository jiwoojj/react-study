import React from 'react';
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitted, errors }
  } = useForm({ mode: "onChange" });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;



  const onSubmit = async (data) => {
    console.log("제출된 데이터:", data);
    // 서버 전송 등 로직 처리
  };

  return (
    <div>
      <p>회원가입</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>이메일</p>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            {...register("email", {
              required: true,
              pattern: {
                value: emailRegex
                message: "이메일 형식이 아닙니다"
              }
            })}
          />
        </label>

        {/* 에러 처리 */}
        {errors.email?.type === "required" && (
          <p>이메일을 입력하세요</p>
        )}
        {errors.email?.type === "pattern" && (
          <p>{errors.email.message}</p>
        )}

        <div>
          <p>취미</p>
          <label>
            <span>축구</span>
            <input type="checkbox" value="축구"{...register("hobbies")}/>
          </label>
        </div>



        <button disabled={isSubmitting}>회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
