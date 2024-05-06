import styled from "styled-components"
import image from "../assets/gg.jpg"
export default function HeaderComponent() {
    return(
        <Container>
            <div className="imgProfile"></div>
            <div className="title">
                <p>LISTA DE PRESENTES </p>
                <p> CHÁ DE PANELA GABRIEL E GLEISI</p>
            </div>
            <div className="alert">
                <p>Dia 06/07 às 15:00hrs! Confirme sua presença com os noivos.</p>
                <p>Escolha abaixo o item que irá presentear no chá de panela</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5); 
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .alert{
        width: 100%;
        height: 50px;
        background-color: #fcfc7f;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .imgProfile {
        margin-top: 20px;
        background-color: white;
        width: 150px;
        height: 100px;
        border-radius: 35px;
        background-image: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
  }
  .title{
        margin-top: 10px;
        p{
            font-family: 'Courier New', Courier, monospace;
            font-style: normal;
            text-align: center;
        }
        :first-child{
            font-weight: 700;
        }
        :last-child{
            margin-top: 10px;
            font-size: 20px;
        }
        
    }
    
    `

