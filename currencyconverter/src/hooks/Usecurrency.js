import { useEffect,useState } from "react"
function Usecurrency(){
    useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.jsonhttps://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).
then((res)=>res.json())
.then((res)=>)
    },[])
}