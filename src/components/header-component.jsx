import styled from "styled-components"
import image from "../assets/gg.jpg"
export default function HeaderComponent() {
    return(
        <Container>
            
            <div className="title">
                <div>
                <div className="imgProfile"></div>
                <h1>CHÁ DE PANELA</h1>
                <h2>GLEISI E GABRIEL</h2>
                
                <p>LISTA DE PRESENTES </p>  
                </div>
                
            </div>
            <div className="alert">
                <p>Dia 06/07 às 15 horas!</p>
                <p>Escolha o item que você deseja presentear os noivos na lista abaixo:</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.5); 
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .alert{
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
        box-sizing: border-box;
        height: auto;
        background-color: #fcfc7f;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p{
            text-align: center;
            font-family: "Ubuntu", sans-serif;
        }
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
        letter-spacing: 0em;
        p{
            font-family: "Ubuntu", sans-serif;
            font-style: normal;
            text-align: center;
            margin-top: 3px;
            font-size: 20px;
            font-weight: 700;
        }
       div{
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
       }
        h1{
            margin-top: 5px;
            font-size: 20px;
            text-align: center;
            font-family: "Ubuntu", sans-serif;
        }
        h2{
            margin-top: 5px;
            margin-bottom: 8px;
            font-size: 20px;
            text-align: center;
            font-family: "Ubuntu", sans-serif;
        }

        
    }
    
    `

