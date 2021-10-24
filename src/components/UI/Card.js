import "./Card.css";

function Card(props){
    const customClass="card "+props.className;
    return ( <div className={customClass}>
        {props.children}
    </div>);
}

export default Card;