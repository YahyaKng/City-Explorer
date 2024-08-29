import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

interface LeafletIconDefault extends L.Icon.Default {
  _getIconUrl?: () => string;
}

const iconDefault = L.Icon.Default.prototype as LeafletIconDefault;

if (iconDefault._getIconUrl) {
  delete iconDefault._getIconUrl;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
