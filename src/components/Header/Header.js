import logo from '../../assets/Logo.svg'
import Nav from  '../Nav/Nav'

export default function Header() {
    return (
      <header>
        <img src={logo} alt="logo" />
        <Nav />
      </header>
    );
  }