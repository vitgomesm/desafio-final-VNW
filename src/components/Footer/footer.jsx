
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import linkedin from '../../assets/linkedin.png'
import twitt from '../../assets/twitt.png'
import youtube from '../../assets/youtube.png'
import S from './footer.module.scss'

export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href="https://www.facebook.com/?locale=pt_BR" target="_blank">  <img src={face} alt="Facebook" />  </a>
                    <a href="https://x.com/?lang=pt-br&mx=2" target="_blank">  <img src={twitt} alt="Twitter" />  </a>
                    <a href="https://www.youtube.com/" target="_blank">  <img src={youtube} alt="Youtube" /> </a>
                    <a href="https://www.linkedin.com/in/vitoriagomes4" target="_blank">  <img src={linkedin} alt="Linkedin" />  </a>
                    <a href="https://www.instagram.com/vittech4.0/" target="_blank">  <img src={insta} alt="instagram" />  </a>
                </nav>
            </section>
            <section className={S.boxTexto}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}