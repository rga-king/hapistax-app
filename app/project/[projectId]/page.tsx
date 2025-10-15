import ProjectDetails from "@/components/Project";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ projectId: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = (await params);
  const project = projects.find(project => projectId === project.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetails project={project} />
}