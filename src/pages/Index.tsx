import { useState } from "react";
import Icon from "@/components/ui/icon";

const PORTFOLIO_IMAGES = [
  {
    id: 1,
    title: "Воин тьмы",
    category: "Фэнтези",
    img: "https://cdn.poehali.dev/projects/1a430d9f-b2a0-4d53-b3f6-bd13b8d16ec2/files/0baf322a-d25b-4111-8438-fe95f4a763e3.jpg",
    price: "249 ₽",
  },
  {
    id: 2,
    title: "Коллекция героев",
    category: "Персонажи",
    img: "https://cdn.poehali.dev/projects/1a430d9f-b2a0-4d53-b3f6-bd13b8d16ec2/files/c1dd444a-4b66-4f9c-bac1-95c4febcca1f.jpg",
    price: "349 ₽",
  },
  {
    id: 3,
    title: "Неоновый стиль",
    category: "Современный",
    img: "https://cdn.poehali.dev/projects/1a430d9f-b2a0-4d53-b3f6-bd13b8d16ec2/files/6652c019-30f8-4b58-bd4b-1304e7c897db.jpg",
    price: "199 ₽",
  },
  {
    id: 4,
    title: "Элитный рыцарь",
    category: "Фэнтези",
    img: "https://cdn.poehali.dev/projects/1a430d9f-b2a0-4d53-b3f6-bd13b8d16ec2/files/0baf322a-d25b-4111-8438-fe95f4a763e3.jpg",
    price: "299 ₽",
  },
  {
    id: 5,
    title: "Кибер-охотник",
    category: "Sci-Fi",
    img: "https://cdn.poehali.dev/projects/1a430d9f-b2a0-4d53-b3f6-bd13b8d16ec2/files/6652c019-30f8-4b58-bd4b-1304e7c897db.jpg",
    price: "279 ₽",
  },
  {
    id: 6,
    title: "Лесной маг",
    category: "Фэнтези",
    img: "https://cdn.poehali.dev/projects/1a430d9f-b2a0-4d53-b3f6-bd13b8d16ec2/files/c1dd444a-4b66-4f9c-bac1-95c4febcca1f.jpg",
    price: "229 ₽",
  },
];

const SERVICES = [
  {
    icon: "Brush",
    title: "Кастомный скин",
    desc: "Уникальный дизайн по вашим пожеланиям. Полное воплощение идеи в пикселях.",
    price: "от 199 ₽",
    color: "green",
  },
  {
    icon: "Layers",
    title: "Пакет скинов",
    desc: "3-5 скинов в едином стиле. Идеально для кланов и серверов.",
    price: "от 499 ₽",
    color: "gold",
  },
  {
    icon: "Crown",
    title: "VIP-коллекция",
    desc: "Эксклюзивная серия из 10 скинов с анимированными деталями и уникальной концепцией.",
    price: "от 1490 ₽",
    color: "green",
  },
  {
    icon: "RefreshCw",
    title: "Редизайн скина",
    desc: "Обновим ваш старый скин: улучшим детали, цветовую схему и текстуры.",
    price: "от 99 ₽",
    color: "gold",
  },
];

const TEAM = [
  {
    name: "Алексей «PixelKing»",
    role: "Арт-директор",
    exp: "5 лет опыта",
    skins: "2400+ скинов",
    emoji: "👑",
  },
  {
    name: "Мария «BlockArtist»",
    role: "Главный дизайнер",
    exp: "3 года опыта",
    skins: "1200+ скинов",
    emoji: "🎨",
  },
  {
    name: "Дмитрий «CubeWizard»",
    role: "Специалист по эффектам",
    exp: "4 года опыта",
    skins: "1800+ скинов",
    emoji: "✨",
  },
];

