import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/woundsmp-logo.png";
import hero from "@/assets/woundsmp-hero.jpg";
import { IpCopyBox } from "@/components/IpCopyBox";
import { Swords, Users, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WoundSMP — Hardcore Minecraft SMP Server" },
      {
        name: "description",
        content:
          "Join WoundSMP, a gritty survival multiplayer Minecraft server. Connect at play.woundsmp.site.",
      },
    ],
  }),
});

const features = [
  { icon: Swords, title: "PvP Survival", desc: "Raw, unforgiving combat. Every fight leaves a mark." },
  { icon: Users, title: "Tight Community", desc: "Active players, factions, and weekly events." },
  { icon: Shield, title: "Anti-Cheat", desc: "Custom protection so your loot stays yours." },
  { icon: Sparkles, title: "Custom Plugins", desc: "Unique mechanics you won't find anywhere else." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="WoundSMP logo" width={40} height={40} className="h-10 w-10" />
            <span className="font-mono text-sm font-bold uppercase tracking-[0.2em]">
              WoundSMP
            </span>
          </div>
          <a
            href="#join"
            className="rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            Join
          </a>
        </nav>

        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 pb-32 text-center sm:pt-24 sm:pb-40">
          <img
            src={logo}
            alt="WoundSMP"
            width={160}
            height={160}
            className="mb-8 h-32 w-32 drop-shadow-[0_0_30px_oklch(0.65_0.30_320_/_0.6)] sm:h-40 sm:w-40"
          />
          <h1 className="text-5xl font-black uppercase tracking-tight sm:text-7xl md:text-8xl">
            Wound<span className="text-primary">SMP</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A hardcore survival multiplayer server where every block tells a story
            and every scar is earned.
          </p>

          <div id="join" className="relative mt-12">
            <IpCopyBox ip="play.woundsmp.site" />
          </div>

          <p className="mt-10 text-xs uppercase tracking-widest text-muted-foreground">
            Java Edition · 1.21+
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
          What awaits you
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-sm border-2 border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <f.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold uppercase tracking-wide">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to join */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="mb-8 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            How to join
          </h2>
          <ol className="mb-10 space-y-4 text-left text-muted-foreground">
            <li className="flex gap-4">
              <span className="font-mono text-primary">01</span>
              Open Minecraft Java Edition (1.21 or later).
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-primary">02</span>
              Click <span className="text-foreground">Multiplayer → Add Server</span>.
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-primary">03</span>
              Paste <span className="font-mono text-foreground">play.woundsmp.site</span> as the server address.
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-primary">04</span>
              Hit Join Server and survive.
            </li>
          </ol>
          <IpCopyBox ip="play.woundsmp.site" />
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} WoundSMP · Not affiliated with Mojang
      </footer>
    </main>
  );
}
