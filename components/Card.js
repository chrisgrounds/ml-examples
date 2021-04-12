import styles from '../styles/Home.module.css'

const Card = ({ title, desc, href, className }) => (
  <a href={href} className={`${styles.card} ${className}`}>
    <h3>{title}</h3>
    {desc && <p>{desc}</p>}
  </a>
);

export default Card;
