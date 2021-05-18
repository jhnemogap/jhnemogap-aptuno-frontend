import { PropertyCard } from "@/components/PropertyCard/PropertyCard";
import { copCurrencyToString } from "@/utils/numbersAndCurrencies";
import { timestampToLocalString } from "@/utils/times";

export function ShowPropertyDetails(props) {
  const { property } = props;

  const setMapLocation = ({ latitude, longitude }) => {
    const src = "https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=es" +
      `&amp;q=${latitude},${longitude}` + "&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
    return `<iframe src=${src} width='100%' height='100%' loading='lazy' frameborder='0' />`;
  };

  return (
    <section>
      <PropertyCard
        id={property.id}
        title={property?.title}
        description={property?.description}
        bedrooms={property?.bedrooms}
        bathrooms={property?.bathrooms}
        area={property?.area}
        pricing={property?.pricing}
        images={property?.images}
        shadow={false}
      />

      <aside>
        <div>
          <h4>Canon de arrendamiento</h4>
          <p>{copCurrencyToString(property.pricing.rentalPrice)}</p>
          <h4>Valor de la administración</h4>
          <p>{copCurrencyToString(property.pricing.administrativeFee)}</p>
        </div>

        <div>
          <h6>Creado el:</h6>
          <p><small>{timestampToLocalString(property.createdAt)}</small></p>
        </div>

        <div>
          <h6>Actualización:</h6>
          <p><small>{timestampToLocalString(property.updatedAt)}</small></p>
        </div>
      </aside>

      {property?.location?.latitude && (
        <div dangerouslySetInnerHTML={{ __html: setMapLocation(property.location) }} />
      )}
    </section>
  );
}
