import styles from './footer.module.scss';
import Link from 'next/link';

export default function Footer() {

    return (
        <footer className={styles['footer']}>
            <span>
                © 2024
            </span>
            <Link href="/legal" className="nav-item">
                Mentions légales
            </Link>
        </footer>
    );
}