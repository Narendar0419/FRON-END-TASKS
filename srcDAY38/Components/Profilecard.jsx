function Profilecard(props) {
  return (
    <div style={{
        
          border: "2px solid black",
        padding: "15px",
        margin: "10px",
        width: "250px",
        backgroundColor: "white",
        color:"black",
        display: "inline-block"

    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>

      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Profilecard;