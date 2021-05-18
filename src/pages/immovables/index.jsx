import { PropertyCard } from "@/components/index";

export default function Immovables() {
  return(
    <div>
      <PropertyCard
        id={100}
        title={"Casa con 1 cuarto(s), cerca de Chapinero, Marly"}
        description={
          "Apartamento iluminado de 81 mtrs. Cuenta con tres habitaciones con closet, tres baños " +
          "(habitación principal con baño privado), hall de alcobas, cocina inegral , zona de ropas, zona social " +
          "con sala comedor amplia, un parqueadero privado y desposito. El edificio cuenta con ascensor y servicio " +
          "de vigilancia 24 horas. Sobre carrera séptima,cerca a avenida circunvalar y avenida calle 85.\r\n"
        }
        bedrooms={4}
        bathrooms={2}
        area={90}
        pricing={{
          "rentalPrice": 2380000,
          "administrativeFee": 82000
        }}
        images={[
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/948103b9-125e-4c18-8dd2-f27d4b5b8eb8.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/be5d93d2-a224-4d04-9998-97e25926938b.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/787572e4-bb29-4ef2-97c7-29d6ca66768f.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/45b83278-ba91-44ea-8e6d-436e2830caa0.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/9fbff6cd-7ff5-4ee8-843a-1584bb3d2b06.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/fdf5f68e-3df7-4698-80aa-2da90ef3f94c.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/51e647f2-8405-4ebd-884d-7a8af0dc7d5a.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/a6f2385c-7a27-4d96-8364-68dee3b6f568.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/9c6dbf38-6a80-4c36-992f-c6b5980e5de2.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/6eeda51e-7f3e-4fa8-bdd6-3d9d89badf4a.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/024e800b-5019-4a08-b8e6-5b03d0c85196.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/79adc726-4abb-443d-a1e2-3df0aaf2231d.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/f4a64c3f-8eea-4537-9da7-3cf6b73d3981.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/e5ba64a8-995e-4252-bffd-52a0c40be0f4.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/4e6025ed-952e-43bc-8747-0200bd5f44b8.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/6de9ac8e-48d3-4668-aaed-09d948fb30cf.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/80dc1c07-52b3-46fc-b6db-226663617323.jpg",
          "https://storage.googleapis.com/aptuno-assets/properties-images/251/649ee1f4-24b0-4c99-bccf-dd630a765174.jpg"
        ]}
      />
    </div>
  );
}
