import './style.css'
export default function Experience() {

    return (
        <>
            <section id='experience' className='experience limita-sessao'>
                
                <p>Explore My</p>

                <h1>Experience</h1>
                <div className='box-pai'>
                <div className='box-experience '>
                    <h2>FrontEnd Development</h2>
                    <ul className='list-skills'>
                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>HTML</h3>
                                <p>Experienced</p>
                            </div>
                        </li>

                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>CSS</h3>
                                <p>Experienced</p>
                            </div>
                        </li>

                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>JavaScript</h3>
                                <p>Basic</p>
                            </div>
                        </li>

                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>React</h3>
                                <p>Intermediate</p>
                            </div>
                        </li>

                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>GIT</h3>
                                <p>Experienced</p>
                            </div>
                        </li>

                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>GitHub</h3>
                                <p>Experienced</p>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className='box-experience '>
                    <h2>Soft Skills</h2>
                    <ul className='list-skills'>
                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>Creativity</h3>
                                
                            </div>
                        </li>

                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>Resilience</h3>

                            </div>
                        </li>

                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>Jempathy</h3>
                                
                            </div>
                        </li>

                        <li className='box-skills'>
                            <img src="./assets/checkmark.png" alt="" />
                            <div>
                                <h3>proactive</h3>

                            </div>
                        </li>

                        
                    </ul>
                </div>
                </div>
                <a href="#projects" ><img className='img-next' src="./assets/arrow.png" alt="arrow" /></a> 
            </section>

        </>

    )

}