"use client";
import { Space_Mono, Inter } from "next/font/google";
import content from "../data/content.json";

const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const sans = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], variable: "--font-sans" });

const INK = "#0A0A0A";
const CHARCOAL = "#171717";
const GOLD = "#A16207";
const PAPER = "#FAFAFA";
const STONE = "#E5E5E5";
const MUTED = "#525252";

const HERO_PHOTO = "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=1800&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${mono.variable} ${sans.variable} min-h-screen`} style={{ backgroundColor: PAPER, color: INK, fontFamily: "var(--font-sans)" }}>
      <style jsx global>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes typewriter { from { width: 0; } to { width: 100%; } }
        .slide-up { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .mono-text { font-family: var(--font-mono); }
        .sans-text { font-family: var(--font-sans); }
        .grid-bg { background-image: linear-gradient(to right, ${INK}08 1px, transparent 1px), linear-gradient(to bottom, ${INK}08 1px, transparent 1px); background-size: 64px 64px; }
      `}</style>

      <header style={{ backgroundColor: PAPER, borderBottom: `1px solid ${INK}` }}>
        <div className="text-center py-2 mono-text text-[10px] uppercase tracking-[0.6em]" style={{ backgroundColor: INK, color: PAPER }}>
          [MISO] · GLENDALE · 3839 FOOTHILL BLVD · 197 REVIEWS
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="text-4xl font-black tracking-tighter" style={{ color: INK }}>MISO</div>
            <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: GOLD }}>/ japanese-american /</div>
          </div>
          <div className="hidden md:flex items-center gap-10 mono-text text-[10px] uppercase tracking-[0.3em]">
            <a href="#about" style={{ color: INK }}>[01] about</a>
            <a href="#menu" style={{ color: INK }}>[02] menu</a>
            <a href="#reviews" style={{ color: INK }}>[03] reviews</a>
            <a href="#visit" style={{ color: INK }}>[04] visit</a>
          </div>
          <a href={c.hero.ctaLink} className="mono-text px-5 py-3 text-xs uppercase tracking-widest font-bold" style={{ backgroundColor: INK, color: PAPER }}>→ CALL</a>
        </nav>
      </header>

      <section className="py-20 md:py-28 grid-bg relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="slide-up max-w-5xl">
            <div className="mono-text text-[10px] uppercase tracking-[0.5em] mb-8 flex items-center gap-4" style={{ color: GOLD }}>
              <span style={{ width: 32, height: 1, backgroundColor: GOLD, display: "inline-block" }} />
              {c.hero.eyebrow}
            </div>
            <h1 className="text-7xl md:text-[11rem] leading-[0.85] font-black tracking-[-0.05em] mb-10" style={{ color: INK }}>
              {c.hero.heading}
            </h1>
            <div className="grid md:grid-cols-12 gap-12 mt-12">
              <div className="md:col-span-7">
                <p className="text-xl leading-relaxed" style={{ color: CHARCOAL, fontWeight: 300 }}>{c.hero.subheading}</p>
                <div className="flex flex-wrap items-center gap-10 mt-10">
                  <a href={c.hero.ctaLink} className="mono-text px-8 py-4 text-sm uppercase tracking-widest font-bold inline-flex items-center gap-3" style={{ backgroundColor: INK, color: PAPER }}>{c.hero.ctaText} →</a>
                  <div className="mono-text">
                    <div className="text-3xl font-bold" style={{ color: GOLD }}>★ 4.4 / 197</div>
                    <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: MUTED }}>reviews · foothill blvd</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="overflow-hidden" style={{ aspectRatio: "4/5", border: `1px solid ${INK}` }}>
                  <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center", filter: "contrast(1.05) saturate(0.85)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24" style={{ backgroundColor: INK, color: PAPER }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="mono-text text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>[01] {c.about.label}</div>
            <h2 className="text-5xl md:text-7xl leading-[0.95] font-black tracking-[-0.04em]" style={{ color: PAPER }}>{c.about.heading}</h2>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: STONE, fontWeight: 300 }}>
              {c.about.paragraphs.map((p: string, i: number) => (
                <p key={i} className="grid md:grid-cols-12 gap-4">
                  <span className="mono-text text-[10px] uppercase tracking-widest md:col-span-1 pt-2.5" style={{ color: GOLD }}>0{i + 1}</span>
                  <span className="md:col-span-11">{p}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24" style={{ backgroundColor: PAPER }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 pb-6" style={{ borderBottom: `2px solid ${INK}` }}>
            <div>
              <div className="mono-text text-[10px] uppercase tracking-[0.5em] mb-3" style={{ color: GOLD }}>[02] the menu</div>
              <h2 className="text-5xl md:text-7xl leading-tight font-black tracking-[-0.04em]" style={{ color: INK }}>What's served.</h2>
            </div>
            <div className="hidden md:block mono-text text-xs uppercase tracking-widest" style={{ color: MUTED }}>06 items / dine in · takeout</div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {c.services.map((s: any, i: number) => (
              <article key={i} className="py-8 grid grid-cols-12 gap-4 items-baseline" style={{ borderBottom: `1px solid ${INK}20` }}>
                <div className="col-span-1 mono-text text-xs uppercase tracking-widest" style={{ color: GOLD }}>0{i + 1}</div>
                <div className="col-span-7">
                  <div className="text-xl md:text-2xl font-bold tracking-tight mb-2" style={{ color: INK }}>{s.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: MUTED, fontWeight: 300 }}>{s.description}</div>
                </div>
                <div className="col-span-4 mono-text text-xl text-right font-bold" style={{ color: INK }}>{s.price}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24" style={{ backgroundColor: STONE }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="mono-text text-[10px] uppercase tracking-[0.5em] mb-3" style={{ color: GOLD }}>[03] 197 reviews</div>
            <h2 className="text-5xl md:text-7xl leading-tight font-black tracking-[-0.04em]" style={{ color: INK }}>Said about us.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: INK }}>
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-9" style={{ backgroundColor: PAPER }}>
                <div className="mono-text text-[10px] uppercase tracking-widest mb-5" style={{ color: GOLD }}>// review {String(i + 1).padStart(2, "0")}</div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: INK, fontSize: 18 }}>★</span>)}
                </div>
                <blockquote className="text-base leading-[1.75] mb-7" style={{ color: CHARCOAL, fontWeight: 300 }}>"{r.text}"</blockquote>
                <figcaption>
                  <div className="text-lg font-bold tracking-tight" style={{ color: INK }}>{r.name}</div>
                  <div className="mono-text text-[10px] uppercase tracking-widest mt-1" style={{ color: GOLD }}>{r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: PAPER }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="mono-text text-[10px] uppercase tracking-[0.5em] mb-3" style={{ color: GOLD }}>[04] visit</div>
            <h2 className="text-5xl md:text-7xl leading-[0.95] font-black tracking-[-0.04em] mb-10" style={{ color: INK }}>Come by.</h2>
            <dl className="space-y-7">
              <div>
                <dt className="mono-text text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: GOLD }}>// address</dt>
                <dd className="text-lg" style={{ color: INK }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="mono-text text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: GOLD }}>// phone</dt>
                <dd className="text-3xl font-black mono-text"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: INK }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="mono-text text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: GOLD }}>// hours</dt>
                <dd>
                  <table className="mono-text text-sm" style={{ color: INK }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day} style={{ borderBottom: `1px dashed ${INK}30` }}>
                          <td className="pr-10 py-2 uppercase" style={{ fontWeight: 700 }}>{day.slice(0, 3)}</td>
                          <td className="py-2">{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-7 overflow-hidden" style={{ border: `1px solid ${INK}`, minHeight: 500 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="580" style={{ border: 0, filter: "grayscale(0.4)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-14 px-6" style={{ backgroundColor: INK, color: PAPER }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-baseline justify-between gap-6">
          <div>
            <div className="text-4xl font-black tracking-tighter">MISO</div>
            <div className="mono-text text-[10px] uppercase tracking-widest mt-2" style={{ color: GOLD }}>// japanese-american · 3839 foothill · glendale</div>
          </div>
          <div className="mono-text text-[10px] uppercase tracking-widest opacity-60">© {new Date().getFullYear()} miso · all rights reserved</div>
        </div>
      </footer>
    </main>
  );
}
