import React from "react";
import "./Meme.css";
import { useState } from "react";

export default function Meme() {

    //default text, replace text
    const [meme, setMeme] = useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
    });

    //default image, replace image
    const [newImg, setNewImg] = useState("https://images7.alphacoders.com/121/1210460.jpg");

    //top and bottom text update from inputs
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    //new image file upload
    function handleImageChange(event) {
        setNewImg(URL.createObjectURL(event.target.files[0]))
    }

    //font colour select
    const [color, setColor] = React.useState("white");

    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return (
        <main>
            <div className="form">
                <h5>Enter top text:</h5>
                <h5>Enter bottom text:</h5>
                <input className="input" maxLength={50} placeholder="Top text" type="text"
                    value={meme.topText} name="topText" onChange={handleChange} />

                <input className="input" maxLength={50} placeholder="Bottom Fail" type="text"
                    value={meme.bottomText} name="bottomText" onChange={handleChange} />
                <div>
                    <h6 className="file-upload">Upload new picture:</h6>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="file-upload" />
                </div>
                <div>
                    <h6 className="file-upload">Font Colour:</h6>
                    <div className="colour-choice">
                        <select className="form-select" aria-label="Default select example" value={color}
                            onChange={handleColorChange}>
                            <option value="white">White</option>
                            <option value="yellow">Yellow</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="purple">Purple</option>
                            <option value="pink">Pink</option>
                            <option value="blue">Blue</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="meme">
                <img className="img" src={newImg} alt="default" />
                <div className="text-top" style={{ color }}>{meme.topText}</div>
                <div className="text-bottom" style={{ color }}>{meme.bottomText}</div>
            </div>
        </main>
    );
}