import { useFetchProject } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProject();
  return <h2>Projects</h2>;
};
export default Projects;
