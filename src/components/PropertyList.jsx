// imports

import { useEffect } from "react"
import { useState } from "react"
import { fetchProperties } from "../api/api"
import { Link } from "react-router-dom"
import AddProperty from "./AddProperty"
import './property-list-style.css'

function PropertyList() {
    const [isLoading,setIsLoading]=useState(true)
    const [listOfProperties,setListOfProperties]=useState([])
   const [clicked,setClicked]=useState(true)
    useEffect(()=>{
        setIsLoading(true)
        fetchProperties().then(data=>{
            setListOfProperties([...data])
            setIsLoading(false)
        })
    },[setListOfProperties])
    
    return isLoading?<div>...is loading</div>:<div className="property-list-page">
        
        <div className="property-sort-querries">
            <label>sort by : 
                <select onChange={handleChangeQuery} value={query}>
                    <option value="bedroom">bedrooms</option>
                    <option value="bathroom">bathrooms</option>
                    <option value="price">price</option>
                    
                    </select></label>
                    <label>order : 
                <select onChange={handleChangeOrder} value={order}>
                    <option value="asc">accending</option>
                    <option value="desc">decending</option>
                    
                    </select></label>
                    <label>type : 
                <select onChange={handleChangeType} value={type}>
                 <option value="">All</option>
                    <option value="DETACHED">detached</option>
                    <option value="SEMI-DETACHED">semi detached</option>
                    <option value="TERRACE">terrace</option>
                    <option value="APARTMENT">apartment</option>
                    
                    </select></label>
                    <label>status : 
                <select onChange={handleChangeStatus} value={status}>
                 <option value="">All</option>
                    <option value="SOLD">Sold</option>
                    <option value="FOR SALE">For Sale</option>
                   
                    
                    </select></label>
            
        </div>
        <div className="property-list-container">{listOfProperties.map(property=>{
            return (
                <div className={property.status.replaceAll(' ', '')}>
                <div className="ppt title"><Link to={`/properties/${property.id}`}><h1>{property.address}</h1></Link></div>
                <div className="ppt image"><Link to={`/properties/${property.id}`}><img class="property-list-image" src={`${property.image}`} alt={`image of property at ${property.address}`}/></Link></div>
                <div className="ppt description">{property.description}</div>
                <div className="ppt content">
                    <h2>£{property.price}</h2>
                    <h3>{property.address}, {property.postcode}</h3>
                    <p>Bedrooms: {property.bedroom}</p>
                    <p>Bathrooms: {property.bathroom}</p>
                    <p>{property.type}</p>
                    <h4>{property.status}</h4>
                </div>
                </div>
                )

        })}
        <div onClick={e=>{clicked?setClicked(false):null}}>{clicked?<div id="add-property-click">List Property Click here</div>:<AddProperty setListOfProperties={setListOfProperties} setClicked={setClicked}/>}</div>
        
        </div>
        </div>
        
       

}

export default PropertyList