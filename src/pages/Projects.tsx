import { useState } from 'react';
import useFetchProjects from '../hooks/useFetchProjects';
import useProjectById from '../hooks/useProjectById';
import { FaGithub, FaLink } from "react-icons/fa6";

function Projects() {
    const [projectId, setProjectId] = useState(1);
    const { projects } = useFetchProjects();
    const { project } = useProjectById(projects, projectId);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="pt-4">
                <ProjectCard project={project} />
            </div>
            <div className="pt-4">
                <ProjectList projects={projects} setProjectId={setProjectId} />
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: any }) {
    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex shadow-lg rounded bg-white ms:w-[250px] mm:w-[305px] ml:w-[350px] tb:w-[698px] lp:w-[800px] ll:w-[1000px] mm:h-fit ml:h-[350px]">
            <img className="hidden tb:block w-full min-w-[450px] max-w-[450px] h-full object-cover rounded-l" src={project.img} alt="Project Image" />
            <div className="overflow-hidden ">
                <div className="px-6 py-4">
                    <div className="font-bold text-lg mb-2">{project.title}</div>
                    <p className="text-gray-700 text-base">
                        {project.description}
                    </p>
                </div>
                <div className="px-6 pb-2">
                    {project.link && <Icon icon={<FaLink size="24" />} link={project.link}/>}
                    {project.code && <Icon icon={<FaGithub size="24" />} link={project.code}/>}
                </div>
            </div>
        </div>
    );
}

function ProjectList({ projects, setProjectId }: { projects: any[], setProjectId: (id: number) => void }) {
    return (
        <div className="flex shadow-lg rounded bg-white ms:w-[250px] mm:w-[305px] ml:w-[350px] tb:w-[698px] lp:w-[800px] ll:w-[1000px] h-[250px]">
            <div className="flex w-full m-2 overflow-x-auto">
                {projects.map((project: any, index: number) => (
                    <button
                        key={index}
                        className="p-1"
                        onClick={() => setProjectId(project.id)}
                    >
                        <div className="w-[210px] mx-1 rounded overflow-hidden shadow-lg min-w-[210px] h-[210px]">
                            <img className="w-full h-[190px]" src={project.img} alt={project.title} />
                            <span className="items-center flex justify-center w-full">
                                <div className="text-xs text-black font-semibold text-opacity-80 font-mono">{project.title}</div>
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

function Icon ({ icon, link }: { icon: any, link: string }) {
    return (
        <div className="inline-grid justify-center content-center rounded-lg bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-10 h-10 ">
            <a href={link} target="_blank" rel="noopener noreferrer">
                {icon}
            </a>
        </div>
    )
}

export default Projects;
