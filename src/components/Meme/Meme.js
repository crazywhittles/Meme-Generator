import React from "react";
import "./Meme.css";

export default function Meme() {
    
    //default text, replace text
    const [meme, setMeme] = React.useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
    });

    //default image, replace image
    const [newImg, setNewImg] = React.useState("https://images7.alphacoders.com/121/1210460.jpg");

    //top and bottom text update from inputs
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    //new image file upload
    function handleImageChange(event) {
        setNewImg(URL.createObjectURL(event.target.files[0]))
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
                
            </div> 
            <div className="meme">
                <img className="img" src={newImg} alt="default" />
                <div className="text-top">{meme.topText}</div>
                <div className="text-bottom">{meme.bottomText}</div>
            </div>
        </main>
    );
}