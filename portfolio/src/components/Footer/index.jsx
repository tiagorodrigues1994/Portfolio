import './style.css'
export default function Footer(){

    return(
        <footer id='footer' className=" limita-sessao">
        <nav >
        
        <ul >
           
            <li className="nav_item"><a href="#aboutMe" className="nav_link">About</a></li>
            <li className="nav_item"><a href="#experience" className="nav_link">Experience</a></li>
            <li className="nav_item"><a href="#projects" className="nav_link">Projects</a></li>
            <li className="nav_item"><a href="#contact" className="nav_link">Contact</a></li>
            
        </ul>
        </nav>
        <p>Copyright © 2023 Tiago Rodrigues.</p>
        </footer>
    )

}