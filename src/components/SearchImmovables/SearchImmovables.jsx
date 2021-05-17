import { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";

import styles from "./SearchImmovables.module.scss";
import { routeImmovables } from "@/routes/paths";

export function SearchImmovables() {
  const roomOptions = [
    { value: 1, label: "1 habitación" },
    { value: 2, label: "2 habitaciones" },
    { value: 3, label: "3 habitaciones" },
    { value: 4, label: "4 habitaciones" },
  ];
  const regionOptions = [
    { value: "B", label: "Bogotá" },
    { value: "M", label: "Medellín" },
    { value: "L", label: "Lo que sea" }
  ]

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
    <section className={styles.search}>
      <h1 className={styles.title}>
        Busco apartamento o casa en arriendo en Bogotá
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formItemIn}>
          <label htmlFor="region">Sector</label>
          <Select id="select-region" name="region" options={regionOptions} onChange={handleSelectRegion} />
        </div>

        <div className={styles.formItemIn}>
          <label htmlFor="rooms">Número de Habitaciones</label>
          <Select
            id="select-rooms"
            name="rooms"
            options={roomOptions}
            onChange={handleSelectRooms}
            isMulti
            placeholder="Sin restricciones"
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          <p>Buscar</p>
        </button>
      </form>
    </section>
  );
}
