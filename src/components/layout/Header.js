'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useTranslate from '@/hooks/useTranslate';
import { useAuthStore } from '@/store/authStore';
import { logout } from '@/firebase/auth';

export default function Header() {
    const translate = useTranslate();
    const user = useAuthStore((state) => state.user);
    const clearUser = useAuthStore(state => state.clearUser);
    const router = useRouter();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
        await logout();
        clearUser();
        router.push('/login');
        } catch (err) {
        console.error('로그아웃 실패:', err);
        alert('로그아웃 중 오류가 발생했습니다.');
        }
    };

    return (
        <div id="header">
            <div className='header_inner'>
                <div id="logo">
                    <Link href="/">
                        <img id="logo_ci" src="../assets/images/logo_ci.svg"/>
                        <img id="logo_text" src="../assets/images/logo_text.svg" alt="elTOV" />
                    </Link>
                </div>
                <div id="nav">
                    <ul>
                        <li><Link href="#">{translate("메뉴air")}</Link></li>
                        <li><Link href="#">{translate("메뉴kiosk")}</Link></li>
                        <li><Link href="#">{translate("메뉴way")}</Link></li>
                        <li><Link href="#">{translate("메뉴media")}</Link></li>
                        <li><Link href="/kiosk">{translate("메뉴hw")}</Link></li>
                        <li><Link href="/portfolio">{translate("메뉴portfolio")}</Link></li>
                        <li><Link href="#">{translate("메뉴about")}</Link></li>
                    </ul>
                </div>
                <div className="header_links">
                    {user
                        &&
                        <>
                            <div className='name'>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                                <span>안녕하세요, <strong>{user.email}</strong>님</span>
                            </div>
                            <button onClick={handleLogout}>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
                                <span>로그아웃</span>
                            </button>
                        </>
                    }
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 36 36"><path fill="#EEE" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/><path fill="#ED2939" d="M36 18V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v9h36z"/><path fill="#FFF" d="M6 11.5c0-2.585 1.624-4.748 3.81-5.336A5.498 5.498 0 0 0 8.5 6a5.5 5.5 0 1 0 0 11c.452 0 .889-.06 1.31-.164C7.624 16.248 6 14.085 6 11.5z"/><path fill="#EEE" d="m12 7 .225.691h.726l-.588.427.225.691L12 8.382l-.588.427.225-.691-.588-.427h.726zm-2 7 .225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726zm4 0 .225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726zm-5-4 .225.691h.726l-.588.427.225.691L9 11.382l-.588.427.225-.691-.588-.427h.726zm6 0 .225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726z"/></svg>
                        <span>{translate("메뉴singapore")}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
