import React, {useState,useEffect} from "react";
import {SDGCard} from './SDGCard.js'


async function SDGInfo(){
    let header={'Connection':'keep-alive','Content-Type':'application/json'}
    let response = await fetch('/api/firebaseauth/sdginfo', {
        method: 'POST',headers: header})
    const resp = await response.json()
    return resp
}



export function Favorites(){
    let [SDG,setSDG]=useState([])

    useEffect(()=>{
        SDGInfo().then((resp)=>{
            setSDG(resp)
        })

    })

    return (
        <div class="container-fluid ">
            <h4 style={{fontWeight:500}}>SDG Favorites</h4>
            <div className='row'>

            {
                Object.values(SDG).map(function(sdg){
                    return(
                        <div class="col-xs-12 col-md-4 col-sm-2" >
                            <SDGCard sdg={sdg}/>
                            <p></p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )

}
