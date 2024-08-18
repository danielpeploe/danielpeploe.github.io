import { useState, useEffect } from 'react';
import Project from '../types';

const useFetchProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/data/projects.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects.');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error('Error fetching projects');
                }
            }
        };

        fetchProjects();
    }, []);

    return { projects };
}

export default useFetchProjects;