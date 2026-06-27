"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  ExternalLink,
  Shield,
  Zap,
  Users,
  Star,
} from "lucide-react"
import { useState, useEffect } from "react"

const traits = [
  { name: "Background", variants: 12, rarity: "Common" },
  { name: "Fur", variants: 18, rarity: "Common" },
  { name: "Eyes", variants: 24, rarity: "Uncommon" },
  { name: "Aura", variants: 8, rarity: "Rare" },
  { name: "Crown", variants: 5, rarity: "Legendary" },
  { name: "Howl Glow", variants: 3, rarity: "Mythic" },
]

const rarityColor: Record<string, string> = {
  Common: "text-gray-300",
  Uncommon: "text-green-400",
  Rare: "text-blue-400",
  Legendary: "text-yellow-400",
  Mythic: "text-purple-400",
}

const stats = [
  { label: "Total Supply", value: "111" },
  { label: "Unique Holders", value: "111 max" },
  { label: "Blockchain", value: "TON" },
  { label: "Token Standard", value: "TEP-62" },
]

const benefits = [
  {
    Icon: Shield,
    title: "Governance Power",
    desc: "Genesis Wolf holders receive amplified voting weight in AlphaDAO governance proposals, shaping the future of the protocol.",
  },
  {
    Icon: Star,
    title: "Founding Member Status",
    desc: "Permanently recognized as a Genesis member on-chain. Your membership is immutable, portable, and verifiable by any protocol.",
  },
  {
    Icon: Zap,
    title: "Recertify Integration",
    desc: "Wolf holders gain early access to Recertify credential minting, reduced issuance fees, and exclusive certification badges.",
  },
  {
    Icon: Users,
    title: "Academy Access",
    desc: "Exclusive cohort placement in AlphaDAO Academy programs, direct mentorship channels, and private builder forums.",
  },
  {
    Icon: ExternalLink,
    title: "Treasury Participation",
    desc: "Eligibility for AlphaDAO Foundation grant programs and priority consideration for Labs incubation resources.",
  },
  {
    Icon: ArrowRight,
    title: "Future Drops",
    desc: "Guaranteed whitelist access and first-mint rights for all future AlphaDAO NFT collections and protocol token events.",
  },
]

