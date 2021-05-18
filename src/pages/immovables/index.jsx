import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ResultOfImmovables } from "@/components/index";
import allData from "@/constants/properties.json";

export default function Immovables() {
  const router = useRouter();
  const [filters, setFilters] = useState(null);
  const [immovables, setImmovables] = useState([]);

  useEffect(() => {
    let region = "", rooms = [];
    if (router.query?.region) region = router.query.region;
    if (router.query?.rooms) rooms = router.query.rooms.split(",").map((n) => parseInt(n));
    setFilters({ region, rooms });
  }, [router.query?.region, router.query?.rooms]);

  useEffect(() => {
    if (filters !== null) {
      const dataFiltered = allData
        .filter((item) => filters.rooms.length ? filters.rooms.includes(item.bedrooms) : true)
        .filter((item) => filters.region ? item?.regions.includes(filters.region) : true);
      setImmovables(dataFiltered);
    }
  }, [filters]);

  return(
    <main className={"immovables"}>
      <ResultOfImmovables immovables={immovables} />
    </main>
  );
}
