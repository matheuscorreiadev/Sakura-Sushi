import { Button } from "@/components/ui/button";
import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroSushi from "@/assets/hero-sushi.jpg";
import dishSashimi from "@/assets/dish-sashimi.jpg";
import dishCombinado from "@/assets/dish-combinado.jpg";
import dishTemaki from "@/assets/dish-temaki.jpg";
import aboutRestaurant from "@/assets/about-restaurant.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const specialties = [
  { img: dishSashimi, name: "Sashimi Premium", desc: "Cortes nobres de atum e salmão selecionados diariamente." },
  { img: dishCombinado, name: "Combinado Especial", desc: "Seleção do chef com niguiris, uramakis e hossomakis." },
  { img: dishTemaki, name: "Temaki Artesanal", desc: "Cones de alga nori crocante recheados na hora." },
];

const gallery = [g1, g2, g3, g4, g5, g6];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-background/40 border-b border-border/30">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <a href="#" className="font-serif text-xl tracking-wider">
            <span className="gold-text">桜</span> <span className="ml-1">Sakura Sushi</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#especialidades" className="hover:text-foreground transition-colors">Especialidades</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#galeria" className="hover:text-foreground transition-colors">Galeria</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={heroSushi}
          alt="Sushi premium Sakura"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="font-jp mb-6 text-sm tracking-[0.4em] text-accent">桜 寿司</p>
          <h1 className="mb-6 font-serif text-6xl font-light leading-none text-balance md:text-8xl">
            Sakura <span className="italic gold-text">Sushi</span>
          </h1>
          <div className="mx-auto mb-8 h-px w-24 bg-accent/60" />
          <p className="mb-12 font-serif text-xl font-light italic text-muted-foreground md:text-2xl">
            Tradição japonesa, sabor incomparável
          </p>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer"><Button
            size="lg"
            className="rounded-none border border-accent bg-transparent px-10 py-6 text-sm uppercase tracking-[0.25em] text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Fazer Reserva
          </Button></a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
          Role para descobrir
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <p className="font-jp mb-4 text-xs tracking-[0.4em] text-accent">特別料理</p>
            <h2 className="font-serif text-5xl font-light md:text-6xl">Especialidades</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-accent/60" />
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {specialties.map((s) => (
              <article key={s.name} className="group">
                <div className="mb-6 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mb-3 font-serif text-2xl">{s.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-32 px-6 bg-card/30">
        <div className="container mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden">
            <img
              src={aboutRestaurant}
              alt="Ambiente do restaurante Sakura Sushi"
              width={1280}
              height={1024}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="font-jp mb-4 text-xs tracking-[0.4em] text-accent">私たちについて</p>
            <h2 className="mb-8 font-serif text-5xl font-light leading-tight">
              Três gerações de <em className="gold-text not-italic">tradição</em>
            </h2>
            <div className="mb-8 h-px w-16 bg-accent/60" />
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Há mais de quarenta anos, a família Tanaka traz para o Brasil a verdadeira essência
              da culinária japonesa. Cada prato é preparado com técnicas transmitidas de mestre
              para discípulo, respeitando os rituais centenários da gastronomia nipônica.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Nossos peixes nobres, wasabi fresco e arroz koshihikari são importados diretamente
              de Tóquio, garantindo uma experiência autêntica e incomparável a cada visita.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <p className="font-jp mb-4 text-xs tracking-[0.4em] text-accent">ギャラリー</p>
            <h2 className="font-serif text-5xl font-light md:text-6xl">Galeria</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-accent/60" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="overflow-hidden aspect-square group">
                <img
                  src={src}
                  alt={`Prato ${i + 1}`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="contato" className="py-32 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <p className="font-jp mb-4 text-xs tracking-[0.4em] text-accent">場所と時間</p>
            <h2 className="font-serif text-5xl font-light md:text-6xl">Visite-nos</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-accent/60" />
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-6 w-6 text-accent" strokeWidth={1.2} />
              <h3 className="mb-3 font-serif text-xl">Endereço</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Rua das Cerejeiras, 432<br />Jardins, São Paulo — SP
              </p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-4 h-6 w-6 text-accent" strokeWidth={1.2} />
              <h3 className="mb-3 font-serif text-xl">Horários</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Terça a Domingo<br />19h00 — 23h30
              </p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto mb-4 h-6 w-6 text-accent" strokeWidth={1.2} />
              <h3 className="mb-3 font-serif text-xl">Reservas</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                +55 11 99999-9999<br />reservas@sakurasushi.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="font-serif text-lg tracking-wider">
            <span className="gold-text">桜</span> Sakura Sushi
          </div>
          <div className="flex gap-6">
            <a href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-accent">
              <Instagram className="h-5 w-5" strokeWidth={1.2} />
            </a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-accent">
              <Facebook className="h-5 w-5" strokeWidth={1.2} />
            </a>
          </div>
          <p className="text-xs tracking-wider text-muted-foreground">
            © 2026 Sakura Sushi · Todos os direitos reservados
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
