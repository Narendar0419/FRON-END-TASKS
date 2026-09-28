function Button(props) {

  let buttonSize = "";

  if (props.size === "small") {
    buttonSize = "10px 15px";
  } 
  else if (props.size === "medium") {
    buttonSize = "15px 25px";
  } 
  else if (props.size === "large") {
    buttonSize = "20px 35px";
  }

  return (
    <button
      style={{
        backgroundColor: props.color,
        color: "white",
        padding: buttonSize,
        margin: "10px",
        border: "none",
        cursor: "pointer"
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;