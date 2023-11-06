import styled from "styled-components";

export const MainContainer = styled.main`
margin: 35px 80px;
padding: 0 1rem;

display: grid;
grid-template-columns: 1fr 279px;
gap: 31px;
align-items: flex-start;


section {
    display: flex;
    flex-direction: column;
    gap: 10px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-weight: 300;
            font-size: 3.5rem;
        }

        div {
            display: flex;
            gap: 8px;

            select, button {
                height: 38px;
                border-radius: 5px;
            }

            select {
                width: 95px;
            }

            button {
                width: 103px;
                border: none;
                font-weight: bold;
                background-color: #3489B1;
                color: #fff;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
        }
    }
}

.message h2, .quadros h2 {
    font-size: 1.6rem;
    font-weight: bold;
}

.message {
    background-color: #FFF2DE;
    border: 1px solid #DCD1C0;

    padding: 30px;
    margin-bottom: 17px;
    transition: opacity 1s ease-in-out;

    h2 {
        margin-bottom: 12px;
    }

    p {
        font-size: 1.4rem;
        font-weight: 300;
        margin-bottom: 29px;
    }

    button {
        font-weight: bold;
        width: 113px;
        height: 38px;
        background-color: #FFF2DE;
        border: 1px solid #707070;
        border-radius: 4px;
    }

    button:hover {
        cursor: pointer;
    }
}

.quadros {
    background-color: #fff;
    padding: 12px 8px;
    box-shadow: 0px 2px 8px -3px rgba(0,0,0,0.51);

    display: flex;
    flex-direction: column;
    gap: 11px;

    .quadro {
        background-color: rgba(52, 137, 177, 10%);
        padding-inline: 4px;

        .header {
            display: flex;
            justify-content: space-between;
            h3 {
                font-size: 1.3rem;
                font-weight: 300;
                display: inline-block;
            }
        }

        .images {
            display: flex;
            justify-content: space-around;
        }
    }
}

.hidden {
    opacity: 0;
    display: none;
}

@media (max-width: 950px) {
    display: flex;
    flex-direction: column;

    aside {
        display: flex;
        gap: 20px;
    }
}

@media (max-width: 700px) {
    margin-inline: 20px;
}

@media (max-width: 530px) {
    section header {
        h1 {
            font-size: 3rem;
        }

        div {
            select, button {
                width: 80px;
            }
        }
    }
}

@media (max-width: 575px) {
    aside {
        flex-direction: column;
    }
}

@media (max-width: 440px) {
    section header {
        flex-direction: column;
        margin-bottom: 10px;
    }
}
`