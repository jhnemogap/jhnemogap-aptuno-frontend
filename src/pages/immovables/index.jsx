import Link from "next/link";
import { routePropertyDetails } from "@/routes/paths";

export default function Immovables() {
  return(
    <div>
      <p>LOS INMUEBLES</p>
      <Link href={routePropertyDetails(100)}>
        <a>Show property #10</a>
      </Link>
    </div>
  );
}
