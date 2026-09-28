function Products ()
const isavailable = true ;
{
    return(
        <div>
            <p>MOBILE PHONE</p>
            {isavailable && <p> Availablenow </p>}
        </div>
    )
}
export default Products ;