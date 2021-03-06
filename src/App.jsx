import "./app.css"

import { useState } from "react"
import { useEffect } from "react"


const App = () => {


    const [apidata, setapidata] = useState([{ Country: "" }]);
    const [globaldata, setglobaldata] = useState({ Global: { NewDeaths: Number, NewConfirmed: Number, TotalDeaths: Number, TotalConfirmed: Number, TotalRecovered: Number, Date: "" } });

    const [citysearch, setcitysearch] = useState("");




    useEffect(() => {


        fetch(`https://api.covid19api.com/summary`).then((res) => res.json()).then((data) => { setapidata(data.Countries); setglobaldata(data) })


    }, [])

    // console.log(globaldata)
    // console.log(apidata)


    return (

        <div className="parent" >




            <div className="uper" >


                <span>
                    Total Confirmed : {globaldata.Global.TotalConfirmed}
                </span>



                <span>
                    Total Deaths : {globaldata.Global.TotalDeaths}
                </span>

                <span>
                    New Confirmed : {globaldata.Global.NewConfirmed}

                </span>


                <span>
                    New Deaths : {globaldata.Global.NewDeaths}
                </span>

                <span>
                    Total Recovered : {globaldata.Global.TotalRecovered}
                </span>

                <span>
                    {globaldata.Global.Date}
                </span>




            </div>





            <div className="middle">





                <select onChange={(e) => { setcitysearch(e.target.value) }} className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option defaultValue="Choooseee">Choose country</option>
                    {apidata.map((v, i) => (

                        <option value={v.Country} key={i} >
                            {v.Country}
                        </option>
                    ))}



                </select>



                {/* <form>
                    <label >

                        <label defaultValue="Chooseeeee" >

                            <option value="Pakistan">Pak</option>
                            <option value="India">ind</option>


                        </label>
                    </label>
                </form> */}




                {/* <input type="text" className="form-control" onChange={(e) => setcitysearch( e.target.value )  } placeholder="Enter country" />  */}
                {/* <button className="btn btn-outline-dark" onClick={() => {setcitysearch({country : citysearch.var}) ; console.log(citysearch.country) }}>Fetch</button> */}
            </div>




            {
                apidata.map((v, i) => v.Country.toLowerCase() == citysearch.toLocaleLowerCase() ?

                    <div className="nechy" key={i} >

                        <span>
                            {v.Country}
                        </span>



                        <span>
                            Total Confirmed : {v.TotalConfirmed}
                        </span>

                        <span>
                            Total Deaths : {v.TotalDeaths}

                        </span>


                        <span>
                            New Deaths : {v.NewDeaths}
                        </span>

                        <span>
                            Total Recovered : {v.TotalRecovered}
                        </span>

                        <span>
                            {v.Date}
                        </span>









                    </div>

                    :

                    null

                )
            }






        </div>
    )





}


export default App