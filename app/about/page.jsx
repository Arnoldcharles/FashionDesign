// app/about/page.jsx
import '../styles/about.css';

export default function AboutPage() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/hero.jpg" alt="Designer" />
        </div>

        <div className="about-text">
          <h1>About FashionDesign</h1>
          <p>
            FashionDesign is a modern fashion studio founded on the belief that style is personal, powerful, and timeless.
            With every stitch, we bring imagination to life — blending classic techniques with modern elegance.
          </p>

          <p>
            Our founder, a visionary designer, has spent years crafting unique pieces for bold individuals who love to express themselves through clothing.
          </p>

          <h2>Our Mission</h2>
          <p>
            To empower confidence, celebrate individuality, and create garments that tell a story.
            Each design is a reflection of art, culture, and soul.
          </p>
        </div>
      </div>
    </section>
  );
}
