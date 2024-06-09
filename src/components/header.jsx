import NavBar from "./pages/navbar.jsx";
import CartWidget from "./pages/carwidget.jsx";
function Header() {
  return (
    <header>
      <h1>Titulo</h1>
      <CartWidget />
      <NavBar isHeader={true} />
    </header>
  );
}

export default Header;
