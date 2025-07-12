import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} FashionDesign. All rights reserved.</p>
      <div className="socials">
        <a href="https://instagram.com" target="_blank">Instagram</a>
        <a href="https://pinterest.com" target="_blank">Pinterest</a>
        <a href="https://wa.me/2340000000000" target="_blank">WhatsApp</a>
      </div>
    </footer>
  );
}
