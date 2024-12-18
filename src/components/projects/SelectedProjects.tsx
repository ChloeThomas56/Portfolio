import { useEffect } from 'react';
import projects from '@/lib/projects.json';
import { useCursor } from '@/components/ui/Cursor/CursorContext';
import Link from 'next/link';
import { CustomImage } from '@/components/ui/CustomImage';

export default function SelectedProjects() {
    const selectedProjects          = projects.slice(0, 3);
    const { setIsProjectHovered }   = useCursor();

    /* clean the cursor when unmount */
    useEffect(() => {
        return () => {
            setIsProjectHovered(false);
        };
    }, [setIsProjectHovered]);

    return (
        <section id="projects" className="selected-projects">
            <h2 className="subtitle">
                Projets
            </h2>
            <div className="selected-projects-container">
                <div className="selected-projects--large">
                    <Link 
                        href={`/work/${selectedProjects[0].slug}`}
                        onMouseEnter={() => {setIsProjectHovered(true);}}
                        onMouseLeave={() => {setIsProjectHovered(false);}}
                        scroll={false}
                        className="selected-project">
                        <CustomImage
                            src={selectedProjects[0].image_home}
                            width={1900}
                            height={1140}
                            alt={selectedProjects[0].name}
                            className="selected-project__illustration"
                        />
                        <h3>{selectedProjects[0].name}</h3>
                    </Link>
                </div>
                <div className="selected-projects--small">
                    {selectedProjects.slice(1).map((project) => (
                        <div key={project.id}>
                            <Link 
                                href={`/work/${project.slug}`}
                                onMouseEnter={() => {setIsProjectHovered(true);}}
                                onMouseLeave={() => {setIsProjectHovered(false);}}
                                scroll={false}
                                className="selected-project">
                                <CustomImage
                                    src={project.image_home}
                                    width={1900}
                                    height={1140}
                                    alt={project.name}
                                    className="selected-project__illustration"
                                />
                                <h3>{project.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}