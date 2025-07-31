'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import SubVisual from '@/components/partials/subVisual/SubVisual';
import useTranslate from '@/hooks/useTranslate';

import { auth } from '@/firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const translate = useTranslate();
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = async data => {
    try {
      const email = data.id;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        data.password
      );
      console.log('로그인 성공:', userCredential.user);

      alert('로그인 되었습니다.');
      reset();
      router.push('/');
    } catch (e) {
      console.error('로그인 오류', e.code, e.message);
      alert('로그인 실패: ' + e.message);
    }
  };

  return (
    <>
      <SubVisual
        titleCode="로그인"
        subtextCode="엘토브_담당자를_위한_시스템입니다"
      />

      <div id="sub_content" className="container container_xs sub_round">
        <div className="round_inner">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_items">
              <div className="item">
                <div className="tit">{translate('아이디')}</div>
                <div className="input">
                  <input
                    type="text"
                    {...register('id', { required: true })}
                  />
                </div>
              </div>

              <div className="item">
                <div className="tit">{translate('비밀번호')}</div>
                <div className="input">
                  <input
                    type="password"
                    {...register('password', { required: true })}
                  />
                </div>
              </div>
            </div>

            <div className="form_btns">
              <button type="submit" className="submit">
                {translate('로그인')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
