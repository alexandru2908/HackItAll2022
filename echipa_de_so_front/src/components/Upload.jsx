import React from "react";
import { Navigate } from "react-router-dom";
import "../style/Upload.css";
import Cart from "./Cart";


class Upload extends React.Component {
    constructor(props) {
        super(props);

    }

    toggleButtons(toggleWay){
        let preview=document.getElementsByClassName("previewButton")[0];
        let upload=document.getElementsByClassName("imageInput")[0];
        let loader=document.getElementsByClassName("containerLoaderMic")[0];
        let output=document.getElementsByClassName("containerOutput")[0];
        let choseText=document.getElementsByClassName("chooseText")[0];
        if(toggleWay){
            preview.style.display="block";
            upload.style.display="none";
        }else{
            preview.style.display="none";
            upload.style.display="block";
            loader.style.display="flex";
            setTimeout(() => {
                output.style.display="flex";
                loader.style.display="none";
                choseText.style.display="flex";
            }, 20000);

        }


    }


    render() {


        return (
            <div className="containerUpload">
                <div className="uploadForm">
                    <label className="uploadLabel"for="file"><div>Generate now your custom PC</div></label>
                    <input className="imageInput"  onClick={() => { this.toggleButtons(1) }
                    
                    }  type="file" name="personal" id="fileInput" accept="image/*"></input>
                

                <button className="previewButton"onClick={async () => {
                    this.toggleButtons(0);
                    
                    const uploadFileEle = document.getElementById("fileInput")
                    // console.log(uploadFileEle.files[0]);

                    const formData = new FormData();
                    formData.append("personal", uploadFileEle.files[0]);


                    let response = await fetch("http://localhost:5000/upload_file", {
                        method: "POST",

                        body: formData
                    })

                    response = await response.json();
                    // console.log(response);
                    let labels = [];
                    labels[0] = response.labels[0].description;
                    labels[1] = response.labels[1].description;
                    labels[2] = response.labels[2].description;


                    for(let i=0;i<3;i++){
                        let res = await fetch("http://localhost:5000/test", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                words: labels
                            })
                        })
                        res = await res.json();
                        console.log(res.url);

                        let images=document.getElementsByClassName("outputImage");
                        let containerImages=document.getElementsByClassName("containerOutput")[0];
                        images[i].src=res.url;
                        containerImages.setAttribute("labels",labels[0] + " " + labels[1] + " " + labels[2]);
                }


                    console.log("sended");




                }}>Send file</button>

            </div>
            </div>


        );
    }


}

export default Upload;