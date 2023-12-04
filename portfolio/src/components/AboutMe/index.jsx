import './style.css'
export default function AboutMe() {
    return (
        <section id='aboutMe' className=' limita-sessao'>
            <p>Get to know More</p>

            <h1>About Me</h1>
            <div className='box-aboutMe'>
                <figure>
                    <img src="./assets/checkmark.png" alt="" />
                </figure>
                <div className='box-info'>
                    <div className='box-cards01'>
                        <div >
                            <img src="./assets/experience.png" alt="" />
                            <h3>experience</h3>
                            <p>2+ years <br /> At Pizzaria Napoles</p>
                        </div>

                        <div >
                            <img src="./assets/education.png" alt="" />
                            <h3>Education</h3>
                            <p>software engineering <br /> (studying)</p>
                        </div>
                    </div>


                    <p>

                        I am a software engineering student, currently focusing on front-end, I have studied programming for about one year, and in that time I have already completed some courses, on some platforms, namely: DevMedia - Front-end, Vai na Web - front -end end,I have a strong desire to learn, and I am confident that I will evolve more and more.
                    </p>
                </div>
            </div>
            <a href="#experience" ><img className='img-next' src="./assets/arrow.png" alt="arrow" /></a> 
        </section>
    )
}