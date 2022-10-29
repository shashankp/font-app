import '../styles/ImageCard.css';

function ImageCard(props) {

    
    return (
    <div className='container'>
        <img src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Snow" />
        <div className='text'>{props.title}</div>
    </div>
    )
}

export default ImageCard;
