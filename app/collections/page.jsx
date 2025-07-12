// app/collections/page.jsx
import '../styles/collections.css';

const collections = [
  { image: '/images/look1.jpg', title: 'Spring Bloom' },
  { image: '/images/look2.jpg', title: 'Urban Chic' },
  { image: '/images/look3.jpg', title: 'Evening Elegance' },
  { image: '/images/look1.jpg', title: 'Summer 2025' },
  { image: '/images/look2.jpg', title: 'Boho Dream' },
  { image: '/images/look3.jpg', title: 'Classic Neutrals' },
];

export default function CollectionsPage() {
  return (
    <section className="collections">
      <h1>Our Collections</h1>
      <p className="subtext">Explore timeless looks, seasonal trends, and one-of-a-kind creations.</p>

      <div className="grid">
        {collections.map((item, i) => (
          <div key={i} className="collection-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="back-link">
        <a href="/">← Back to Home</a>
      </div>
    </section>
  );
}
