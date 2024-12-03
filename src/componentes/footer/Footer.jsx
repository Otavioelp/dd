import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/Twitter.png'
import Youtube from '../../assets/youtube.png'
import Linkedin from '../../assets/linkedin.png'
import Facebook from '../../assets/facebook.png'
import s from '../footer/footer.module.scss/'

export default function Footer(){
    return(
    <footer>
        <section className={s.containerlinks}>

        <p>4002-8922</p>

        <section className={s.linksfooter}>
            <a href=""><img src={Facebook} alt="" /></a>
            <a href=""><img src={Twitter} alt="" /></a>
            <a href=""><img src={Youtube} alt="" /></a>
            <a href=""><img src={Linkedin} alt="" /></a>
            <a href=""><img src={Instagram} alt="" /></a>
       </section>

       </section>
       <section className={s.rodape}><p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p></section>
        
        </footer>
    )
}