import styled from "styled-components";

export const ModalContainer = styled.div`
position: fixed;
top: 25%;
left: 50%;
transform: translateX(-50%);
width: 700px;
background-color: rgba(0,0,0,0.8);
z-index: 1000;
border-radius: 10px;

display: flex;
flex-direction: column;
justify-content: space-between;

.header-modal {
    width: 100%;
    height: 60px;
    gap: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between !important;
    align-items: center;
    padding-inline: 15px;
    margin-bottom: 20px;

    h1 {
        font-size: 3rem;
    }

    button {
        width: 80px;
        height: 30px;
        border-radius: 7px;
        border: none;
        background-color: #3489B1;
        font-weight: bold;
        font-size: 1.5rem;
        color: #ffffff;
    } 
}
`

export const ConfirmedPeople = styled.div`
width: 100%;
display: flex;
flex-direction: column;

.user {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center;
    gap: 80px;
}
`