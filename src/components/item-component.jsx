import { useState } from "react";
import ReactInputMask from "react-input-mask";
import ReactModal from "react-modal";
import styled from "styled-components"
import apiAuth from "../services/apiAuth";
import check from "../assets/verificado.gif"
import { whatsapp } from "../services/whatsappSend";


export default function ItensComponent(props) {
    const [statusModal, setStatusModal] = useState(false);
    const [modalCheck, setModalCheck] = useState(false);
    const [name, setName] = useState("");
    const [cell, setCell] = useState("");
    const [disabled, setDisabled] = useState(false);


    function openModal(e){
        e.preventDefault();
        setStatusModal(true);
    }

    function closeModal(e){
        e.preventDefault();
        setStatusModal(false);
    }

    async function confirm(e){
        e.preventDefault();
        
        setDisabled(true);
       const body = {
        userName: name,
        userCells: cell,
        itemId: Number(props.item.id)
       }
       console.log(body);
       await apiAuth.insertToCart(body)
       .then((res)=> {
            console.log(res.data)
            setStatusModal(false);

            apiAuth.editQuantity(props.item.id)
            .then(()=> {
                setModalCheck(true);
                setTimeout(()=> {
                    setModalCheck(false);
                    whatsapp.SendMessage(props.item.name, props.item.description, cell, name)
                    .then(()=> {
                        window.location.reload();
                    });
                },2000)
                setDisabled(false);
                
             })
                .catch(err => {
                console.log(err)
                alert('Um erro aconteceu, atualize a página!')
         })
        })
        .catch((err)=> {
             console.log(err)
             alert('Um erro aconteceu, atualize a página!')
         })
        

        
        }
        
    return(
        <ItensList>
           <ReactModal
            isOpen={modalCheck}
            ariaHideApp={false}
            contentLabel="Ok"
            style={{
                overlay: {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)'
                },
                content: {
                  background: '#ffffff',
                  borderRadius: '10px',
                  padding: '20px',
                  width:'200px',
                  height:'200px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',                
                }
              }}
           >
            <img src={check} alt="imagem de verificado" width={'190px'}/>

           </ReactModal>
            <ReactModal
                isOpen={statusModal}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Confirmação..."
                style={{
                    overlay: {
                      backgroundColor: 'rgba(255, 255, 255, 0.5)'
                    },
                    content: {
                      zIndex: 100,
                      border: '1px solid gray',
                      background: '#ffffff',
                      borderRadius: '10px',
                      padding: '20px',
                      width:'200px',
                      height:'500px',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      
                                          
                    }
                  }}
                >
                  
                <Header>
                    <h1>Insira os dados abaixo</h1>
                    <div onClick={closeModal}><ion-icon name="close-outline"></ion-icon></div>
                </Header>

                <Form onSubmit={confirm}>
                    <input type="text" 
                    placeholder="NOME + SOBRENOME" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
                    <ReactInputMask 
                    required 
                    type="text" 
                    placeholder="CELULAR" 
                    mask="(99) 99999-9999"
                    id="cell"
                    value={cell}
                    onChange={(e) => setCell(e.target.value.replace(/[\(\)\-, ]/g, ''))}
                    />

                    <Bottom>
                        <div className="checkbox">
                            <input type="checkbox" required/>
                            <h1>Ao confirmar, os noivos saberão sua intenção de presente do chá de panela!</h1>
                        </div>
                        <h2>- 1 {props.item.name}</h2>
                    </Bottom>

                    <button type="submit" disabled={disabled}>{disabled ? "Confirmando" : "Confirmar"}
                    <div className="bonfire"><ion-icon name="bonfire-outline"></ion-icon></div>
                    </button>

                    <Loading aux={disabled}>
                        <div className="spinner is-animating"></div>
                    </Loading>
                </Form>
                
            </ReactModal>
           
            <Card quantity={props.item.quantity}>
                <div className="overlay"><p>Item já foi escolhido</p></div>
                <div className="leftPart">
                    <p className="name">{props.item.name}</p>
                    <p className="description">{props.item.description}</p>
            
                    <div className="quantity">
                        <div>
                            <ion-icon name="cafe-outline" className="teapot"></ion-icon>
                        </div>
                        <p>{props.item.quantity} item(s) restante(s)</p>
                    </div>
                    
                </div>

                <div className="button" onClick={openModal}>
                <div><ion-icon name="gift-outline" className="gift"></ion-icon></div>
                    <p>Indicar seu presente</p>
                </div>

            </Card>
            
        </ItensList>
    );
}


const Loading = styled.div`
  display: ${(props) => (!props.aux ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  .spinner {
    border: 5px solid #dcdcdc;
    border-left-color: #1877f2;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .spinner.is-animating {
    animation: loading 2s linear infinite;
  }
  p {
    font-family: lato;
    color: #b98b28;
    margin-top: 5px;
  }
`;

const Bottom = styled.div`
    width: 100%;
    height: auto;
    border-top: solid 1px gray;
    .checkbox{
        display: flex;
        input{
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }

    h2{
        font-weight:700 ;
        margin-top: 10px;
        color: #b98b28;

    }
`

const Form = styled.form`
padding-bottom: 10px;
box-sizing: border-box;

:first-child{
    margin-top: 12px;
}

button{
    .bonfire{
        width: auto;
        margin-top: 0;
        font-size: 25px;
    }
        display: flex;
        justify-content: space-around;
        align-items: center;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #6c4be4;
        color: #FFFFFF;
        cursor: pointer;
        width: 100%;
        padding: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 0em;
        transition: background-color 0.3s ease;
        &:hover {
                background-color: #87dd5f;
                color: #FFFFFF;
            }
}
`

const Header = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    font-size: large;
    font-family: 'Courier New', Courier, monospace;
    border-bottom: 1px solid gray;
    div{
        font-size: 20px;
        cursor: pointer;
        color: #af0000;
    }

`

const ItensList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .modal{
        border: 1px solid gray;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 20px;
        width:200px;
        height:500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
                      
    }
`

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin-top: 15px;
    width: 350px;
    height: 100px;
    background-color:white;
    border-color: gray;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right:10px;
    box-sizing: border-box;
    color: gray;
    position: relative;

    .overlay{
        display: ${(props) => (!props.quantity? "flex" : "none")};
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(104, 104, 104, 0.78);
        position: absolute;
        justify-content: center;
        align-items: center;
        z-index:0;
        p{
            color: white;
            font-weight: 700;
        }
    }
    

    .button{
        cursor: pointer;
        background-color: #fcc676a1;
        color: #9F9F9F;
        width: 130px;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 20px;
        margin-top: 5px;
        transition: background-color 0.3s ease;
            &:hover {
                background-color: #9F9F9F;
                color: wheat;
            }
        p{
            width: 100px;
            text-align: center;
            font-size: 13px;
        }
        div{
        width: 20px;
        font-size: 30px;
        display: ${(props) => (!props.quantity? "none" : "inirit")};
        
    }
       
    }

    .name{
        font-weight: 700;
        color: #000;
    }
    .description{
        font-size: 13px;
        margin-top: 5px;
    }
    .quantity{
        width: auto;
        display: flex;
        position: relative;
        margin-top: 10px;

        div{
            color: #9F9F9F;
            margin-right: 10px;
            font-size: 15px;
        }

        p{
            margin-top: 3px;
            font-size: 10px;
        }
       
    }
    `

