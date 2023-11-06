import styled from "styled-components";

export const CardContainer = styled.div`
padding: 9px;
width: 100%;
height: 93px;
display: flex;
justify-content: space-between;
align-items: center;

background-color: #ffffff;
box-shadow: 0px 2px 8px -3px rgba(0,0,0,0.51);

.content {
    display: flex;
    gap: 16px;
    
    img {
        width: 73px;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 5px;

        h2 {
            font-weight: bold;
            font-size: 1.6rem;
        }

        div {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 8px;

            .type {
                padding-block: 2px;
                width: 48px;
                height: 11px;
                text-align: center;
                font-weight: bold;
                font-size: 0.6rem;
                color: #ffffff;
            }
            
            .red {
                background-color: #EE8686;
            }

            .blue {
                background-color: #3489B1;
            }
            
            .gray {
                background-color: #707070;
            }

            .confirmations {
                color: #3489B1;
                text-decoration: underline;
            }

            .confirmations:hover {
                cursor: pointer;
            }

            p {
                font-size: 0.9rem;
                font-weight: 300;
            }
        }

        p {
            font-size: 1.3rem;
        }
    }
}

.dots {
    width: 24px;
}

@media (max-width: 1130px) {
    min-height: 110px;
}

@media (max-width: 980px) {
    height: 140px;
}

@media (max-width: 950px) {
    .content{
        img {
            width: 90px;
            height: 90px;
        }
    }
}

@media (max-width: 700px) {
    .content{
        img {
            width: 100px;
            height: 100px;
        }
    }
}

@media (max-width: 520px) {
    .content{
        img {
            width: 90px;
        }
    }
}

@media (max-width: 465px) {
    .content{
        img {
            display: none;
        }
    }
}

@media (max-width: 465px) {
    height: 170px;
}
`