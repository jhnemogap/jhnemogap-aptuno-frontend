import Link from "next/link";

import { PropertyCard } from "@/components/PropertyCard/PropertyCard";
import { routePropertyDetails } from "@/routes/paths";

import styles from "./ResultOfImmovables.module.scss";

export function ResultOfImmovables(props) {
  const { immovables } = props;

  return (
    <section className={styles.results}>
      {immovables.map((item) => (
        <Link href={routePropertyDetails(item.id)} key={`property-${item.id}`}>
          <a>
            <PropertyCard
              id={item.id}
              title={item?.title}
              description={item?.description}
              bedrooms={item?.bedrooms}
              bathrooms={item?.bathrooms}
              area={item?.area}
              pricing={item?.pricing}
              images={item?.images}
            />
          </a>
        </Link>
      ))}
    </section>
  );
}
