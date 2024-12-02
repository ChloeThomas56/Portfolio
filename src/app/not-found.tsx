import { CustomLink } from '@/components/ui/CustomLink';
import WordsReveal from '@/components/ui/animations/WordsReveal';

export default function NotFound() {
    return (
        <div className="page">
            <h1 className="title">
                <WordsReveal text="404 | Page non trouvée" />
            </h1>
            <CustomLink href="/">
                Retour à l&#39;accueil
            </CustomLink>
        </div>
    )
}