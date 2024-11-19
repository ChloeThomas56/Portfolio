import styles from './footer.module.scss';
import { CustomLink } from '../ui/customLink/CustomLink';

export default function Footer() {

    return (
        <footer className={styles['footer']}>
            <CustomLink href="/legal">
                © 2024
            </CustomLink>
        </footer>
    );
}