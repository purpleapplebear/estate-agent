import React from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {  fetchSoldProperties, fetchForSaleProperties } from "../api/api"
import { useEffect } from "react"
import { useState } from "react"


function Home() {   

    const [soldProp, setSoldProp] = useState([])
    const [soldPropId, setSoldPropId]=useState([])
    const [soldPropImg, setSoldPropImg] = useState([])

    useEffect(()=>{
        fetchSoldProperties().then(res=>{return(
            // console.log(res),
            setSoldPropId(res[res.length-1].id),
            setSoldPropImg(res[res.length-1].image),
            setSoldProp(res))
        })
    }, [setSoldProp, setSoldPropId, setSoldPropImg])

    // console.log(soldProp[soldProp.length -1])

    // console.log(soldPropId)
    // console.log(soldPropImg)

    const [forSaleProp, setForSaleProp] = useState([])
    const [forSalePropId, setForSalePropId]=useState([])
    const [forSalePropImg, setForSalePropImg] = useState([])

    useEffect(()=>{
        fetchForSaleProperties().then(res=>{return(
            console.log(res),
            setForSalePropId(res[res.length-1].id),
            setForSalePropImg(res[res.length-1].image),
            setForSaleProp(res))
        })
    }, [setForSaleProp, setForSalePropId, setForSalePropImg])

    console.log(forSalePropId)
    console.log(forSalePropImg)


    let imageStyleSold = {
        backgroundImage : `url(${soldPropImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };
    let imageStyleForSale = {
        backgroundImage : `url(${forSalePropImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return(

        
    <div className='home-page-containers'>

        {/* {console.log(soldProp[0])} */}
        {/* <img src={`${soldProp[0].image}`}></img> */}
        {/* <img src={`${soldPropImg}`}></img>

        <h1>{`${soldPropId}`}</h1> */}

        <div className='home-page-row'>
            <div className='company-name'>
                Welcome to Company Name
            </div>

            <div className='about-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            
        </div>

        <div className='home-page-row'>

            <Link to='/properties?_sort=bedroom&_order=desc&type=&status='><div className='home-page-column column1 property-container'>
                <h1 className='title-text'>Available Properties</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div></Link>

            <Link to='/properties'><div className='home-page-column column2'>
                <h1 className='heading-text' >Don't See What You're Looking For?</h1>

                <h1 className='button-link' >Register Property Now!</h1>

            </div></Link>

          
        </div>  

        <div className='home-page-row'>

            <Link to='/sellers' className={'info-link'}>            <div className='home-page-column column1 seller-container'>
                <h1 className='title-text'>I'm Selling</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div></Link>
            
            
            <div id='hiddenFeature' className='home-page-column column2' style={imageStyleSold}>
                <Link to={`/properties/${soldPropId}`}><h1 className='heading-text'>Recently Sold!</h1></Link>
            </div>
        </div>

        <div className='home-page-row'>

            <Link to='/buyers' className={'info-link'}>            <div className='home-page-column column1 buyer-container'>
                <h1 className='title-text'>I'm Buying</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div></Link>

            <div id='hiddenFeature' className='home-page-column column2'  style={imageStyleForSale} >
                <Link to={`/properties/${forSalePropId}`}><h1 className='heading-text'>Recently Added!</h1></Link>
            </div>
        </div>

    </div>)
}

export default Home