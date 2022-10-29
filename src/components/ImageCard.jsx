import '../styles/ImageCard.css';
import React, { useRef, useEffect } from 'react'

function ImageCard(props) {
    const canvasRef = useRef(null)
  
    const imgSrc = "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        var img = new Image();
        img.onload = function(){
            context.drawImage(img,0,0); // Or at whatever offset you like
        };
        img.src = imgSrc;

        context.font = '30px Arial';
        context.fillStyle = "red";
        context.textAlign = "center";
        context.fillText(props.title, canvas.width/2, canvas.height/2);
        
    }, [])
    
    return (
    <div className='container'>
        <canvas ref={canvasRef} {...props} />
    </div>
    )
}

export default ImageCard;
