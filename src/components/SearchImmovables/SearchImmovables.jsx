import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Select from "react-select";

import { routeImmovables } from "@/routes/paths";

import styles from "./SearchImmovables.module.scss";
import { getRegions } from "@/redux/regions/regions-actions";

export function SearchImmovables(props) {
  const { variant = false } = props;
  const roomOptions = [
    { value: 1, label: "1 habitación" },
    { value: 2, label: "2 habitaciones" },
    { value: 3, label: "3 habitaciones" },
    { value: 4, label: "4 habitaciones" },
  ];

  const dispatch = useDispatch();
  const router = useRouter();
  const query = router.query;

  const [regionSelected, setRegionSelected] = useState("");
  const [roomsSelected, setRoomsSelected] = useState([]);

  const { regions } = useSelector((state) => state.regionsGS);

  const handleSelectRegion = ({ value }) => setRegionSelected(value);

  const handleSelectRooms = (_, actionInfo) => {
    if (actionInfo.action === "select-option") {
      setRoomsSelected((prev) => [...prev, actionInfo.option]);
      return;
    }
    if (actionInfo.action === "remove-value") {
      setRoomsSelected((prev) => prev.filter((val) => val.value !== actionInfo.removedValue.value));
      return;
    }
    if (actionInfo.action === "clear") setRoomsSelected([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const roomsSelectedValues = roomsSelected.map((item) => item.value).join(",");
    router.push(routeImmovables(regionSelected, roomsSelectedValues));
  };

  useEffect(() => {
    if (regions.length === 0) dispatch(getRegions());
    if (query?.region) setRegionSelected(decodeURI(query.region));
    if (query?.rooms) {
      const roomsQuery = query.rooms.split(",").map((n) => parseInt(n));
      setRoomsSelected(roomOptions.filter((item) => roomsQuery.includes(item.value)));
    }
  }, []);

  return (
    <section className={variant ? styles.searchVariant : styles.search}>
      <h1 className={styles.title}>
        Busco apartamento o casa en arriendo en Bogotá
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formItemIn}>
          <label htmlFor="region">Sector de la ciudad</label>
          <Select
            name="region"
            inputId="select-region"
            placeholder="Seleccionar zona"
            options={regions.map((item) => ({ value: item, label: item }))}
            value={regionSelected ? { value: regionSelected, label: regionSelected } : null}
            onChange={handleSelectRegion}
          />
        </div>

        <div className={styles.formItemIn}>
          <label htmlFor="rooms">Número de Habitaciones</label>
          <Select
            name="rooms"
            inputId="select-rooms"
            placeholder="No. habitaciones"
            isMulti
            options={roomOptions}
            value={roomsSelected}
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
