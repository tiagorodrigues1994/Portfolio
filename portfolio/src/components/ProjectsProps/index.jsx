import './style.css'
export default function ProjectsProps(Props) {
    return (

        <article className='figura-props'>
            <img src={Props.imagem} alt={Props.alt} />
            <h3>{Props.nome}</h3>
            <div>
                <button className='btn-project'><a href={Props.link}>GitHub</a></button>
                <button className='btn-project'><a href={Props.link02}>Live Demo</a></button>
            </div>

        </article>

    )
}