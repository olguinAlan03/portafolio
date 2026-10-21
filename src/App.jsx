import { useState, useEffect } from "react";
import {
    Mail,
    Download,
    ExternalLink,
    Sun,
    Moon,
    Code2,
    Smartphone,
    Database,
    Layers,
    Globe,
    Wrench,
} from "lucide-react";

function GithubIcon({ size = 24 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedinIcon({ size = 24 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
        </svg>
    );
}

function useWindowWidth() {
    const [width, setWidth] = useState(() => window.innerWidth);
    useEffect(() => {
        const handle = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);
    }, []);
    return width;
}

const THEMES = {
    dark: {
        bg: "#0B1220",
        surface: "#141D2E",
        surfaceAlt: "#1B2740",
        border: "#243450",
        text: "#E8EDF5",
        textMuted: "#8A99B5",
        accent: "#5B8DEF",
        accent2: "#37D6A8",
    },
    light: {
        bg: "#FAFAF8",
        surface: "#FFFFFF",
        surfaceAlt: "#F1F1ED",
        border: "#E2E2DC",
        text: "#1A1F2B",
        textMuted: "#5C6478",
        accent: "#3E6FD9",
        accent2: "#0F9E78",
    },
};

// Cuando agregues tu CV en PDF a la carpeta /public (por ejemplo /public/CV_Alan_Olguin.pdf),
// pon aquí "/CV_Alan_Olguin.pdf" y aparecerá el botón "Descargar CV". Vacío = botón oculto.
const CV_URL = "";

const STACK = [
    { label: "Backend", items: ["Scala", "Play Framework", "NestJS", "PHP", "REST", "JWT"], icon: Layers },
    { label: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind", "Zustand", "Angular (básico)"], icon: Code2 },
    { label: "Bases de datos", items: ["PostgreSQL", "MariaDB", "MySQL", "Liquibase"], icon: Database },
    { label: "WordPress y comercio", items: ["WordPress", "WooCommerce", "Elementor", "Houzez"], icon: Globe },
    { label: "Móvil", items: ["Ionic", "Capacitor", "Android (prototipo)"], icon: Smartphone },
    { label: "Herramientas", items: ["Git", "Docker", "Vercel", "Postman", "Jira", "Scrum"], icon: Wrench },
];

const PROJECTS = [
    {
        name: "POS Abarrotes",
        tag: "En desarrollo",
        description:
            "Punto de venta para abarrotes. API con NestJS, TypeORM y PostgreSQL en Docker, con autenticación JWT y bcrypt; interfaz en React, TypeScript y Zustand. Cuenta con la base de acceso, productos y ventas; crédito (fiados), proveedores y corte de caja están en progreso. La base del proyecto se generó con asistencia de IA y el desarrollo continúa por tickets y pull requests.",
        stack: ["NestJS", "TypeORM", "PostgreSQL", "React", "TypeScript"],
        github: "https://github.com/olguinAlan03/pos-abarrotes",
        accent: "accent2",
    },
    {
        name: "Residentia",
        tag: "Equipo de 3 · 2024 y 2026",
        description:
            "Sistema web de administración de condominios en PHP (MVC) y MariaDB con Docker: residentes, cuotas, avisos, incidentes, visitas, reservas y vehículos con tags, más un portal para residentes. Nació en 2024 en un equipo de 3 y obtuvo el primer lugar en el Día del Ingeniero (julio de 2024). En 2026 lo retomé y lo estabilicé con asistencia de IA, incluido el hash de contraseñas con BCrypt.",
        stack: ["PHP", "MariaDB", "Docker", "AdminLTE"],
        github: "https://github.com/olguinAlan03/residentia",
        accent: "accent",
    },
    {
        name: "App Android de Residentia",
        tag: "Prototipo · 2024",
        description:
            "Prototipo en Java y XML con Volley, con inicio de sesión conectado al backend de Residentia. Sin concluir; planeo retomarlo en 2027.",
        stack: ["Java", "XML", "Volley"],
        accent: "accent",
    },
    {
        name: "Este portafolio",
        tag: "Publicado",
        description:
            "Sitio de una sola página en React y Vite, con modo claro y oscuro, publicado en Vercel con despliegue continuo desde GitHub.",
        stack: ["React", "Vite", "Vercel"],
        github: "https://github.com/olguinAlan03/portafolio",
        accent: "accent2",
    },
];

const EXPERIENCE = [
    {
        role: "Desarrollo web inmobiliario (estadía productiva)",
        company: "Programa Transformando con la Juventud — Plataforma TuVendes",
        period: "Mayo 2026 — Octubre 2026",
        description:
            "Diagnostiqué por qué una actualización del tema borró las personalizaciones del sitio y las rehice como plugins propios para WordPress y WooCommerce: reseñas con moderación (en producción) y módulo de suscripciones (probado en staging), con asistencia de IA. Trabajo con staging, respaldos y pruebas antes de producción.",
    },
    {
        role: "Desarrollador de software (trainee)",
        company: "QRSOF",
        period: "Noviembre 2025 — Junio 2026",
        description:
            "Backend y frontend en sistemas empresariales multi-módulo: Empresalit (invitaciones por correo con token JWT y refactor a accountKey con migración Liquibase) y CMDS (empleados, CRM, afiliaciones, talleres y app móvil). Scala y Play, React y TypeScript, Ionic y Capacitor, con tickets de Jira, ramas y pull requests.",
    },
];

const EDUCATION = [
    {
        degree: "Ingeniería en Sistemas Computacionales",
        school: "Centro Universitario Hidalguense",
        period: "2021 — 2025",
        detail: "Titulación por promedio aprobada (agosto de 2026); título y cédula en trámite.",
    },
    {
        degree: "Técnico en Programación",
        school: "CECYTEH Plantel Omitlán",
        period: "2018 — 2021",
        detail: "Certificado, título y cédula profesional de técnico.",
    },
    {
        degree: "Servicio social",
        school: "CBTIS No. 222",
        period: "Oct 2024 — Abr 2025",
        detail: "Servicio social liberado.",
    },
];

const CERTIFICATIONS = [
    {
        name: "Aspire Leaders Program",
        issuer: "Aspire Institute",
        period: "Julio 2026",
        description: "Programa de liderazgo en línea. Certificado verificable.",
        href: "https://engage.aspireleaders.org/share/certificate/did:rcw:46de678e-35b1-4f3c-92d2-387c7cc2fe01",
    },
    {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        period: "En preparación",
        description: "Examen planeado entre noviembre y diciembre de 2026.",
    },
    {
        name: "AWS Certified Developer – Associate (DVA-C03)",
        issuer: "Amazon Web Services",
        period: "Planeada",
        description: "Examen planeado para febrero de 2027.",
    },
];

export default function App() {
    const [mode, setMode] = useState("dark");
    const [scrolled, setScrolled] = useState(false);
    const t = THEMES[mode];

    const width = useWindowWidth();
    const isMobile = width < 640;
    const isDesktop = width >= 1024;
    const px = isMobile ? "20px" : isDesktop ? "40px" : "28px";

    useEffect(() => {
        document.body.style.background = t.bg;
        document.documentElement.style.background = t.bg;
    }, [t.bg]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: t.bg,
                color: t.text,
                fontFamily: "'Inter', system-ui, sans-serif",
                transition: "background 0.3s, color 0.3s",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>

            {/* Nav */}
            <nav
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: scrolled ? `14px ${px}` : `22px ${px}`,
                    background: scrolled ? `${t.bg}E6` : "transparent",
                    backdropFilter: scrolled ? "blur(8px)" : "none",
                    borderBottom: scrolled ? `1px solid ${t.border}` : "1px solid transparent",
                    transition: "all 0.25s ease",
                }}
            >
        <span
            style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "-0.02em",
            }}
        >
          AO<span style={{ color: t.accent }}>.</span>
        </span>

                <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
                    {!isMobile &&
                        ["Sobre mí", "Habilidades", "Proyectos", "Experiencia", "Contacto"].map((label, i) => {
                            const ids = ["sobre-mi", "habilidades", "proyectos", "experiencia", "contacto"];
                            return (
                                <button
                                    key={label}
                                    onClick={() => scrollTo(ids[i])}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        color: t.textMuted,
                                        fontSize: 14,
                                        fontWeight: 500,
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = t.text)}
                                    onMouseLeave={(e) => (e.target.style.color = t.textMuted)}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    <button
                        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                        aria-label="Cambiar tema"
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            border: `1px solid ${t.border}`,
                            background: t.surface,
                            color: t.text,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: isMobile ? `60px ${px} 80px` : `80px ${px} 100px`,
                    display: "grid",
                    gridTemplateColumns: isDesktop ? "1.3fr 0.9fr" : "1fr",
                    gap: isDesktop ? 48 : 40,
                    alignItems: "center",
                }}
            >
                <div>
                    <div style={{ width: 28, height: 3, background: t.accent, marginBottom: 24 }} />
                    <h1
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: isMobile ? "clamp(32px, 10vw, 44px)" : "clamp(36px, 5vw, 56px)",
                            lineHeight: 1.08,
                            margin: "0 0 16px",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Brayan Alan
                        <br />
                        Olguin Olguin
                    </h1>
                    <p
                        style={{
                            fontSize: isMobile ? 16 : 19,
                            color: t.textMuted,
                            margin: "0 0 8px",
                            fontWeight: 500,
                        }}
                    >
                        Full Stack Developer{" "}
                        <span style={{ color: t.text }}>|</span> Web
                    </p>
                    <p style={{ fontSize: 15, color: t.textMuted, margin: "0 0 32px", maxWidth: 460 }}>
                        Construyo soluciones de extremo a extremo: de la base de datos a la pantalla del
                        usuario.
                    </p>

                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <button
                            onClick={() => scrollTo("proyectos")}
                            style={{
                                background: t.accent,
                                color: "#fff",
                                border: "none",
                                padding: "12px 22px",
                                borderRadius: 8,
                                fontSize: 14,
                                fontWeight: 500,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            <Code2 size={16} /> Ver proyectos
                        </button>
                        {CV_URL && (
                            <a
                                href={CV_URL}
                                download
                                style={{
                                    border: `1px solid ${t.border}`,
                                    color: t.text,
                                    padding: "12px 22px",
                                    borderRadius: 8,
                                    fontSize: 14,
                                    fontWeight: 500,
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                }}
                            >
                                <Download size={16} /> Descargar CV
                            </a>
                        )}
                    </div>

                    <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
                        {[
                            { icon: GithubIcon, href: "https://github.com/olguinAlan03" },
                            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/alan-olguin-78b8a4382" },
                            { icon: Mail, href: "mailto:olguinalanbrayan@gmail.com" },
                        ].map(({ icon: Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: "50%",
                                    border: `1px solid ${t.border}`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: t.textMuted,
                                    textDecoration: "none",
                                }}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Layered stack visual — single column on mobile sits below text naturally */}
                <div
                    style={{
                        position: "relative",
                        height: isMobile ? 220 : isDesktop ? 340 : 280,
                    }}
                >
                    {[
                        { label: "mobile/", sub: "Ionic · Capacitor", offset: 0, color: t.accent2 },
                        { label: "frontend/", sub: "React · TypeScript", offset: 56, color: t.accent },
                        { label: "backend/", sub: "Scala · NestJS · PHP", offset: 112, color: t.textMuted },
                    ].map((layer, i) => (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                top: layer.offset,
                                left: i * 18,
                                right: 0,
                                background: t.surface,
                                border: `1px solid ${t.border}`,
                                borderRadius: 10,
                                padding: "16px 20px",
                                fontFamily: "'JetBrains Mono', monospace",
                                boxShadow:
                                    mode === "dark"
                                        ? "0 12px 24px rgba(0,0,0,0.35)"
                                        : "0 12px 24px rgba(0,0,0,0.06)",
                            }}
                        >
              <span style={{ color: layer.color, fontSize: 14, fontWeight: 500 }}>
                {layer.label}
              </span>
                            <p style={{ margin: "6px 0 0", fontSize: 12, color: t.textMuted }}>{layer.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sobre mí */}
            <section
                id="sobre-mi"
                style={{ maxWidth: 1280, margin: "0 auto", padding: `40px ${px} 100px` }}
            >
                <SectionLabel text="Sobre mí" t={t} />
                <p
                    style={{
                        fontSize: isMobile ? 16 : 18,
                        lineHeight: 1.7,
                        color: t.text,
                        maxWidth: 720,
                    }}
                >
                    Soy Ingeniero en Sistemas Computacionales con cerca de un año de experiencia práctica
                    en desarrollo de software. He trabajado con Scala y Play en el backend y con React y
                    TypeScript en las interfaces de sistemas empresariales multi-módulo, y desarrollo en
                    WordPress y WooCommerce para una plataforma inmobiliaria. Trabajo con tickets, ramas y
                    pull requests, y uso asistentes de IA con criterio: defino el alcance, reviso, integro y
                    pruebo. Actualmente construyo un punto de venta con NestJS y React. Completé el{" "}
                    <strong>Aspire Leaders Program</strong> (Aspire Institute).
                </p>
            </section>

            {/* Habilidades */}
            <section
                id="habilidades"
                style={{ maxWidth: 1280, margin: "0 auto", padding: `40px ${px} 100px` }}
            >
                <SectionLabel text="Habilidades" t={t} />
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile
                            ? "1fr"
                            : isDesktop
                                ? "repeat(3, 1fr)"
                                : "repeat(2, 1fr)",
                        gap: 16,
                    }}
                >
                    {STACK.map(({ label, items, icon: Icon }) => (
                        <div
                            key={label}
                            style={{
                                background: t.surface,
                                border: `1px solid ${t.border}`,
                                borderRadius: 12,
                                padding: "20px 22px",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                                <Icon size={18} color={t.accent} />
                                <span style={{ fontWeight: 600, fontSize: 15 }}>{label}</span>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: 11.5,
                                            background: t.surfaceAlt,
                                            color: t.textMuted,
                                            padding: "4px 9px",
                                            borderRadius: 6,
                                        }}
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Proyectos */}
            <section
                id="proyectos"
                style={{ maxWidth: 1280, margin: "0 auto", padding: `40px ${px} 100px` }}
            >
                <SectionLabel text="Proyectos" t={t} />
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                        gap: 20,
                    }}
                >
                    {PROJECTS.map((p) => (
                        <div
                            key={p.name}
                            style={{
                                background: t.surface,
                                border: `1px solid ${t.border}`,
                                borderRadius: 14,
                                padding: 26,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: 12,
                                }}
                            >
                                <h3
                                    style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        margin: 0,
                                    }}
                                >
                                    {p.name}
                                </h3>
                                <span
                                    style={{
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: p.accent === "accent" ? t.accent : t.accent2,
                                        border: `1px solid ${p.accent === "accent" ? t.accent : t.accent2}`,
                                        borderRadius: 20,
                                        padding: "3px 10px",
                                        whiteSpace: "nowrap",
                                        marginLeft: 12,
                                    }}
                                >
                  {p.tag}
                </span>
                            </div>
                            <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.6, flex: 1 }}>
                                {p.description}
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "16px 0" }}>
                                {p.stack.map((s) => (
                                    <span
                                        key={s}
                                        style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: 11,
                                            background: t.surfaceAlt,
                                            color: t.textMuted,
                                            padding: "3px 8px",
                                            borderRadius: 6,
                                        }}
                                    >
                    {s}
                  </span>
                                ))}
                            </div>
                            {p.github && (
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: t.text,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        textDecoration: "none",
                                    }}
                                >
                                    Ver en GitHub <ExternalLink size={13} />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Experiencia */}
            <section
                id="experiencia"
                style={{ maxWidth: 1280, margin: "0 auto", padding: `40px ${px} 100px` }}
            >
                <SectionLabel text="Experiencia" t={t} />
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {EXPERIENCE.map((exp, i) => (
                        <div
                            key={exp.role + i}
                            style={{
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "160px 1fr",
                                gap: isMobile ? 4 : 24,
                                padding: "22px 0",
                                borderTop: i === 0 ? "none" : `1px solid ${t.border}`,
                            }}
                        >
              <span
                  style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12.5,
                      color: t.textMuted,
                  }}
              >
                {exp.period}
              </span>
                            <div>
                                <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600 }}>
                                    {exp.role}
                                </h4>
                                <p style={{ margin: "0 0 8px", fontSize: 13.5, color: t.accent }}>
                                    {exp.company}
                                </p>
                                <p style={{ margin: 0, fontSize: 14, color: t.textMuted, lineHeight: 1.6 }}>
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Educación */}
            <section
                id="educacion"
                style={{ maxWidth: 1280, margin: "0 auto", padding: `40px ${px} 100px` }}
            >
                <SectionLabel text="Formación académica" t={t} />
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {EDUCATION.map((ed, i) => (
                        <div
                            key={ed.degree}
                            style={{
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "160px 1fr",
                                gap: isMobile ? 4 : 24,
                                padding: "22px 0",
                                borderTop: i === 0 ? "none" : `1px solid ${t.border}`,
                            }}
                        >
              <span
                  style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12.5,
                      color: t.textMuted,
                  }}
              >
                {ed.period}
              </span>
                            <div>
                                <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600 }}>
                                    {ed.degree}
                                </h4>
                                <p style={{ margin: "0 0 8px", fontSize: 13.5, color: t.accent }}>{ed.school}</p>
                                {ed.detail && (
                                    <p style={{ margin: 0, fontSize: 14, color: t.textMuted, lineHeight: 1.6 }}>
                                        {ed.detail}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certificaciones */}
            <section
                id="certificaciones"
                style={{ maxWidth: 1280, margin: "0 auto", padding: `40px ${px} 100px` }}
            >
                <SectionLabel text="Certificaciones" t={t} />
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {CERTIFICATIONS.map((cert, i) => (
                        <div
                            key={cert.name}
                            style={{
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "160px 1fr",
                                gap: isMobile ? 4 : 24,
                                padding: "22px 0",
                                borderTop: i === 0 ? "none" : `1px solid ${t.border}`,
                            }}
                        >
              <span
                  style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12.5,
                      color: t.textMuted,
                  }}
              >
                {cert.period}
              </span>
                            <div>
                                <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600 }}>
                                    {cert.name}
                                </h4>
                                <p style={{ margin: "0 0 8px", fontSize: 13.5, color: t.accent }}>
                                    {cert.issuer}
                                </p>
                                <p style={{ margin: 0, fontSize: 14, color: t.textMuted, lineHeight: 1.6 }}>
                                    {cert.description}
                                </p>
                                {cert.href && (
                                    <a
                                        href={cert.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            marginTop: 10,
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: t.text,
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 6,
                                            textDecoration: "none",
                                        }}
                                    >
                                        Ver certificado <ExternalLink size={13} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contacto */}
            <section
                id="contacto"
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: `40px ${px} 120px`,
                    textAlign: "center",
                }}
            >
                <SectionLabel text="Contacto" t={t} center />
                <h2
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(28px, 4vw, 40px)",
                        margin: "0 0 16px",
                        letterSpacing: "-0.02em",
                    }}
                >
                    ¿Construimos algo juntos?
                </h2>
                <p style={{ color: t.textMuted, fontSize: 15, margin: "0 0 28px" }}>
                    Disponible para nuevas oportunidades como desarrollador backend o full stack.
                </p>
                <a
                    href="mailto:olguinalanbrayan@gmail.com"
                    style={{
                        background: t.accent,
                        color: "#fff",
                        padding: "13px 28px",
                        borderRadius: 8,
                        fontSize: isMobile ? 13 : 14,
                        fontWeight: 500,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        wordBreak: "break-all",
                    }}
                >
                    <Mail size={16} /> olguinalanbrayan@gmail.com
                </a>
            </section>

            <footer
                style={{
                    borderTop: `1px solid ${t.border}`,
                    padding: `24px ${px}`,
                    textAlign: "center",
                    fontSize: 12.5,
                    color: t.textMuted,
                }}
            >
                Brayan Alan Olguin Olguin — Pachuca de Soto, Hidalgo, México
            </footer>
        </div>
    );
}

function SectionLabel({ text, t, center }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: center ? "center" : "flex-start",
                gap: 10,
                marginBottom: 28,
            }}
        >
      <span
          style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              color: t.accent,
          }}
      >
        //
      </span>
            <span
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    color: t.textMuted,
                    textTransform: "lowercase",
                    letterSpacing: "0.02em",
                }}
            >
        {text}
      </span>
        </div>
    );
}