import { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";

import { routeImmovables } from "@/routes/paths";

import styles from "./SearchImmovables.module.scss";

const regionsConstants = [
  "Chapinero", "Marly", "Parque de la 93", "Zona T", "Calle 85", "Usaquen", "Parque Nacional", "Calle 45", "Chico",
  "Calle 116", "Unilago", "Calle 76", "Virrey"
];

export function SearchImmovables(props) {
  const { variant = false } = props;
  const regionOptions = regionsConstants.map((item) => ({ value: encodeURI(item), label: item }));
  const roomOptions = [
    { value: 1, label: "1 habitación" },
    { value: 2, label: "2 habitaciones" },
    { value: 3, label: "3 habitaciones" },
    { value: 4, label: "4 habitaciones" },
  ];

  const router = useRouter();
  const [regionSelected, setRegionSelected] = useState("");
  const [roomsSelected, setRoomsSelected] = useState([]);

  const handleSelectRegion = ({ value }) => setRegionSelected(value);

  const handleSelectRooms = (_, actionInfo) => {
    if (actionInfo.action === "select-option") {
      setRoomsSelected((prev) => [...prev, actionInfo.option.value]);
      return;
    }
    if (actionInfo.action === "remove-value") {
      setRoomsSelected((prev) => prev.filter((val) => val !== actionInfo.removedValue.value));
      return;
    }
    if (actionInfo.action === "clear") setRoomsSelected([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(routeImmovables(regionSelected, roomsSelected));
  };

  return (
    <section className={variant ? styles.searchVariant : styles.search}>
      <h1 className={styles.title}>
        Busco apartamento o casa en arriendo en Bogotá
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formItemIn}>
          <label htmlFor="region">Sector de la ciudad</label>
          <Select
            id="select-region"
            name="region"
            placeholder="Seleccionar zona"
            options={regionOptions}
            onChange={handleSelectRegion}
          />
        </div>

        <div className={styles.formItemIn}>
          <label htmlFor="rooms">Número de Habitaciones</label>
          <Select
            id="select-rooms"
            name="rooms"
            placeholder="No. habitaciones"
            isMulti
            options={roomOptions}
            onChange={handleSelectRooms}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          <p>Buscar</p>
        </button>
      </form>
    </section>
  );
}
