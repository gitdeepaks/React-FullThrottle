import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  if (!country) return null;

  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
