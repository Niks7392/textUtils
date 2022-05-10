import React, {useState} from 'react'


export default function Textform(props) {

    let myStyle = {
        // color: "white",
        // backgroundColor: "black"
    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('myBox').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); 
        element.click();
        props.showAlert("downloading file", "success")
      }

    const handleUpClick = ()=>{
        // console.log(`button was clicked ${text}`)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    }
    const handleLoClick = ()=>{
        // console.log(`button was clicked ${text}`)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success")
    }
    const handleClClick = ()=>{
        console.log(`clearclick`)
        let newText = "";
        setText(newText)
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard CTRL+V to paste", "success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("removed extra spaces", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    // setText("New Text")
    return (
        <>
        <div className='container my-3' style={myStyle}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange= {handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={downloadTxtFile}>download in .txt</button>
        </div>
        <div className="container my-3" style={myStyle}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to Preview"}</p>
        </div>

        </>
        
    )
}
