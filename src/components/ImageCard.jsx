import '../styles/ImageCard.css';
import React, { useRef, useEffect } from 'react'

function ImageCard(props) {
    const canvasRef = useRef(null)
  
    const imgSrc = "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=250&q=60";
    const dim = 250;
    useEffect(() => {
        const canvas = canvasRef.current
        canvas.height = dim;
        canvas.width = dim;
        const context = canvas.getContext('2d')
        
        var img = new Image();
        img.onload = function(){
            context.drawImage(img, 0, 0, dim, dim, 0, 0, dim, dim); 
            context.font = props.fontSize + 'px ' + props.font;
            context.fillStyle = props.color;
            context.fillText(props.title, props.textx, props.texty);
        };
        img.src = imgSrc;
    }, [props])
    
    return (
    <div className='container'>
        <canvas ref={canvasRef} {...props} />
    </div>
    )
}

export default ImageCard;
