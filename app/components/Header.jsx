import Link from 'next/link';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">FashionDesign</div>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
