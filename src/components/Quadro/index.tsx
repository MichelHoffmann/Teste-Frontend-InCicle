import planet from '../../../public/planet-icon.svg'
import dots from '../../../public/dots-icon-white.svg'
import qd1 from '../../../public/qd1.svg'
import qd2 from '../../../public/qd2.svg'
import qd3 from '../../../public/qd3.svg'
import qd4 from '../../../public/qd4.svg'

export function Quadro() {
    return (
        <div className="quadro">
            <div className="header">
                <h3>Demonstrativo comercial</h3>
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
    )
}