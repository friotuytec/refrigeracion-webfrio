"use client";

import { motion } from "framer-motion";
import {
  Snowflake,
  MessageCircle,
  Wrench,
  ShieldCheck,
  Thermometer,
  Wind,
  AlertTriangle,
  Volume2,
  Droplets,
  BadgeCheck,
  MapPin,
  Sparkles,
} from "lucide-react";

const WA_URGENCIA =
  "https://wa.me/584242580386?text=Hola%20Friotuytec,%20tengo%20una%20urgencia%20con%20mi%20equipo.";
const WA_COTIZAR =
  "https://wa.me/584242580386?text=Hola,%20deseo%20cotizar%20un%20servicio%20de%20refrigeración.";
const WA_AGENDAR =
  "https://wa.me/584242580386?text=Hola,%20vengo%20de%20la%20página%20web%20y%20quiero%20agendar%20una%20visita%20técnica.";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function Glass({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_-8px_rgba(34,211,238,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      {/* Floating snowflakes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 0.6, 0] }}
            transition={{
              duration: 12 + (i % 5) * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
            className="absolute text-cyan-300/50"
            style={{ left: `${(i * 7.3) % 100}%` }}
          >
            <Snowflake size={12 + (i % 4) * 6} />
          </motion.div>
        ))}
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 px-4 py-3">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-2">
            <Snowflake className="h-7 w-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-xl font-black tracking-tight text-transparent sm:text-2xl">
              Friotuytec
            </span>
          </div>
          <a
            href={WA_URGENCIA}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-300/40 bg-gradient-to-r from-cyan-500 to-sky-500 px-3 py-2 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Urgencias 24/7</span>
            <span className="sm:hidden">24/7</span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative px-4 pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-cyan-200 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Servicio técnico profesional en refrigeración
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="bg-gradient-to-b from-white via-cyan-100 to-sky-300 bg-clip-text text-4xl font-black leading-[1.05] tracking-tight text-transparent sm:text-6xl md:text-7xl"
          >
            El Clima Perfecto,
            <br />
            En Tus Manos.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">
              Frío Garantizado en los valles del tuy
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
          >
            Expertos en instalación, reparación y mantenimiento de aires
            acondicionados y cavas cuartos. Solucionamos tu problema hoy mismo.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={WA_COTIZAR}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 px-8 py-5 text-lg font-bold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.55)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.9)] sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <MessageCircle className="h-6 w-6" />
              Cotizar por WhatsApp
            </a>
            <a
              href={WA_URGENCIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
            >
              <AlertTriangle className="h-4 w-4 text-cyan-300" />
              Tengo una urgencia
            </a>
          </motion.div>

          {/* Hero floating ice card */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-3 sm:gap-6"
          >
            {[
              { k: "+10", l: "Años de experiencia" },
              { k: "24/7", l: "Atención urgente" },
              { k: "100%", l: "Garantizado" },
            ].map((s) => (
              <Glass key={s.l} className="p-4 sm:p-6">
                <div className="bg-gradient-to-b from-white to-cyan-300 bg-clip-text text-2xl font-black text-transparent sm:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 text-[11px] text-slate-300 sm:text-sm">
                  {s.l}
                </div>
              </Glass>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA / AGITACIÓN */}
      <section className="relative px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              ¿Algo no anda bien con tu aire?
            </h2>
            <p className="mt-4 text-slate-300">
              No dejes que el calor arruine tu día. Nuestros técnicos lo
              solucionan rápido.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Thermometer,
                title: "¿Tu aire no enfría?",
                desc: "Diagnosticamos fugas de gas, fallas del compresor o filtros saturados en minutos.",
              },
              {
                icon: Volume2,
                title: "¿Hace ruidos extraños?",
                desc: "Vibraciones, chillidos o golpes son señales de alerta. Las eliminamos sin demora.",
              },
              {
                icon: Droplets,
                title: "¿Gotea agua?",
                desc: "Drenajes obstruidos o instalación defectuosa. Lo solucionamos el mismo día.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <Glass className="h-full p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-300">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                </Glass>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="relative px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-cyan-200 backdrop-blur-md">
              <Snowflake className="h-3 w-3" /> Nuestros Servicios
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Soluciones de{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">
                frío integral
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wrench,
                title: "Instalación de Equipos",
                desc: "Montaje profesional de splits, centrales y equipos comerciales con garantía total.",
              },
              {
                icon: ShieldCheck,
                title: "Mantenimiento Preventivo",
                desc: "Planes periódicos que extienden la vida útil y reducen el consumo eléctrico.",
              },
              {
                icon: Thermometer,
                title: "Reparación de Fallas",
                desc: "Diagnóstico técnico y reparación de cualquier marca o modelo, residencial o comercial.",
              },
              {
                icon: Snowflake,
                title: "Refrigeración Industrial",
                desc: "Cavas cuartos, neveras comerciales y sistemas de frío para negocios.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Glass className="group relative h-full overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_8px_40px_-8px_rgba(34,211,238,0.5)]">
                  <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition-all group-hover:bg-cyan-400/30" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-sky-500/10 text-cyan-300">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {s.desc}
                    </p>
                  </div>
                </Glass>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="relative px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Glass className="overflow-hidden p-8 sm:p-12">
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  icon: BadgeCheck,
                  title: "Técnicos Certificados",
                  desc: "Personal capacitado en marcas líderes y normas de seguridad.",
                },
                {
                  icon: ShieldCheck,
                  title: "Garantía Real",
                  desc: "Respaldo escrito en piezas y mano de obra. Tu tranquilidad primero.",
                },
                {
                  icon: MapPin,
                  title: "Atención en tu Zona",
                  desc: "Cobertura local rápida. Llegamos cuando más nos necesitas.",
                },
              ].map((b, i) => (
                <motion.div
                  key={b.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/40 bg-gradient-to-br from-cyan-400/30 to-sky-500/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                    <b.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{b.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </Glass>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <Glass className="relative overflow-hidden p-8 text-center sm:p-14">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-3xl" />
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/40 bg-white/10 backdrop-blur-md">
                  <Snowflake className="h-8 w-8 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                </div>
                <h2 className="bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-5xl">
                  ¿Listo para volver a sentir el frío?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-slate-300">
                  Escríbenos ahora y agenda tu visita técnica. Te respondemos al
                  instante por WhatsApp.
                </p>
                <a
                  href={WA_AGENDAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mt-8 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 px-8 py-5 text-lg font-black text-slate-950 shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_0_70px_rgba(34,211,238,0.95)] sm:w-auto sm:px-12 sm:text-xl"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <MessageCircle className="h-7 w-7" />
                  Agendar mi visita por WhatsApp
                </a>
                <p className="mt-4 text-xs text-slate-400">
                  Respuesta inmediata · +58 424-2580386
                </p>
              </div>
            </Glass>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-cyan-400" />
            <span className="font-bold text-white">Friotuytec</span>
            <span>· Frío Garantizado con los mejores Profesionales</span>
          </div>
          <div>© {new Date().getFullYear()} Todos los derechos reservados.</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_COTIZAR}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all hover:scale-110"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-30" />
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
