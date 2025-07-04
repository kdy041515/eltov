"use client";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import useTranslate from '@/hooks/useTranslate';
import { useForm } from 'react-hook-form';
import { addContact } from '@/firebase/firestore';

export default function KioskHardware() {
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
        titleCode="문의하기타이틀"
        subtextCode="문의하기서브타이틀"
      />

       <div id="sub_content" className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
                <div className="item">
                    <div className="tit">{translate("성함")}</div>
                    <div className="input">
                        <input type="text" {...register('name')} />
                    </div>
                </div>
                <div className="item">
                    <div className="tit">{translate("전화번호")}</div>
                    <div className="input">
                        <input type="tel" {...register('tel')} />
                    </div>
                </div>
                <div className="item">
                    <div className="tit">{translate("이메일")}</div>
                    <div className="input">
                        <input type="email" {...register('email')} />
                    </div>
                </div>
                <div className="item">
                    <div className="tit">{translate("문의분야")}</div>
                    <div className="input">
                        <select {...register('category')}>
                            <option value="">{translate('문의분야')}</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>
                </div>
                <div className="item">
                    <div className="tit">{translate("문의내용")}</div>
                    <div className="input">
                        <textarea {...register('description')} />
                    </div>
                </div>
            </div>
            <div className="form_btns">
                <button type="submit">{translate("문의하기")}</button>
            </div>
        </form>
      </div>
    </>
  );
}
