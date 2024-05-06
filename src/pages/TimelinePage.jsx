import { useEffect, useState } from "react";
import HeaderComponent from "../components/header-component";
import ItensComponent from "../components/item-component";
import { useNavigate } from "react-router-dom";
import apiAuth from "../services/apiAuth";
import styled from "styled-components";




export default function Timeline(){
    const [listArray, setListArray] = useState([])

    useEffect(()=> {
        getListAndRender()
    },[])

    function getListAndRender(){
        apiAuth.getBridal()
        .then((res)=> {
            setListArray(res.data)
        })
        .catch((err)=> {
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
    </>
    )
}

const TimelineComponent = styled.div`
    
`
