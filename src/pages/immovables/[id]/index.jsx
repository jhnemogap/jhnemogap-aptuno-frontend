import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ShowPropertyDetails } from "@/components/index";

import { divWithNPharagraphOfLorem } from "@/utils/fakes";
import allData from "@/constants/properties.json";

export default function PropertyDetails() {
  const router = useRouter();
  const [currentProperty, setCurrentProperty] = useState({ id: 0 });

  useEffect(() => {
    let theId = router.query?.id ?? null;
    if (theId) {
      const theProperty = allData.find((item) => item.id === parseInt(theId));
      if (theProperty) setCurrentProperty(theProperty);
      console.info(theProperty);
    }
  }, [router.query.id]);

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      <ShowPropertyDetails property={currentProperty} />

      {divWithNPharagraphOfLorem(3)}
    </main>
  );
}
