import Link from 'next/link';

export default function Footer() {

    return (
        <footer className="footer">
            <span>
                © 2024
            </span>
            <Link href="/legal" className="nav-item" scroll={false}>
                Mentions légales
            </Link>
        </footer>
    );
}