const REVIEWS = [
  {
    name: "Кирилл М.",
    rating: 5,
    text: "Заказал скин воина — получил шедевр. Детали проработаны до каждого пикселя. Сервер просто в восторге!",
    date: "15 апреля 2026",
    verified: true,
  },
  {
    name: "Настя_PVP",
    rating: 5,
    text: "Брала пакет для клана — 5 скинов за 2 дня. Все в едином стиле, ребята довольны. Буду заказывать ещё.",
    date: "10 апреля 2026",
    verified: true,
  },
  {
    name: "SteveCraft",
    rating: 4,
    text: "Хороший уровень работ. Немного подольше ждал, зато результат стоит того. Рекомендую студию всем.",
    date: "3 апреля 2026",
    verified: true,
  },
  {
    name: "Валентина К.",
    rating: 5,
    text: "Подарила скин сыну на день рождения — он был в шоке! Качество на высоте, оплата прошла легко.",
    date: "28 марта 2026",
    verified: true,
  },
  {
    name: "Игорь_Dark",
    rating: 5,
    text: "Быстро, красиво, профессионально. Скин в стиле Dark Fantasy получился лучше, чем я представлял.",
    date: "20 марта 2026",
    verified: false,
  },
  {
    name: "Арина С.",
    rating: 4,
    text: "Всё супер, но хотелось бы чуть больше вариантов цветовой палитры на выбор. Скин в итоге классный!",
    date: "12 марта 2026",
    verified: true,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= count ? "var(--pf-gold)" : "var(--pf-stone)" }}>
          ★
        </span>
      ))}
    </div>
  );
}

function CubeDecor({
  size = 48,
  rotate = 0,
  opacity = 0.15,
  className = "",
  style: extraStyle = {},
}: {
  size?: number;
  rotate?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        border: "2px solid var(--pf-green)",
        opacity,
        transform: `rotate(${rotate}deg)`,
        position: "absolute",
        pointerEvents: "none",
        ...extraStyle,
      }}
    />
  );
}

