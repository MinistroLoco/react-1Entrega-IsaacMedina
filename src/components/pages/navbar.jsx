import CartWidget from "./carwidget.jsx";

function NavBar(props) {

  console.log(props)

  if (props.isHeader){
    return (   
       <nav>
         <a href="#">home</a>
         <a href="#">productos</a>
         <a href="#">contactos</a>
         <>
         <CartWidget />
         </>
       </nav>
       
    )
 } else {
    return (
       <nav>
         <a href="#">terminos y condiciones</a>
         <a href="#">F.A.Q</a>
         <a href="#">contactos</a>
       </nav>
    )
  }
}


export default NavBar;