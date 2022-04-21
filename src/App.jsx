import "./app.css"

import { useState } from "react"
import { useEffect } from "react"


const App = () => {


    const [apidata, setapidata] = useState({ Countries: [] });

    // const [citysearch , setcitysearch] = useState();

    console.log(apidata)


    useEffect(() => {


        fetch(`https://api.covid19api.com/summary`).then((res) => res.json()).then((data) => setapidata(data))


    }, [])



    return (

        <div className="parent" >


            <div className="uper" ></div>

            <div className="nechy">

                {apidata.Countries.map((v,i) => v.Country == "Pakistan" ?

                    <div key={i} >

                        <span>

                        </span>



                        <span>
                            Total Confirmed : {v.TotalConfirmed}

                        </span>

                        <span></span>
                        <span></span>
                        <span></span>
                        <span><p>  {apidata.Date}    </p></span>

                        



                        

                        

                    </div>

                    :

                    null
                        
                )}



            </div>


        </div>
    )





}


export default App