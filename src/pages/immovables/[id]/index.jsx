import { useRouter } from "next/router";

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Property Details #{id}</div>;
}
