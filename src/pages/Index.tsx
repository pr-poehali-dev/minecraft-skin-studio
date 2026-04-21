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
    icon: "Sparkles",
    title: "Простой скин",
    desc: "Базовый скин без сложных деталей. Быстро и аккуратно — идеально для старта.",
    price: "от 50 ₽",
    color: "green",
  },
  {
    icon: "Brush",
    title: "Кастомный скин",
    desc: "Уникальный дизайн по вашим пожеланиям. Полное воплощение идеи в пикселях.",
    price: "от 100 ₽",
    color: "green",
  },
  {
    icon: "Layers",
    title: "Пакет скинов",
    desc: "3-5 скинов в едином стиле. Идеально для кланов и серверов.",
    price: "от 200 ₽",
    color: "gold",
  },
  {
    icon: "RefreshCw",
    title: "Редизайн скина",
    desc: "Обновим ваш старый скин: улучшим детали, цветовую схему и текстуры.",
    price: "от 50 ₽",
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

const LABEL_STYLE = {
  display: "block", fontFamily: "'Oswald', sans-serif", fontSize: 12,
  letterSpacing: "0.1em", color: "var(--pf-text-muted)", marginBottom: 8, textTransform: "uppercase" as const,
};

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    nick: "", type: "", desc: "", deadline: "", tg: "", ds: "", vk: "",
  });
  const [orderSent, setOrderSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clientCount, setClientCount] = useState(100);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function openModal() {
    setModalOpen(true);
    setOrderSent(false);
    setOrderForm({ nick: "", type: "", desc: "", deadline: "", tg: "", ds: "", vk: "" });
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOrderSent(true);
    setClientCount((c) => c + 1);
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
              ["Команда", "team"],
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
            <button onClick={openModal} className="btn-primary" style={{ padding: "8px 24px", fontSize: 13 }}>
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
            {[["Услуги", "services"], ["Команда", "team"]].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "var(--pf-text-muted)", textAlign: "left", fontSize: 15 }}
              >
                {label}
              </button>
            ))}
            <button onClick={openModal} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
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
              Создаём уникальные скины для Minecraft с 2026 года. Каждый пиксель — под твою личность.
              Более 100 довольных клиентов по всей России.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openModal} className="btn-primary">
                <Icon name="Zap" size={16} />
                Заказать скин
              </button>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { num: `${clientCount}`, label: "клиентов" },
                { num: "48ч", label: "срок сдачи" },
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
                ОТ 50 ₽
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
              С 2026 года мы создаём скины вручную — без генераторов, без шаблонов.
              Уже доверились нам более{" "}
              <strong style={{ color: "var(--pf-green)" }}>100 клиентов</strong> по всей России.
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

      {/* ─── MODAL ─── */}
      {modalOpen && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(0,0,0,0.75)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--pf-surface)",
              border: "2px solid var(--pf-green)",
              boxShadow: "8px 8px 0 rgba(74,222,128,0.15)",
              width: "100%", maxWidth: 560,
              maxHeight: "90vh", overflowY: "auto",
              padding: "36px 32px",
              position: "relative",
            }}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute", top: 16, right: 16,
                background: "transparent", border: "none",
                color: "var(--pf-text-muted)", cursor: "pointer",
              }}
            >
              <Icon name="X" size={20} />
            </button>

            {orderSent ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>⛏️</div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--pf-green)", marginBottom: 8 }}>
                  ЗАЯВКА ПРИНЯТА!
                </h3>
                <p style={{ color: "var(--pf-text-muted)", fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: 24 }}>
                  Скоро свяжемся с тобой по указанным контактам.
                </p>
                <button onClick={closeModal} className="btn-primary" style={{ justifyContent: "center" }}>
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <div className="pf-badge mb-3" style={{ display: "inline-block" }}>Заказ</div>
                <h2 className="section-title" style={{ fontSize: 28, marginBottom: 4 }}>ЗАКАЗАТЬ СКИН</h2>
                <p style={{ color: "var(--pf-text-muted)", fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: 24 }}>
                  Заполни форму — свяжемся в течение нескольких часов
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                  {/* Ник/имя */}
                  <div>
                    <label style={LABEL_STYLE}>Ник / Имя *</label>
                    <input required className="pf-input" placeholder="Твой ник или имя"
                      value={orderForm.nick} onChange={(e) => setOrderForm({ ...orderForm, nick: e.target.value })} />
                  </div>

                  {/* Выбор товара */}
                  <div>
                    <label style={LABEL_STYLE}>Выбор услуги *</label>
                    <select required className="pf-input" value={orderForm.type}
                      onChange={(e) => setOrderForm({ ...orderForm, type: e.target.value })}
                      style={{ cursor: "pointer" }}>
                      <option value="" style={{ background: "var(--pf-surface2)" }}>Выберите услугу</option>
                      <option value="simple" style={{ background: "var(--pf-surface2)" }}>Простой скин — от 50 ₽</option>
                      <option value="custom" style={{ background: "var(--pf-surface2)" }}>Кастомный скин — от 100 ₽</option>
                      <option value="pack" style={{ background: "var(--pf-surface2)" }}>Пакет скинов — от 200 ₽</option>
                      <option value="redesign" style={{ background: "var(--pf-surface2)" }}>Редизайн скина — от 50 ₽</option>
                    </select>
                  </div>

                  {/* Описание */}
                  <div>
                    <label style={LABEL_STYLE}>Описание идеи *</label>
                    <textarea required className="pf-input" rows={4}
                      placeholder="Стиль, цвета, образ, референсы..."
                      value={orderForm.desc} onChange={(e) => setOrderForm({ ...orderForm, desc: e.target.value })}
                      style={{ resize: "vertical" }} />
                  </div>

                  {/* Сроки */}
                  <div>
                    <label style={LABEL_STYLE}>Желаемый срок</label>
                    <input className="pf-input" placeholder="Например: до 25 апреля, срочно, не горит"
                      value={orderForm.deadline} onChange={(e) => setOrderForm({ ...orderForm, deadline: e.target.value })} />
                  </div>

                  {/* Контакты */}
                  <div style={{ borderTop: "1px solid var(--pf-border)", paddingTop: 16 }}>
                    <p style={{ ...LABEL_STYLE, marginBottom: 12 }}>Контакты (заполни хотя бы один) *</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: "var(--pf-green)", fontSize: 18, width: 24, textAlign: "center" }}>✈️</span>
                        <input className="pf-input" placeholder="Telegram: @username"
                          value={orderForm.tg} onChange={(e) => setOrderForm({ ...orderForm, tg: e.target.value })} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: "#5865F2", fontSize: 18, width: 24, textAlign: "center" }}>💬</span>
                        <input className="pf-input" placeholder="Discord: username#0000"
                          value={orderForm.ds} onChange={(e) => setOrderForm({ ...orderForm, ds: e.target.value })} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: "#4C75A3", fontSize: 18, width: 24, textAlign: "center" }}>🔷</span>
                        <input className="pf-input" placeholder="ВКонтакте: vk.com/id или @username"
                          value={orderForm.vk} onChange={(e) => setOrderForm({ ...orderForm, vk: e.target.value })} />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15, marginTop: 4 }}>
                    <Icon name="Send" size={16} />
                    Отправить заявку
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

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
            {[["Услуги", "services"], ["Заказать", "order"]].map(([label, id]) => (
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