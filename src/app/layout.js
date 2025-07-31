import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Keypad from '../components/partials/keypad/Keypad';
import Clients from '../components/partials/client/Clients';
import AccessibilityManager from '../components/AccessibilityManager';
import AuthProvider from './providers/AuthProvider';
import '@/styles/reset.scss';
import '@/styles/style.scss';

export const metadata = {
    title: 'Eltov 엘토브',
    description: 'ㅇㅇㅇㅇㅇㅇ',
    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.ico',
    },
};

export default async function RootLayout({ children }) {
    return (
        <>
            <head>
            </head>
            <html lang="ko">
                {/* MEMO: suppressHydrationWarning={true} 추가하면 extention의 불필요한 코드를 막음 */}
                <body suppressHydrationWarning={true}>
                    <AuthProvider>
                        <AccessibilityManager />
                        <div id="layout">
                            {<Header/>}
                            <div id="content">
                                {children}
                            </div>
                            {<Keypad/>}
                            {<Clients/>}
                            {<Footer/>}
                        </div>
                        <div id="portal"></div>
                    </AuthProvider>
                </body>
            </html>
        </>
    );
}
