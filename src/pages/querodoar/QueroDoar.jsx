import s from './querodoar.module.scss'
import Livro from '../../assets/livro.png'
export default function QueroDoar(){
    return(
        <section className={s.main}>

            <section className={s.introducao}><p>Por favor, preencha o formulário com suas informações e as informações do Livro</p></section>

            <form action="">

                <section className={s.titulo}>
                    <img src={Livro} alt="" />
                    <h3>Informações do Livro</h3>
                </section>

                <input type="text" name="" id="" placeholder='Título' />
                <input type="text" name="" id=""  placeholder='Categoria' />
                <input type="text" name="" id=""  placeholder='Autor'/>
                <input type="text" name="" id=""  placeholder='Link da Imagem'/>
                <button>Doar</button>
            </form>
        </section>
    )
}