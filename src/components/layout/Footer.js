"use client";
import Link from 'next/link';
import useTranslate from '@/hooks/useTranslate';

export default function Footer() {
    const translate = useTranslate();
    return (
        <div id="footer">
            <div className='footer_inner'>
                <div id="ft_logo">
                    <img id="logo_text" src="../assets/images/logo_text.svg" alt="elTOV" />
                </div>
                <div id="ft_nav">
                    <ul>
                        <li><Link href="#">{translate("메뉴air")}</Link></li>
                        <li><Link href="#">{translate("메뉴kiosk")}</Link></li>
                        <li><Link href="#">{translate("메뉴way")}</Link></li>
                        <li><Link href="#">{translate("메뉴media")}</Link></li>
                        <li><Link href="#">{translate("메뉴hw")}</Link></li>
                        <li><Link href="/references">{translate("메뉴references")}</Link></li>
                        <li><Link href="#">{translate("메뉴about")}</Link></li>
                    </ul>
                </div>
                <div className="ft_info">
                    <div className="item">{translate("회사명엘토브")}</div>
                    <div className="item">{translate("대표자명")}</div>
                    <div className="item">{translate("사업자번호")}: 119-86-11936</div>
                    <div className="item">{translate("연락처")}: 1544-2538</div>
                </div>
                <div className="ft_copy">© 2025 elTOV. All Rights Reserved.</div>
            </div>
        </div>
    );
}
