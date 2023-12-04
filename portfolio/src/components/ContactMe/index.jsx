import './style.css'
export default function ContactMe(){
    return(
        <section id='contact' className=" limita-sessao">
            <p>Get in Touch</p>
            <h3>Contact Me</h3>
            <div className='contactFull'>
            <figure className="contactMe-box">
                <img src="assets/email.png" alt="icon email" />
                <a href="mailto:tiago.rodriguesfr2@gmail.com" target='_blank'>tiago.rodriguesfr2@gmail.com</a>
            </figure>

            <figure  className="contactMe-box">
                <img src="assets/linkedin.png"alt="linkedin" />
                <a href="https://www.linkedin.com/in/tiago-rodrigues-251415239/" >Linkedin</a>
            </figure>
            </div>
          
        </section>
    )
}