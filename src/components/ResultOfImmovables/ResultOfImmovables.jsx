import { PropertyCard } from "@/components/PropertyCard/PropertyCard";

import styles from "./ResultOfImmovables.module.scss";

export function ResultOfImmovables(props) {
  const { immovables } = props;

  return (
    <section className={styles.results}>
      {immovables.map((item) => (
        <PropertyCard
          key={`property-${item.id}`}
          id={item.id}
          title={item?.title}
          description={item?.description}
          bedrooms={item?.bedrooms}
          bathrooms={item?.bathrooms}
          area={item?.area}
          pricing={item?.pricing}
          images={item?.images}
        />
      ))}
    </section>
  );
}
