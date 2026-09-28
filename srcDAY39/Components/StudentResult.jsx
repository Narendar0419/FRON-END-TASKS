import useState from "react"

function StudentReact ()
const [Marks, setMarks]= useState (30)
{
   return(
<div>
    <h2>Student Result </h2>
    <h3> Marks : {Marks}</h3>   

    {Marks >=90 && Marks <= 100   && <p> Exccelent </p> }

    { Marks >= 60 && Marks <= 90  &&  <p>  Passed </p> }
     
     { Marks <=40 && <p> Failed </p> }
</div>
   )

}
export default StudentResult;