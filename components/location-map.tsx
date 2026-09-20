import { ExternalLink, MapPin } from "lucide-react";
import { directionsUrl, mapEmbedUrl, siteConfig } from "@/lib/site";

export function LocationMap() {
  return (
    <section className="location-map" aria-labelledby="location-heading">
      <div className="location-map-copy">
        <div>
          <MapPin aria-hidden="true" />
          <div>
            <p>Primary location</p>
            <h2 id="location-heading">{siteConfig.addressName}</h2>
            <address>
              {siteConfig.addressLines[0]}
              <br />
              {siteConfig.addressLines[1]}
            </address>
          </div>
        </div>
        <a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">
          Get Directions
          <ExternalLink aria-hidden="true" size={15} />
        </a>
      </div>
      <iframe
        title={`Map showing ${siteConfig.addressPlain}`}
        src={mapEmbedUrl}
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
