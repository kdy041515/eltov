'use client';

import { useEffect, useState } from 'react';
import { useForm }             from 'react-hook-form';
import { useRouter }           from 'next/navigation';
import Link                    from 'next/link';
import useTranslate            from '@/hooks/useTranslate';
import { auth }                from '@/firebase/firebaseConfig';
import { onAuthStateChanged }  from 'firebase/auth';
import { getPortfolioCategories, uploadBoardContent } from '@/firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage }             from '@/firebase/firebaseConfig';

export default function GallRegist({ linkPrefix = '/portfolio' }) {
  const t      = useTranslate();
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  // React Hook Form 셋업
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      category_code: '',
      title_ko: '',
      title_en: '',
      title_jp: '',
      title_cn: '',
      description_ko: '',
      description_en: '',
      description_jp: '',
      description_cn: '',
      images: [null, null, null, null, null],
      video_urls: ['', '', '', '', '']
    }
  });

  // 인증 체크 & 카테고리 로드
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (!user) router.replace('/');
    });
    getPortfolioCategories().then(data => {
      setCategories(data);
      if (data.length) setValue('category_code', data[0].code);
    });
    return unsub;
  }, [router, setValue]);

  // 제출 핸들러
  const onSubmit = async data => {
    // 1) files 배열로 변환
    const files = data.images
      .map(f => (f instanceof FileList ? f[0] : f))
      .filter(Boolean);

    // 2) Storage 업로드 & URL 획득
    const image_urls = await Promise.all(files.map(async file => {
      const path = `${linkPrefix.replace(/^\//, '')}/${Date.now()}_${file.name}`;
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      return await getDownloadURL(storageRef);
    }));

    // 3) first image as thumbnail
    const thum_url = image_urls[0] || '';

    // 4) Firestore에 저장할 데이터
    const payload = {
      category_code: data.category_code,
      title_ko: data.title_ko,
      title_en: data.title_en,
      title_jp: data.title_jp,
      title_cn: data.title_cn,
      description_ko: data.description_ko,
      description_en: data.description_en,
      description_jp: data.description_jp,
      description_cn: data.description_cn,
      image_urls,
      thum_url,
      video_urls: data.video_urls.filter(u => u)
    };

    // 5) 업로드 호출
    try {
      const boardName = linkPrefix.replace(/^\//, '');
      const newId = await uploadBoardContent(boardName, payload);
      alert(t('등록되었습니다'));
      router.push(`/${boardName}/${newId}`);
    } catch (err) {
      console.error(err);
      alert(t('업로드 중 오류가 발생했습니다'));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{t('게시글 등록')}</h2>

      {/* 카테고리 */}
      <div className="form_item">
        <label>{t('카테고리')}</label>
        <select {...register('category_code', { required: true })} disabled={isSubmitting}>
          {categories.map(c => (
            <option key={c.code} value={c.code}>{c.ko}</option>
          ))}
        </select>
      </div>

      {/* 타이틀 (한국어 필수) */}
      <div className="form_item">
        <label>{t('타이틀 (한국어)')} *</label>
        <input {...register('title_ko', { required: t('타이틀을 입력해주세요') })} disabled={isSubmitting} />
        {errors.title_ko && <span>{errors.title_ko.message}</span>}
      </div>
      {/* 나머지 언어 타이틀 */}
      {['en','jp','cn'].map(lang => (
        <div className="form_item" key={lang}>
          <label>{t(`타이틀 (${lang.toUpperCase()})`)}</label>
          <input {...register(`title_${lang}`)} disabled={isSubmitting} />
        </div>
      ))}

      {/* 설명 */}
      {['ko','en','jp','cn'].map(lang => (
        <div className="form_item" key={lang}>
          <label>{t(`설명 (${lang.toUpperCase()})`)}</label>
          <textarea {...register(`description_${lang}`)} rows={3} disabled={isSubmitting} />
        </div>
      ))}

      {/* 이미지 업로드 (5개) */}
      <div className="form_item">
        <label>{t('이미지 업로드')} (최대 5개)</label>
        {Array(5).fill().map((_,i) => (
          <input
            key={i}
            type="file"
            accept="image/*"
            {...register(`images.${i}`)}
            disabled={isSubmitting}
            style={{ display:'block', marginBottom:8 }}
          />
        ))}
      </div>

      {/* 비디오 URL (5개) */}
      <div className="form_item">
        <label>{t('비디오 URL')} (최대 5개)</label>
        {Array(5).fill().map((_,i) => (
          <input
            key={i}
            type="url"
            placeholder="https://youtu.be/..."
            {...register(`video_urls.${i}`)}
            disabled={isSubmitting}
            style={{ display:'block', width:'100%', marginBottom:8 }}
          />
        ))}
      </div>

      {/* 버튼 */}
      <div className="list_btns">
        <div className="right">
          <Link href={linkPrefix} className="btn" disabled={isSubmitting}>{t('취소')}</Link>
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? t('등록 중...') : t('등록')}
          </button>
        </div>
      </div>
    </form>
  );
}
