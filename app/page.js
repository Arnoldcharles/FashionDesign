// app/page.jsx
import Hero from "./components/Hero";
import CollectionCard from "./components/CollectionCard";
import "./styles/home.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="intro">
        <h2>Welcome to FashionDesign</h2>
        <p>
          Where art meets elegance. Each piece is handcrafted to bring out your
          inner confidence and beauty.
        </p>
      </section>

      <section className="featured">
        <h2>Featured Designs</h2>
        <div className="featured-grid">
          <CollectionCard image="/images/look1.jpg" title="Spring Bloom" />
          <CollectionCard image="/images/look2.jpg" title="Urban Chic" />
          <CollectionCard image="/images/look3.jpg" title="Evening Elegance" />
        </div>
        <div className="center-btn">
          <a href="/collections" className="view-all">
            View All
          </a>
        </div>
      </section>
    </>
  );
}