export default function Index() {
  const [orderForm, setOrderForm] = useState({ name: "", discord: "", type: "", desc: "" });
  const [orderSent, setOrderSent] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Все");
  const [menuOpen, setMenuOpen] = useState(false);

  const filters = ["Все", "Фэнтези", "Sci-Fi", "Персонажи", "Современный"];
  const filtered =
    activeFilter === "Все"
      ? PORTFOLIO_IMAGES
      : PORTFOLIO_IMAGES.filter((p) => p.category === activeFilter);

  const avgRating = (
    REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length
  ).toFixed(1);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOrderSent(true);
  }

  return (
    <div className="min-h-screen pixel-grid" style={{ background: "var(--pf-bg)" }}>

      {/* ─── NAVBAR ─── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: "rgba(13,17,23,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--pf-border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", color: "var(--pf-text)" }}
          >
            <span
              style={{
                display: "inline-block", width: 20, height: 20,
                background: "var(--pf-green)", marginBottom: 2,
              }}
            />
            PIXEL<span style={{ color: "var(--pf-green)" }}>FORGE</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              ["Услуги", "services"],
              ["Портфолио", "portfolio"],
              ["Команда", "team"],
              ["Отзывы", "reviews"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="nav-link"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, color: "var(--pf-text-muted)" }}
              >
                {label}
              </button>
            ))}
            <button onClick={() => scrollTo("order")} className="btn-primary" style={{ padding: "8px 24px", fontSize: 13 }}>
              Заказать скин
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--pf-text)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div
            style={{ background: "var(--pf-surface)", borderTop: "1px solid var(--pf-border)", padding: "16px 24px" }}
            className="flex flex-col gap-4 md:hidden"
          >
            {[["Услуги", "services"], ["Портфолио", "portfolio"], ["Команда", "team"], ["Отзывы", "reviews"]].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "var(--pf-text-muted)", textAlign: "left", fontSize: 15 }}
              >
                {label}
              </button>
            ))}
            <button onClick={() => scrollTo("order")} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Заказать скин
            </button>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="hero" style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <CubeDecor size={200} rotate={15} opacity={0.06} className="animate-float" style={{ top: 80, right: "8%" }} />
        <CubeDecor size={120} rotate={-20} opacity={0.08} className="animate-float2" style={{ top: 200, right: "18%" }} />
        <CubeDecor size={64} rotate={40} opacity={0.1} className="animate-float3" style={{ top: 300, left: "5%" }} />
        <CubeDecor size={300} rotate={8} opacity={0.04} style={{ bottom: -80, left: "50%" }} />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="pf-badge mb-6" style={{ display: "inline-block" }}>
              🎮 Студия скинов #1 в России
            </div>
            <h1 className="section-title" style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1.05, marginBottom: 24 }}>
              ТВОЙ СКИН —<br />
              <span style={{ color: "var(--pf-green)" }}>ТВОЯ ЛЕГЕНДА</span>
            </h1>
            <p style={{ color: "var(--pf-text-muted)", fontSize: 17, lineHeight: 1.7, marginBottom: 36, fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Создаём уникальные скины для Minecraft с 2019 года. Каждый пиксель — под твою личность.
              Более 5400 довольных клиентов по всей России.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("order")} className="btn-primary">
                <Icon name="Zap" size={16} />
                Заказать скин
              </button>
              <button onClick={() => scrollTo("portfolio")} className="btn-outline">
                Смотреть работы
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { num: "5400+", label: "клиентов" },
                { num: "24ч", label: "срок сдачи" },
                { num: "4.9★", label: "рейтинг" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 32, fontWeight: 700, color: "var(--pf-green)" }}>
                    {num}
                  </div>
                  <div style={{ color: "var(--pf-text-muted)", fontSize: 13 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up delay-200 relative flex justify-center">
            <div style={{ position: "relative", display: "inline-block" }}>
              <div
                className="animate-float"
                style={{
                  width: "clamp(280px, 40vw, 440px)",
                  aspectRatio: "1",
                  border: "3px solid var(--pf-green)",
                  boxShadow: "8px 8px 0 rgba(74,222,128,0.2), 16px 16px 0 rgba(74,222,128,0.08)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/1a430d9f-b2a0-4d53-b3f6-bd13b8d16ec2/files/0baf322a-d25b-4111-8438-fe95f4a763e3.jpg"
                  alt="Minecraft скин"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "absolute", bottom: -12, right: -12,
                  background: "var(--pf-gold)", color: "#0d1117",
                  fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: 13, padding: "8px 16px", letterSpacing: "0.08em",
                }}
              >
                ОТ 199 ₽
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" style={{ padding: "80px 0", background: "var(--pf-surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="pf-badge mb-3" style={{ display: "inline-block" }}>Услуги</div>
              <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                ЧТО МЫ ДЕЛАЕМ
              </h2>
            </div>
            <div style={{ color: "var(--pf-text-muted)", fontSize: 14 }} className="hidden md:block">
              Все работы с гарантией качества
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "var(--pf-surface2)",
                  border: "2px solid var(--pf-border)",
                  padding: "28px 24px",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    s.color === "green" ? "var(--pf-green)" : "var(--pf-gold)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    s.color === "green"
                      ? "4px 4px 0 rgba(74,222,128,0.2)"
                      : "4px 4px 0 rgba(251,191,36,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--pf-border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 48, height: 48, marginBottom: 16,
                    background: s.color === "green" ? "rgba(74,222,128,0.1)" : "rgba(251,191,36,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1px solid ${s.color === "green" ? "var(--pf-green)" : "var(--pf-gold)"}`,
                  }}
                >
                  <Icon name={s.icon} size={22} style={{ color: s.color === "green" ? "var(--pf-green)" : "var(--pf-gold)" } as React.CSSProperties} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                    fontSize: 18, marginBottom: 8, color: "var(--pf-text)", letterSpacing: "0.03em",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: "var(--pf-text-muted)", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                  {s.desc}
                </p>
                <div
                  style={{
                    fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                    color: s.color === "green" ? "var(--pf-green)" : "var(--pf-gold)", fontSize: 20,
                  }}
                >
                  {s.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section id="portfolio" style={{ padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="pf-badge mb-3" style={{ display: "inline-block" }}>Портфолио</div>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 24 }}>
              НАШИ РАБОТЫ
            </h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: "0.08em",
                    textTransform: "uppercase", padding: "6px 18px",
                    border: `2px solid ${activeFilter === f ? "var(--pf-green)" : "var(--pf-border)"}`,
                    color: activeFilter === f ? "var(--pf-green)" : "var(--pf-text-muted)",
                    background: activeFilter === f ? "rgba(74,222,128,0.08)" : "transparent",
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="animate-fade-up"
                style={{
                  position: "relative", overflow: "hidden",
                  border: "2px solid var(--pf-border)",
                  animationDelay: `${i * 0.07}s`,
                  cursor: "pointer",
                }}
              >
                <div style={{ aspectRatio: "1", overflow: "hidden" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.08)")}
                    onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "14px 16px", background: "var(--pf-surface2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 15, color: "var(--pf-text)" }}>
                        {item.title}
                      </div>
                      <div style={{ color: "var(--pf-text-muted)", fontSize: 12, marginTop: 2 }}>{item.category}</div>
                    </div>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "var(--pf-gold)", fontSize: 16 }}>
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" style={{ padding: "80px 0", background: "var(--pf-surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="pf-badge mb-3" style={{ display: "inline-block" }}>Команда</div>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
              О СТУДИИ И НАШЕЙ КОМАНДЕ
            </h2>
          </div>

          <div
            style={{
              background: "var(--pf-surface2)", border: "2px solid var(--pf-border)",
              padding: "32px", marginBottom: 48,
              borderLeft: "4px solid var(--pf-green)",
            }}
          >
            <p style={{ color: "var(--pf-text-muted)", fontSize: 16, lineHeight: 1.8, fontFamily: "'IBM Plex Sans', sans-serif" }}>
              <strong style={{ color: "var(--pf-text)" }}>PixelForge</strong> — студия, которую основали три художника, фанатевших от Minecraft с детства.
              Мы помним, каково это — хотеть уникальный скин, а найти только шаблоны. Поэтому создали студию,
              где каждый скин рисуется вручную: без генераторов, без шаблонов, только живой арт.
              За 5 лет работы мы выпустили более{" "}
              <strong style={{ color: "var(--pf-green)" }}>12 000 скинов</strong> и
              завоевали репутацию самой надёжной студии в СНГ.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                style={{
                  background: "var(--pf-surface2)", border: "2px solid var(--pf-border)",
                  padding: "32px 24px", textAlign: "center",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--pf-green)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--pf-border)")}
              >
                <div
                  style={{
                    width: 80, height: 80, margin: "0 auto 16px",
                    background: "rgba(74,222,128,0.08)",
                    border: "2px solid var(--pf-green)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 36,
                  }}
                >
                  {member.emoji}
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--pf-text)", marginBottom: 4 }}>
                  {member.name}
                </h3>
                <div style={{ color: "var(--pf-green)", fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: 16 }}>
                  {member.role}
                </div>
                <div className="flex justify-center gap-6">
                  <div>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "var(--pf-text)", fontSize: 18 }}>
                      {member.skins}
                    </div>
                    <div style={{ color: "var(--pf-text-muted)", fontSize: 11 }}>выполнено</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "var(--pf-text)", fontSize: 18 }}>
                      {member.exp}
                    </div>
                    <div style={{ color: "var(--pf-text-muted)", fontSize: 11 }}>в профессии</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section id="reviews" style={{ padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="pf-badge mb-3" style={{ display: "inline-block" }}>Отзывы</div>
              <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                ЧТО ГОВОРЯТ КЛИЕНТЫ
              </h2>
            </div>
            <div
              style={{
                background: "var(--pf-surface2)", border: "2px solid var(--pf-gold)",
                padding: "16px 24px", display: "flex", alignItems: "center", gap: 16, flexShrink: 0,
              }}
            >
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 40, color: "var(--pf-gold)" }}>
                {avgRating}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} style={{ color: "var(--pf-gold)", fontSize: 18 }}>★</span>
                  ))}
                </div>
                <div style={{ color: "var(--pf-text-muted)", fontSize: 13 }}>{REVIEWS.length} отзывов</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                style={{
                  background: "var(--pf-surface)",
                  border: "2px solid var(--pf-border)",
                  padding: "24px",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: "var(--pf-text)", fontSize: 16 }}>
                      {r.name}
                      {r.verified && (
                        <span
                          style={{
                            marginLeft: 6, fontSize: 10, color: "var(--pf-green)",
                            background: "rgba(74,222,128,0.1)", border: "1px solid var(--pf-green)",
                            padding: "1px 6px", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 500,
                          }}
                        >
                          ✓
                        </span>
                      )}
                    </div>
                    <div style={{ color: "var(--pf-text-muted)", fontSize: 11, marginTop: 2 }}>{r.date}</div>
                  </div>
                  <Stars count={r.rating} />
                </div>
                <p style={{ color: "var(--pf-text-muted)", fontSize: 14, lineHeight: 1.65, fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  "{r.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ORDER FORM ─── */}
      <section id="order" style={{ padding: "80px 0", background: "var(--pf-surface)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="pf-badge mb-3" style={{ display: "inline-block" }}>Заказ</div>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 12 }}>
              ЗАКАЗАТЬ СКИН
            </h2>
            <p style={{ color: "var(--pf-text-muted)", fontSize: 15, fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Заполните форму — ответим в Discord в течение 1 часа
            </p>
          </div>

          {orderSent ? (
            <div
              style={{
                textAlign: "center", padding: "60px 32px",
                border: "2px solid var(--pf-green)",
                background: "rgba(74,222,128,0.05)",
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 16 }}>⛏️</div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--pf-green)", marginBottom: 8 }}>
                ЗАЯВКА ПРИНЯТА!
              </h3>
              <p style={{ color: "var(--pf-text-muted)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                Мы напишем вам в Discord в ближайшее время.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--pf-surface2)", border: "2px solid var(--pf-border)",
                padding: "40px 36px",
              }}
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    style={{
                      display: "block", fontFamily: "'Oswald', sans-serif", fontSize: 12,
                      letterSpacing: "0.1em", color: "var(--pf-text-muted)", marginBottom: 8, textTransform: "uppercase",
                    }}
                  >
                    Ваше имя *
                  </label>
                  <input
                    required
                    className="pf-input"
                    placeholder="Как вас зовут?"
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block", fontFamily: "'Oswald', sans-serif", fontSize: 12,
                      letterSpacing: "0.1em", color: "var(--pf-text-muted)", marginBottom: 8, textTransform: "uppercase",
                    }}
                  >
                    Discord / VK *
                  </label>
                  <input
                    required
                    className="pf-input"
                    placeholder="username#0000"
                    value={orderForm.discord}
                    onChange={(e) => setOrderForm({ ...orderForm, discord: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  style={{
                    display: "block", fontFamily: "'Oswald', sans-serif", fontSize: 12,
                    letterSpacing: "0.1em", color: "var(--pf-text-muted)", marginBottom: 8, textTransform: "uppercase",
                  }}
                >
                  Тип заказа *
                </label>
                <select
                  required
                  className="pf-input"
                  value={orderForm.type}
                  onChange={(e) => setOrderForm({ ...orderForm, type: e.target.value })}
                  style={{ cursor: "pointer" }}
                >
                  <option value="" style={{ background: "var(--pf-surface2)" }}>Выберите услугу</option>
                  <option value="custom" style={{ background: "var(--pf-surface2)" }}>Кастомный скин — от 199 ₽</option>
                  <option value="pack" style={{ background: "var(--pf-surface2)" }}>Пакет скинов — от 499 ₽</option>
                  <option value="vip" style={{ background: "var(--pf-surface2)" }}>VIP-коллекция — от 1490 ₽</option>
                  <option value="redesign" style={{ background: "var(--pf-surface2)" }}>Редизайн скина — от 99 ₽</option>
                </select>
              </div>

              <div className="mb-8">
                <label
                  style={{
                    display: "block", fontFamily: "'Oswald', sans-serif", fontSize: 12,
                    letterSpacing: "0.1em", color: "var(--pf-text-muted)", marginBottom: 8, textTransform: "uppercase",
                  }}
                >
                  Описание идеи *
                </label>
                <textarea
                  required
                  className="pf-input"
                  rows={5}
                  placeholder="Расскажите о вашем персонаже: стиль, цвета, образ, референсы..."
                  value={orderForm.desc}
                  onChange={(e) => setOrderForm({ ...orderForm, desc: e.target.value })}
                  style={{ resize: "vertical" }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15 }}>
                <Icon name="Send" size={16} />
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: "2px solid var(--pf-border)", padding: "32px 24px" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 20 }}>
            PIXEL<span style={{ color: "var(--pf-green)" }}>FORGE</span>
          </div>
          <div style={{ color: "var(--pf-text-muted)", fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif" }}>
            © 2024 PixelForge Studio. Все скины созданы вручную.
          </div>
          <div className="flex gap-6">
            {[["Услуги", "services"], ["Портфолио", "portfolio"], ["Заказать", "order"]].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{ color: "var(--pf-text-muted)", fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.color = "var(--pf-green)")}
                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.color = "var(--pf-text-muted)")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
