'use client';
import Link from 'next/link';
import useTranslate from '@/hooks/useTranslate';

export default function Header() {
    const translate = useTranslate();
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
                <div className="sp">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 36 36"><path fill="#EEE" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/><path fill="#ED2939" d="M36 18V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v9h36z"/><path fill="#FFF" d="M6 11.5c0-2.585 1.624-4.748 3.81-5.336A5.498 5.498 0 0 0 8.5 6a5.5 5.5 0 1 0 0 11c.452 0 .889-.06 1.31-.164C7.624 16.248 6 14.085 6 11.5z"/><path fill="#EEE" d="m12 7 .225.691h.726l-.588.427.225.691L12 8.382l-.588.427.225-.691-.588-.427h.726zm-2 7 .225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726zm4 0 .225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726zm-5-4 .225.691h.726l-.588.427.225.691L9 11.382l-.588.427.225-.691-.588-.427h.726zm6 0 .225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726z"/></svg>
                        <span>{translate("메뉴singapore")}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
