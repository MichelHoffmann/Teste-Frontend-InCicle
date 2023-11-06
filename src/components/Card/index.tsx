import { CardContainer } from "./CardContainer";
import DotsIcon from '../../../public/dots-icon.svg'
import { Modal } from "../Modal";
import { useState } from "react";

interface CardItem {
    id: number
    title: string
    type: 'event' | 'release' | 'publication'
    description: string
    date: string
    url: string
    place: string
    invited_people: InvitedPerson[]
}

interface InvitedPerson {
    id: number;
    name: string;
    confirmed_presence: boolean;
    avatar: string;
    username: string;
}

function TypeColor(type: string) {
    if (type == 'event') {
        return 'type red'
    } else if (type == 'release') {
        return 'type blue'
    }
    return 'type gray'
}

function TypeName(type: string) {
    if (type == 'event') {
        return 'EVENTO'
    } else if (type == 'release') {
        return 'COMUNICADO'
    }
    return 'PUBLICAÇÃO'
}

export function Card({ title, type, description, date, url, place, invited_people }: CardItem) {

    const [openModal, setOpenModal] = useState(false)

    const countConfirmedPeople = () => {
        if (invited_people) {
            const confirmedCount = invited_people.filter(person => person.confirmed_presence).length;
            const totalCount = invited_people.length;
            return `${confirmedCount} CONFIRMAÇÕES DE ${totalCount}`;
        }
    };

    function AbreFechaModal() {
        setOpenModal(!openModal)
        console.log(openModal)
    }

    return (
        <CardContainer>
            <div className="content">
                <img src={url} alt="" />
                <div className="info">
                    <h2>{title}</h2>
                    <div>
                        <p className={TypeColor(type)}>{TypeName(type)}</p>

                        {type === 'event' && <p>{place}</p>}

                        <p>{date}</p>

                        {type === 'event' &&
                            <div onClick={AbreFechaModal} className="confirmations">
                                {countConfirmedPeople()}
                                <Modal
                                    isOpen={openModal}
                                    fechaModal={AbreFechaModal}
                                />
                            </div>
                        }
                    </div>
                    <p>{description}</p>
                </div>
            </div>
            <img className="dots" src={DotsIcon} alt="" />
        </CardContainer>
    )
}