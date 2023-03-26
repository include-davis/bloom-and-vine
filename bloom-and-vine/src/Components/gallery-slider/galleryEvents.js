import { useState, useEffect } from 'react';
import axios from 'axios';

import GalleryText from './Components/galleryText/galleryText';
import './galleryEvents.css'

// Use Homepage's IG Slider for reference

/*
    1) Left and Right Buttons
    2) Fetch data from gallery endpoints provided through props (galleryButtons)
    3) Pass data into GalleryImage component through props
    4) Figure out which elements to apply primary, secondary, or background class
*/

/* 
    [index values]: [bk_idx1, scnd_idx1, prim_idx, scnd_idx2, bk_idx2]
    [new idx]: [bk_idx2, bk_idx1, scnd_idx1, prim_idx, scnd_idx2]

    Index 2 (Primary) --> Use for dots

    Take images[idx]?.url & images[idx]?.altText --> pass into each component

    background1: currentIdx - 2 < 0 ? len(array) - 2 + currentIdx: currentIdx - 2;
    secondary1: currentIdx - 1 < 0 ? len(array) - 1 + currentIdx: currentIdx - 1;

    primary = currentIdx;

    secondary2: currentIdx + 1 > len(array) - 1 ? currentIdx + 1 - len(array) : currentIdx + 1;
    background2: currentIdx + 2 > len(array) - 1 ? currentIdx + 2 - len(array) : currentIdx + 2;


    const [primary, setPrimary] = useState(0)

    <button onClick = {() => {primaryIdx = primaryIdx + 1 < len(IMGARRAY) ? primaryIdx : 0}}>
        <div>
            white circle background
            <img>
                vector
            </img>
        </div>
    <button/>

    right: primaryIdx = primaryIdx + 1 < len(IMGARRAY) ? primaryIdx : 0
    left: primaryIdx = primaryIdx - 1 > 0 ? primaryIdx : 4

    5 > 4

    Index 0 (pic 1): 
        background1: Index 3 (pic 4)
        secondary1: Index 4 (pic 5)

        primary: Index 0 (pic 1)

        secondary2: Index 1 (pic 2)
        background2: Index 2 (pic 3)

    Index 4 (pic 5):
        background: Index 2 (pic 3)
        secondary: Index 3 (pic 4)

        primary: Index 4 (pic 5)

        5 > 4 --> 5 - 5 = 0

        secondary: Index 0 (pic 1)

        6 > 4 --> 6 - 5 = 1

        background: Index 1 (pic 2)

    Index 3 (pic 4):
        background: Index 1 (pic 2)
        secondary: Index 2 (pic 3)

        primary: Index 3 (pic 4)

        4 > 4 --> 4

        secondary: Index 4 (pic 5)

        5 > 4 --> 5 - 5 = 0 

        background: Index 0 (pic 1)

    Index 2 (pic 3):
        background: Index 0 (pic 1)
        secondary: Index 1 (pic 2)
        
        primary: Index 2 (pic 3)
        
        secondary: Index 3 (pic 4)
        background: Index 4 (pic 5)

    Index 1 (pic 2):
        background: Index 4 (pic 5)
        secondary:  Index 0 (pic 1)

        primary: Index 1 (pic 2)

        secondary:  Index 2 (pic 3)
        background: Index 3 (pic 4)
*/


function GalleryEvent (props) {
    const { data } = props;


    return (
        <div>
           DO STUFF
        </div>
    )
}

export default function GalleryEvents(props) {
    const { data } = props;

    return (
        <div className='gallery-events-container'>
            {data[0] && <GalleryEvent data={data[0]} />}
            {data[1] && <GalleryEvent data={data[1]} />}
        </div>
    )
}
