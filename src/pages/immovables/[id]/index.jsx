import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import allData from "@/constants/properties.json";
import { ShowPropertyDetails } from "@/components/index";

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
    <main>
      <ShowPropertyDetails property={currentProperty} />
    </main>
  );
}
