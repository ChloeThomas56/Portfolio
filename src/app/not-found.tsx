import { CustomLink } from '@/components/ui/customLink/CustomLink';
import { MdArrowOutward } from 'react-icons/md';

export default function NotFound() {
    return (
        <div className="page">
            <h1>
                404 | Page non trouvée
            </h1>
            <CustomLink href="/" className="link hover-underline">
                <MdArrowOutward />
                Retour à l&#39;accueil
            </CustomLink>
        </div>
    )
}