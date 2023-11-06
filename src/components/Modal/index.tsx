import { ConfirmedPeople, ModalContainer } from "./Modal.styles"
import img1 from '../../../public/img1.svg'

interface ModalOptions {
    isOpen: boolean
    fechaModal: () => void
}

export function Modal({ isOpen, fechaModal }: ModalOptions) {
    if (isOpen) {
        return (
            <ModalContainer>
                <div className="header-modal">
                    <h1>Pessoas Confirmadas</h1>
                    <button onClick={fechaModal}>Fechar</button>
                </div>
                <ConfirmedPeople>
                    <div className="user">
                        <img src={img1} alt="" />
                        <h3>Michel Hoffmann</h3>
                        <p>Confirmado</p>
                    </div>
                </ConfirmedPeople>
            </ModalContainer>
        )
    }
    return null
}