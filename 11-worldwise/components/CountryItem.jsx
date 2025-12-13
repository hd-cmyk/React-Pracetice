import styles from "./CountryItem.module.css";
import Flag from "./Flag.jsx";
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <Flag emoji={country.emoji} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
