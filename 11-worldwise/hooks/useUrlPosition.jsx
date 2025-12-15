import { useSearchParams } from "react-router-dom";
function normalizeLng(lng) {
  return ((((lng + 180) % 360) + 360) % 360) - 180;
}
function useUrlPosition() {
  const [searchParams] = useSearchParams(); // Remove setSearchParams if not used

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [lat, lng];
}

export default useUrlPosition;
