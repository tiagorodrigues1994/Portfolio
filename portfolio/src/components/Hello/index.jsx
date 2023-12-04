import './style.css'
export default function Hello() {
   return (
      <section id='container-mySelf' className=' limita-sessao'>
         <div className="mySelf ">
            <figure>
               <img src="./assets/checkmark.png" alt="" />
            </figure>

            <figcaption>
               <p>Hello, I'm </p>
               <h1>Tiago Rodrigues</h1>
               <p>Front-end Develop</p>

               <div>
                  <div>
                     <button className='btn-01'>   <a download={true} href="./assets/Tiago_Medeiros_Rodrigues.docx" target="_black">Download CV</a></button>

                     <button className='btn-02'><a href="#contact"> Contact Info</a></button>
                  </div>
                  <div>
                     <a className='hello-link' href="https://www.linkedin.com/in/tiago-rodrigues-251415239/" target='_blank'><img className="icon" src="./assets/linkedin.png" alt="imagem github" /></a>



                     <a className='hello-link' href="https://github.com/tiagorodrigues1994" target='_blank'><img className="icon" src="./assets/github.png" alt="imagem github" /></a>

                  </div>
               </div>
            </figcaption>
         </div>
         <a href="#aboutMe" ><img className='img-next' src="./assets/arrow.png" alt="arrow" /></a> 
      </section>
   )
}