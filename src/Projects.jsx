import { useFetchProjects } from './fetchProjects'
const Projects = () => {
  const { projects } = useFetchProjects()

  return (
    <section className="projects">
      <div className="title">
        <h3>projects</h3>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          console.log(projects)
          const { id, url, title, img } = project
          return (
            <a href={url} className="project" key={id}>
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
