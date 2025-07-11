"use client";
import { useEffect, useState } from "react";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import { useForm } from "react-hook-form";
import { addContact } from '@/firebase/firestore';

export default function Login() {
    const translate = useTranslate();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        await addContact(data);
        alert('submitted');
        reset();
    };

  return (
    <>
      <SubVisual
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80"
        titleCode="로그인"
        subtextCode="엘토브 담당자를 위한 시스템입니다.<br/>불법 사용 시 법적 제재를 받을 수 있습니다."
      />
      <div id="sub_content" className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <div className="item">
              <div className="tit">{translate("아이디")}</div>
              <div className="input">
                <input type="text" {...register("id")} />
              </div>
            </div>
            <div className="item">
              <div className="tit">{translate("비밀번호")}</div>
              <div className="input">
                <input type="password" {...register("password")} />
              </div>
            </div>
          </div>
          <div className="form_btns">
            <button type="submit">{translate("로그인")}</button>
          </div>
        </form>
      </div>
    </>
  );
}
