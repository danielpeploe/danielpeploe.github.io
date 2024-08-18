import { useState, useEffect } from 'react';
import Project from '../types';

const useProjectById = (projects: Project[], id: number) => {
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const findProject = () => {
            try {
                const foundProject = projects.find(project => project.id === id);
                if (!foundProject) {
                    throw new Error('Project not found');
                }
                setProject(foundProject);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error('Error finding project');
                }
            }
        };

        findProject();
    }, [projects, id]);

    return { project };
}

export default useProjectById;