export default function NFTsPage() {
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setGlowPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Ambient mouse glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(139,92,246,0.08) 0%, transparent 70%)`,
        }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        {/* scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139,92,246,0.015) 2px, rgba(139,92,246,0.015) 4px)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src="/apple-icon.png" alt="AlphaDAO" className="w-8 h-8 opacity-60" />
            <span
              className="text-xs tracking-[0.5em] uppercase font-mono"
              style={{ color: "rgba(167,139,250,0.8)" }}
            >
              AlphaDAO Labs Presents
            </span>
          </div>

          <h1 className="font-bold mb-6 leading-none">
            <span
              className="block text-6xl sm:text-7xl md:text-9xl font-black tracking-tight"
              style={{
                background: "linear-gradient(to bottom, #ffffff 0%, #6b7280 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              THE
            </span>
            <span
              className="block text-6xl sm:text-7xl md:text-9xl font-black tracking-tight"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(168,85,247,0.6))",
              }}
            >
              HOWL
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed mb-4 max-w-3xl mx-auto">
            In the shadow of a neon forest, beneath a moon bleeding purple light into the void...
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mb-4 max-w-2xl mx-auto">
            A lone wolf cries out. Not from pain. Not from rage. But as a{" "}
            <span className="text-purple-400 font-semibold">signal</span>. A declaration that he still existed.
          </p>
          <p className="text-xs tracking-[0.4em] text-gray-600 uppercase mb-12 font-mono">
            SIKA: The Howl That Built Worlds. The foundational narrative of AlphaDAO.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://alpha-doa-nft-wbesite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-mono tracking-widest text-white transition-all duration-300 border border-purple-500/50 hover:border-purple-400 overflow-hidden"
              style={{ background: "rgba(139,92,246,0.15)" }}
            >
              <div className="absolute inset-0 bg-purple-600/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10">ENTER THE REALM</span>
              <ExternalLink className="relative z-10 h-4 w-4" />
            </a>
            <a
              href="https://alpha-doa-nft-wbesite.vercel.app/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-mono tracking-widest text-gray-400 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
            >
              VIEW 111 WOLVES
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-purple-500 animate-pulse" />
          <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase font-mono">Descend</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative bg-black border-t border-purple-500/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
                style={{ background: "rgba(88,28,135,0.06)" }}
              >
                <div
                  className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 font-mono"
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 tracking-widest uppercase font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/10 mb-8 text-xs font-mono tracking-widest text-purple-400 uppercase">
                The Narrative
              </div>
              <h2
                className="text-4xl lg:text-5xl font-black mb-8 leading-tight"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #a855f7 60%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Genesis
              </h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  Only <span className="text-white font-semibold">111 Genesis</span> shall ever exist. Each one
                  a unique sentinel forged in the neon void — a living proof of founding membership in the AlphaDAO
                  ecosystem.
                </p>
                <p>
                  Holding a Genesis Wolf is more than ownership. It is identity. It signals that you were there at the
                  beginning, when the howl first broke through the silence of the void and called builders to something
                  greater.
                </p>
                <p>
                  These are{" "}
                  <span className="text-purple-400 font-semibold">Soulbound in spirit</span> — minted on TON,
                  composable with the Recertify credential protocol, and recognized across the AlphaDAO governance
                  framework.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://alpha-doa-nft-wbesite.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-mono tracking-wider text-white border border-purple-500/40 hover:bg-purple-900/30 hover:border-purple-400 transition-all duration-300"
                >
                  Explore Collection <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  href="/recertify"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-mono tracking-wider text-gray-400 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  Recertify Protocol <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* NFT card mockup */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-3xl opacity-20"
                style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden border border-purple-500/30"
                style={{ background: "rgba(10,0,20,0.8)", backdropFilter: "blur(20px)" }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src="/photo_1 (18).jpg"
                    alt="Genesis NFT"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(139,92,246,0.03) 3px, rgba(139,92,246,0.03) 4px)",
                    }}
                  />
                </div>
                <div className="p-6 border-t border-purple-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-xs text-gray-600 font-mono tracking-widest uppercase mb-1">
                        Genesis Wolf #001
                      </div>
                      <div className="text-white font-bold text-lg">The Alpha</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-600 font-mono tracking-widest mb-1">Rarity</div>
                      <div className="text-purple-400 font-bold text-sm font-mono">Mythic</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    {[
                      { k: "Collection", v: "Genesis" },
                      { k: "Supply", v: "1 of 111" },
                      { k: "Standard", v: "TEP-62" },
                      { k: "Network", v: "TON" },
                    ].map(({ k, v }) => (
                      <div key={k} className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-gray-600">{k}</span>
                        <span className="text-gray-300">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAITS ── */}
      <section className="relative py-24 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/10 mb-6 text-xs font-mono tracking-widest text-purple-400 uppercase">
              Traits and Attributes
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black mb-4"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #a855f7 60%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built From Rarity
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Each Genesis Wolf is algorithmically composed from layered traits — from common backgrounds to mythic
              howl glows that mark the rarest of the pack.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {traits.map((trait) => (
              <div
                key={trait.name}
                className="p-5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors duration-300 group"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold">{trait.name}</span>
                  <span className={`text-xs font-mono tracking-wider ${rarityColor[trait.rarity]}`}>
                    {trait.rarity}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 font-mono">{trait.variants} variants</span>
                  <div className="w-24 h-1 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        width: `${(trait.variants / 24) * 100}%`,
                        background: "linear-gradient(to right, #7c3aed, #ec4899)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="relative py-24 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/10 mb-6 text-xs font-mono tracking-widest text-purple-400 uppercase">
              Holder Benefits
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black mb-4"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #a855f7 60%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              More Than an NFT
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Genesis Wolf holders gain privileged access across the entire AlphaDAO ecosystem — from governance
              amplification to exclusive Academy tracks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <Card
                key={item.title}
                className="p-6 border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-300 group"
                style={{ background: "rgba(88,28,135,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(139,92,246,0.15)" }}
                >
                  <item.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(88,28,135,0.3) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Answer the Howl
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Only 111 will ever join the Genesis pack. The void is waiting. The question is whether you are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://alpha-doa-nft-wbesite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-mono text-sm tracking-widest text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #db2777)",
                boxShadow: "0 0 40px rgba(124,58,237,0.4)",
              }}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">MINT A GENESIS WOLF</span>
              <ExternalLink className="relative z-10 h-4 w-4" />
            </a>
            <a
              href="https://alpha-doa-nft-wbesite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-mono tracking-widest text-gray-400 border border-white/10 hover:border-purple-500/40 hover:text-purple-400 transition-all duration-300"
            >
              Browse Gallery <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-xs font-mono text-gray-600">
            <a href="#" className="hover:text-purple-400 transition-colors tracking-widest uppercase">
              Etherscan
            </a>
            <span className="text-gray-800">{"·"}</span>
            <a href="#" className="hover:text-purple-400 transition-colors tracking-widest uppercase">
              OpenSea
            </a>
            <span className="text-gray-800">{"·"}</span>
            <a href="#" className="hover:text-purple-400 transition-colors tracking-widest uppercase">
              Contract
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
