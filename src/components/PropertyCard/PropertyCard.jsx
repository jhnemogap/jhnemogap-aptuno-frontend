import { BiBed, BiBath, BiArea } from "react-icons/bi";

import styles from "./PropertyCard.module.scss";

export function PropertyCard(props) {
  const {
    id,
    title = "Sin título fijo",
    description = "Sin descripción",
    bedrooms = 0,
    bathrooms = 0,
    area = 0,
    images = [],
    pricing = {
      rentalPrice: 0,
      administrativeFee: 0
    }
  } = props;

  const propertyType = description.toLowerCase().includes("casa") ? "Casa" : "Apartamento";
  const priceTotal = new Intl
    .NumberFormat('es-CO', { style: 'currency', currency: 'COP' })
    .format(pricing.rentalPrice + pricing.administrativeFee);


  return (
    <article className={styles.card}>
      {/*<div className={"imagesContainer"}>*/}
      {/*  <img src={images[0] ?? ""} alt={`currentImageProperty${id}`} width={"100%"} />*/}
      {/*</div>*/}

      <div className={styles.details}>
        <p className={styles.type}>{propertyType}</p>

        <ul className={styles.infoIcons}>
          <li className={styles.item}>
            <BiBed size="1.5rem" title="número de habitaciones" className={styles.icon}/>
            <p>{bedrooms}</p>
          </li>
          <li className={styles.item}>
            <BiBath size="1.5rem" title="número de baños" className={styles.icon} />
            <p>{bathrooms}</p>
          </li>
          <li className={styles.item}>
            <BiArea size="1.5rem" title="área en metros cuadrados" className={styles.icon} />
            <p>{area}</p>
          </li>
        </ul>

        <h2>{title}</h2>

        <h3 className={styles.price}>{priceTotal}</h3>
      </div>
    </article>
  );
}