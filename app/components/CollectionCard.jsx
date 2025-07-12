// components/CollectionCard.jsx
import '../styles/home.css';

export default function CollectionCard({ image, title }) {
  return (
    <div className="collection-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
