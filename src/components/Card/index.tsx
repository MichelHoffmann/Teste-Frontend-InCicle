import { CardContainer } from "./CardContainer";
import Img1 from '../../../public/img1.svg'
import DotsIcon from '../../../public/dots-icon.svg'

export function Card() {
    return(
        <CardContainer>
            <div className="content">
                <img src={Img1} alt="" />
                <div className="info">
                    <h2>Geral dispensado para curtir o feriado</h2>
                    <div>
                        <p className="type">Comunicado</p>
                        <p>13 de OUT</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
            <img className="dots" src={DotsIcon} alt="" />
        </CardContainer>
    )
}