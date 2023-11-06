import { Card } from "../Card";
import { MainContainer } from "./Main.styles";
import qd1 from '../../../public/qd1.svg'
import qd2 from '../../../public/qd2.svg'
import qd3 from '../../../public/qd3.svg'
import qd4 from '../../../public/qd4.svg'
import planet from '../../../public/planet-icon.svg'
import dots from '../../../public/dots-icon-white.svg'
import cruz from '../../../public/cruz-icon.svg'

export function Main() {
    function FechaMensagem() {
        const card = document.querySelector('.message')
        console.log(card)
        card?.classList.add('hidden')

        setTimeout(() => {
        card?.classList.add('none')
      }, 2000);
    }
    return(
        <MainContainer>
            <section>
                <header>
                    <h1>Endomarketing</h1>
                    <div>
                        <select id="filtro">
                            <option value="todos">TIPO</option>
                            <option value="Comunicado">COMUNICADO</option>
                            <option value="Evento">EVENTO</option>
                            <option value="Publicação">PUBLICAÇÃO</option>
                        </select>
                        <button>CRIAR <img src={cruz} alt="" /></button>
                    </div>
                </header>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
            <aside>
                <article className="message">
                    <h2>Endomarketing</h2>
                    <p>Endomarketing está relacionado às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para o cliente. Marketing interno devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes.</p>
                    <button onClick={FechaMensagem}>DISPENSAR</button>
                </article>

                <article className="quadros">
                    <h2>Quadros de Gestão à Vista</h2>
                    <div className="quadro">
                        <div className="header">
                            <h3>Demonstrativo Comercial</h3>
                            <div>
                                <img src={planet} alt="" />
                                <img src={dots} alt="" />
                            </div>
                        </div>
                        <div className="images">
                            <img src={qd1} alt="" />
                            <img src={qd2} alt="" />
                            <img src={qd3} alt="" />
                            <img src={qd4} alt="" />
                        </div>
                    </div>

                    <div className="quadro">
                        <div className="header">
                            <h3>Demonstrativo Comercial</h3>
                            <div>
                                <img src={planet} alt="" />
                                <img src={dots} alt="" />
                            </div>
                        </div>
                        <div className="images">
                            <img src={qd1} alt="" />
                            <img src={qd2} alt="" />
                            <img src={qd3} alt="" />
                            <img src={qd4} alt="" />
                        </div>
                    </div>
                    
                    <div className="quadro">
                        <div className="header">
                            <h3>Demonstrativo Comercial</h3>
                            <div>
                                <img src={planet} alt="" />
                                <img src={dots} alt="" />
                            </div>
                        </div>
                        <div className="images">
                            <img src={qd1} alt="" />
                            <img src={qd2} alt="" />
                            <img src={qd3} alt="" />
                            <img src={qd4} alt="" />
                        </div>
                    </div>
                </article>
            </aside>
        </MainContainer>
    )
}