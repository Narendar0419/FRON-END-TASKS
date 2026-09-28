function Card(props){
     return ( <div className="card"> 
    <h2>{props.title}</h2> 
    <div className="card-content"> 
    {props.children} </div> 
    <p className="footer">{props.footer}</p> 
    </div> ); }
    export default Card;