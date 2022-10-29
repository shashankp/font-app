import '../styles/ImageCard.css';
import React, { useRef, useEffect } from 'react'

function ImageCard(props) {
    const canvasRef = useRef(null)  
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
        img.src = props.imgsrc;
    }, [props])
    
    return (
    <div className='container'>
        <canvas ref={canvasRef} {...props} />
    </div>
    )
}

export default ImageCard;
