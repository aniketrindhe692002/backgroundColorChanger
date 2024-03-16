import React from 'react'
import { useState } from 'react'
import './App.css'

function ColorChanger() {

    const [color, setColor] = useState("black");
    return (
        <>
            <div className='myScreen' style={{backgroundColor:color}}>
                <div className='colorsDiv'>
                    <div onClick={() => setColor("red")} className='colorEle red'>Red</div>
                    <div onClick={() => setColor("green")} className='colorEle green'>Green</div>
                    <div onClick={() => setColor("blue")} className='colorEle blue'>Blue</div>
                    <div onClick={() => setColor("olive")} className='colorEle olive'>Olive</div>
                    <div onClick={() => setColor("gray")} className='colorEle gray'>Gray</div>
                    <div onClick={() => setColor("yellow")} className='colorEle yellow'>Yellow</div>
                    <div onClick={() => setColor("pink")} className='colorEle pink'>Pink</div>
                    <div onClick={() => setColor("purple")} className='colorEle purple'>Purple</div>
                    <div onClick={() => setColor("lavender")} className='colorEle lavender'>Lavender</div>
                    <div onClick={() => setColor("white")} className='colorEle white'>White</div>
                    <div onClick={() => setColor("black")} className='colorEle black'>Black</div>
                </div>
            </div>
        </>
    )
}

export default ColorChanger
