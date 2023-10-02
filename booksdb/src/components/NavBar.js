import Logo from './Logo';
import Search from './Search';

export default function NavBar({ children }) {
  return (
    <nav className="navbar">
      <Logo />

      {children}
    </nav>
  );
}
