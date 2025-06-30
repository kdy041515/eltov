'use client';
export default function Footer() {
    return (
        <>
            <div id="footer">
                <div className='footer_inner'>
                    <div id="ft_logo">
                        <img id="logo_text" src="../assets/images/logo_text.svg" alt="elTOV" />
                    </div>
                    <div id="ft_nav">
                        <ul>
                            <li><a href="#" data-lang-code="메뉴air">에어</a></li>
                            <li><a href="#" data-lang-code="메뉴kiosk">배리어프리 키오스크</a></li>
                            <li><a href="#" data-lang-code="메뉴way">길찾기</a></li>
                            <li><a href="#" data-lang-code="메뉴media">영상 랜드마크</a></li>
                            <li><a href="#" data-lang-code="메뉴hw">키오스크 H/W</a></li>
                            <li><a href="#" data-lang-code="메뉴references">포트폴리오</a></li>
                            <li><a href="#" data-lang-code="메뉴about">회사소개</a></li>
                        </ul>
                    </div>
                    <div className="ft_info">
                        <div className="item">(주)엘토브</div>
                        <div className="item">대표: 김지성 김지훈</div>
                        <div className="item">사업자번호: 119-86-11936</div>
                        <div className="item">연락처: 1544-2538</div>
                    </div>
                    <div className="ft_copy">© 2025 elTOV. All Rights Reserved.</div>
                </div>
            </div>
        </>
    );
}
