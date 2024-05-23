import { useEffect, useState } from "react";
import HeaderComponent from "../components/header-component";
import ItensComponent from "../components/item-component";
import apiAuth from "../services/apiAuth";
import styled from "styled-components";




export default function Timeline(){
    const [listArray, setListArray] = useState([])
    const [disabled, setDisabled] = useState(false);

    useEffect(()=> {
        getListAndRender()
    },[])

    function getListAndRender(){
        setDisabled(true);
        apiAuth.getBridal()
        .then((res)=> {
            setListArray(res.data)
            setDisabled(false);
        })
        .catch((err)=> {
            setDisabled(false);
             console.log(err)
             alert('Um erro aconteceu, atualize a página!')
         })
    }

    return(
        <>
            

            <HeaderComponent/>

            <TimelineComponent>
                {listArray.map((item, index) =>
                    <ItensComponent key={index} item={item} />
                )}
            </TimelineComponent>
            <Loading aux={disabled}>
                <div className="spinner is-animating"></div>
                <p>Carregando...</p>
            </Loading>
    </>
    )
}

const Loading = styled.div`
  display: ${(props) => (!props.aux ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  
  p{
    margin-bottom: 20px;
  }
  .spinner {
    border: 5px solid #dcdcdc;
    border-left-color: #b98b28;
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

const TimelineComponent = styled.div`
    padding-bottom: 50px;

    @media (min-width: 680px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
