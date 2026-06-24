import styles from "./Card.module.css";

export default function Card({ item }) {
  return (
    <div className={styles.card}>
      <img
        src={item.image}
        alt={item.name}
      />

      <div className={styles.content}>
        <h2>{item.name}</h2>

        <p>{item.year}</p>

        <h3>⭐ {item.rating}</h3>

        <p>{item.blurb}</p>
      </div>
    </div>
  );
}
