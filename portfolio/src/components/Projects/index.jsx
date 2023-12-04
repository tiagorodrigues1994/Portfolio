
import ProjectsProps from '../ProjectsProps'
import './style.css'
export default function Projects() {

    return (

        <section id='projects' className=' limita-sessao'>
            <p>Browse My Recent</p>
            <h1>Projects</h1>

            <div className='box-projects'>
            <ProjectsProps  imagem="./assets/barbearia.png" titulo="Project Sorveteria" nome="Project Sorveteria" link="" link02="" />

                <ProjectsProps  imagem="./assets/Natal.png" titulo="Project Natal" nome="Project Natal" link="" link02="" />

                <ProjectsProps  imagem="./assets/Agencia.png" titulo="Project Agência" nome="Project Agência" link="" link02="" />
            </div>



            <a href="#contact" ><img className='img-next' src="./assets/arrow.png" alt="arrow" /></a> 

        </section>
    )
}