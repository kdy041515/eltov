"use client";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import useTranslate from '@/hooks/useTranslate';

export default function KioskHardware() {
  const translate = useTranslate();
  return (
    <>
      <SubVisual
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80"
        titleCode="문의하기타이틀"
        subtextCode="문의하기서브타이틀"
      />

       <div id="sub_content" className="container">
        <form action="">
            <div className="form">
                <div className="item">
                    <div className="tit">{translate("성함")}</div>
                    <div className="input">
                        <input type="text" />
                    </div>
                </div>
                <div className="item">
                    <div className="tit">{translate("전화번호")}</div>
                    <div className="input">
                        <input type="tel" />
                    </div>
                </div>
                <div className="item">
                    <div className="tit">{translate("이메일")}</div>
                    <div className="input">
                        <input type="email" />
                    </div>
                </div>
                <div className="item">
                    <div className="tit">{translate("문의분야")}</div>
                    <div className="input">
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="item">
                    <div className="tit">{translate("문의내용")}</div>
                    <div className="input">
                        <textarea name="" id=""></textarea>
                    </div>
                </div>
            </div>
            <div className="form_btns">
                <button type="button">{translate("문의하기")}</button>
            </div>
        </form>
      </div>
    </>
  );
}
