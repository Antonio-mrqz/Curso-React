import { Link } from "react-router-dom"
import React, { useRef, useState} from "react";

import Camara from "react-webcam"

//npm i react-webcam
const Webcam = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const handleStartCaptureClick = React.useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStopCaptureClick = React.useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleDownload = React.useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "react-webcam-stream-capture.webm";
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    }, [recordedChunks]);
  return (
    <>
        <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
           <li className="breadcrumb-item">
             <Link to="/utiles">Útiles</Link>
           </li>
           <li className="breadcrumb-item active" aria-current="page">
             react-swipeable-list
           </li>
         </ol>
       </nav>
       <hr />
       <h1>Webcam</h1>
       <hr />
       <Camara audio={true} ref={webcamRef}/>

        {capturing ? (
            <button className="btn btn-danger" onClick={handleStopCaptureClick}>
                Detener captura
            </button>
        ):(
            <button className="btn btn-success" onClick={handleStartCaptureClick}>
                Hacer captura
            </button>
        )}
        {recordedChunks.length > 0 && (
                   
            <button className='btn btn-warning' onClick={handleDownload}>Descargar</button>
                )}

        
    </>
  )
}

export default Webcam