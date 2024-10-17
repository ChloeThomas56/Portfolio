import '../styles/globals.scss';
import { dm_sans } from '@/lib/font';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Cursor } from '@/components/ui/cursor/Cursor';
import SmoothScrolling from '@/components/ui/SmoothScrolling';
import { ThemeProvider } from '@/components/ui/themeToggle/ThemeProvider';
import { CursorProvider } from '@/components/ui/cursor/CursorContext';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chloé Thomas',
    description: 'Développeuse web freelance passionnée par la création et le design. Je conçois des sites et applications web sur-mesure.',
    keywords: "développement web, front-end, création de sites, react, freelance"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={dm_sans.className}>
                <SmoothScrolling>
                    <ThemeProvider
                        attribute="data-theme"
                        defaultTheme="light"
                        enableSystem={false}>
                        <CursorProvider>
                            <Header />
                            <main>{children}</main>
                            <Footer />
                            <Cursor />
                        </CursorProvider>
                    </ThemeProvider>
                </SmoothScrolling>
            </body>
        </html>
    );
}