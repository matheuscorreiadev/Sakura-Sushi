import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
    style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
  >
    <MessageCircle className="h-7 w-7" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
