import Logo from './Logo';
import NumResults from './NumResults';
import Search from './Search';

export default function NavBar() {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}
