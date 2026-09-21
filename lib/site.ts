export const siteConfig = {
  name: "West Adelaide Legal",
  legalName: "West Adelaide Legal Pty Ltd",
  description:
    "Trusted, compassionate legal support tailored to your needs in Adelaide, South Australia.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.westadelaidelegal.com.au",
  phone: "0410 106 136",
  phoneInternational: "+61 410 106 136",
  phoneHref: "tel:+61410106136",
  // email: "akrishnan@westadelaidelegal.com.au",
  email: "maazmuhammad94@gmail.com",
  addressName: "Spaces @ The Heroic",
  addressLines: ["1–3 Metro Parade", "Mawson Lakes SA 5095"],
  addressPlain: "Spaces @ The Heroic, 1-3 Metro Parade, Mawson Lakes SA 5095",
  location: "Adelaide, South Australia",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/fees-appointments", label: "Fees & Appointments" },
  { href: "/contact", label: "Contact" },
];

export const practiceAreas = [
  { title: "Criminal & Traffic Law", icon: "scale" },
  {
    title: "Family Law & Family Violence",
    note: "Including intervention order matters",
    icon: "users",
  },
  { title: "Migration & Refugee Law", icon: "globe" },
  { title: "Spent Conviction Order Applications", icon: "file" },
  { title: "Human Rights Law", icon: "landmark" },
] as const;

export const appointmentLocations = [
  "Spaces Currie St, Adelaide CBD",
  "Regus Victoria Park",
  "The Heroic, Mawson Lakes",
];

export const whatsappUrl =
  "https://wa.me/61410106136?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20legal%20services%20with%20West%20Adelaide%20Legal.";

export const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Spaces%20%40%20The%20Heroic%2C%201-3%20Metro%20Parade%2C%20Mawson%20Lakes%20SA%205095";

export const mapEmbedUrl =
  "https://www.google.com/maps?q=Spaces%20%40%20The%20Heroic%2C%201-3%20Metro%20Parade%2C%20Mawson%20Lakes%20SA%205095&output=embed";
