import { divWithNPharagraphOfLorem } from "@/utils/fakes";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {divWithNPharagraphOfLorem(6)}
    </div>
  );
}
