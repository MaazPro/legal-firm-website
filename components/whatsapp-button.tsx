import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire with West Adelaide Legal on WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={24} strokeWidth={1.8} />
      <span>WhatsApp</span>
    </a>
  );
}
