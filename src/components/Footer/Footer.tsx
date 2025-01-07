import Link from 'next/link';

export default function Footer() {

    return (
        <div role="contentinfo" className="footer">
            <span>
                © 2024
            </span>
            <Link href="/legal" className="nav-item" scroll={false}>
                Mentions légales
            </Link>
        </div>
    );
}