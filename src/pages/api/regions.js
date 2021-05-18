import allData from "@/constants/properties.json";

export default (req, res) => {
  switch (req.method) {
    case "GET": {
      const currentRegions = [...new Set(allData.map((item) => item?.regions).flat())];
      res.status(200).json(currentRegions);
    }
  }
}
