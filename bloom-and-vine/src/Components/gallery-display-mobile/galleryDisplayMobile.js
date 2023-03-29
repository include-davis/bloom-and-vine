import { useState, useEffect } from 'react'
import axios from 'axios'



import wedding from '../../Images/weddingPrimary.png'
import ContactDisplay from '../contact-display/contactDisplay'

import './galleryDisplayMobile.css'


const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}

async function getData(category) {
    const QUERY = `/api/${category}`
    const resData = await axios.get(QUERY, options).then(res => {
        return (res.data.data ? res.data.data : []);
    });

    return resData
}

function GalleryCategorySelect (props) {
    return (
        <div className = "categoryBox">
           <img className = "categoryImg" src={props.src} alt={props.text} />
           <h2 className = "categoryText"> {props.text} </h2>
        </div>
    )
}


export default function GalleryDisplayMobile () {
    return(
        <div >
            <h1 id = "GallMobHeader" >Gallery</h1>
            <div id = "categoryList">
                <GalleryCategorySelect src = {wedding} text = "Weddings"/>
                <GalleryCategorySelect src = {wedding} text = "Parties"/>
                <GalleryCategorySelect src = {wedding} text = "Flowers"/>
                <GalleryCategorySelect src = {wedding} text = "Films"/>
            </div>
            <ContactDisplay/>
        </div>


    )

}