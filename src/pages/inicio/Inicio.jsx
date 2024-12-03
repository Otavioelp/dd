import s from './inicio.module.scss'
import Imagem1 from '../../assets/imagem1.png'
import Imagem2 from '../../assets/imagem2.png'
import Imagem3 from '../../assets/imagem3.png'
import Imagem4 from '../../assets/imagem4.png'
import Fundo from '../../assets/Fundo.png'


export default function Inicio(){
    return(
       <main>
        <section className={s.logo}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>

             <section className={s.titulocards}>
            <h2 className={s.titulo}>Por que devo doar?</h2>
                </section>

            <section className={s.cardscontainer}>

                <section className={s.cards}>
                    <img src={Imagem1} alt="" />
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </section>

                <section  className={s.cards}>
                <img src={Imagem2} alt="" />
                <p>Estimula o hábito da leitura e o aprendizado contínuo</p>
                </section>

                <section  className={s.cards}>
                <img src={Imagem3} alt="" />
                <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </section>

                <section  className={s.cards}>
                <img src={Imagem4} alt="" />
                <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </section>
            </section>
    
       </main>
    )
}