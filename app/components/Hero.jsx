// components/Hero.jsx
import '../styles/home.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Elegance in Every Stitch</h1>
        <p>Discover timeless fashion designed with passion and precision.</p>
        <a href="/collections" className="cta-button">View Collections</a>
      </div>
    </section>
  );
}
