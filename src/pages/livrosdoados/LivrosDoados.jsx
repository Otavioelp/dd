import Protagonista from '../../assets/protagonista.png'
import s from './livrosdoados.module.scss'

export default function LivrosDoados(){
    return(
     
        <section className={s.principal}>

             <section className={s.titulo}> <h2>Livros Doados</h2></section>

            <section className={s.containercards}>

            <section className={s.livrosdoados}>
                <img src={Protagonista} alt="" />
                <div>
                <h3>O Protagonista</h3>
                <p>Susanne Andrade</p>
                <p>Ficcção</p></div>
                </section>

                </section>

                </section>
    )
}