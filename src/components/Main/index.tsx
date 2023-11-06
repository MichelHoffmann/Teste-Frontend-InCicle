import cruz from '../../../public/cruz-icon.svg'
import { Card } from "../Card";
import { MainContainer } from "./Main.styles";
import { useEffect, useState } from "react";
import { Quadro } from "../Quadro";

interface CardItem {
    id: number
    title: string
    type: 'event' | 'release' | 'publication'
    description: string
    info: {
        date: string
        place: string
    }
    file: {
        url: string
    }
    invited_people: []
}


interface QuadroItem {
    title: string,
    resume_files: [
        file: string
    ]
}

export function Main() {
    const [cards, setCards] = useState([])
    const [quadros, setquadros] = useState([])

    function FechaMensagem() {
        const card = document.querySelector('.message')
        card?.classList.add('hidden')

        setTimeout(() => {
            card?.classList.add('none')
        }, 2000);
    }

    useEffect(() => {
        fetch('./data.json').then(res => res.json()).then(res => setCards(res.data))
    }, [])
 
    return (
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
                {cards.map((card: CardItem, index: number) => {
                    return (
                        <Card
                            key={index}
                            id={card.id}
                            title={card.title}
                            type={card.type}
                            description={card.description}
                            date={card.info.date}
                            url={card.file.url}
                            place={card.info.place}
                            invited_people={card.invited_people}
                        />
                    )
                })}
            </section>
            <aside>
                <article className="message">
                    <h2>Endomarketing</h2>
                    <p>Endomarketing está relacionado às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para o cliente. Marketing interno devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes.</p>
                    <button onClick={FechaMensagem}>DISPENSAR</button>
                </article>

                <article className="quadros">
                    <h2>Quadros de Gestão à Vista</h2>
                    <Quadro />
                    <Quadro />
                    <Quadro />
                </article>
            </aside>
        </MainContainer>
    )
}