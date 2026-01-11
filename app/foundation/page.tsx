import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
  FileCheck,
  Users,
  CheckCircle2,
  Database,
  Lightbulb,
  Target,
  BarChart3,
  FileText,
  Lock,
  Clock,
  Globe,
} from "lucide-react"

export default function FoundationPage() {
  return (
    <main className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/grok_image_oatei0.jpg)' }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/85" />
      {/* Hero Section */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm mb-8 text-sm font-mono text-white">
              <Building2 className="w-4 h-4" />
              {"Capital Allocation Division"}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-6 text-white">
              {"Capital for Builders. Infrastructure for the Future."}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty mb-12 max-w-3xl mx-auto">
              {
                "AlphaDAO Foundation supports builders, public goods, and ecosystem growth through disciplined capital allocation and community-aligned funding. We provide patient, long-term capital to early-stage teams, infrastructure projects, and protocol development initiatives that strengthen the decentralized economy."
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8">
                {"Apply for Funding"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                {"View Investment Focus"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Foundation Exists */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Why AlphaDAO Foundation Exists"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "Traditional capital allocation is often short-term, extractive, and misaligned with ecosystem health. AlphaDAO Foundation operates differently."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 mb-4">
                <TrendingUp className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{"The Problem"}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-destructive mt-1">{"•"}</span>
                  <span className="text-gray-200">
                    {"Capital is often misallocated toward hype rather than substance"}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-destructive mt-1">{"•"}</span>
                  <span className="text-gray-200">
                    {"Early builders lack patient, long-term aligned funding"}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-destructive mt-1">{"•"}</span>
                  <span className="text-gray-200">
                    {"Public goods and infrastructure remain chronically underfunded"}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-destructive mt-1">{"•"}</span>
                  <span className="text-gray-200">
                    {"Traditional VCs prioritize exits over ecosystem sustainability"}
                  </span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{"The AlphaDAO Foundation Solution"}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
                  <h4 className="font-bold mb-2 text-white">{"Long-Term Aligned Capital"}</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {
                      "We invest with multi-year time horizons, prioritizing sustainable growth over short-term speculation. Capital is deployed in phases, not rushed."
                    }
                  </p>
                </Card>
                <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
                  <h4 className="font-bold mb-2 text-white">{"Builder-First Funding"}</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {
                      "We back talented teams with technical depth and mission alignment, even in early stages where traditional investors won't participate."
                    }
                  </p>
                </Card>
                <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
                  <h4 className="font-bold mb-2 text-white">{"Transparent Allocation"}</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {
                      "All funding decisions follow documented frameworks with clear evaluation criteria, governance oversight, and public reporting."
                    }
                  </p>
                </Card>
                <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
                  <h4 className="font-bold mb-2 text-white">{"DAO-Aligned Incentives"}</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {
                      "Foundation investments strengthen the AlphaDAO ecosystem, create value for the community, and support long-term protocol sustainability."
                    }
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Mandate */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Foundation Mandate"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Foundation operates under a clear mandate focused on ecosystem growth, builder support, and long-term treasury sustainability."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"Fund Early-Stage Builders & Teams"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Provide capital to promising teams building infrastructure, tooling, and applications in the Web3 ecosystem, especially where traditional funding is unavailable."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"Support Public Goods & Infrastructure"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Fund open-source projects, research initiatives, and protocol infrastructure that benefit the broader ecosystem but lack revenue models."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"Back AlphaDAO Labs Products"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Invest in product development and scaling efforts for AlphaDAO Labs innovations like Recertify, ensuring internal projects receive adequate resources."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"Grow the AlphaDAO Ecosystem Sustainably"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Make strategic investments that strengthen the AlphaDAO network, attract talent, and create long-term value for community stakeholders."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"Preserve Treasury Longevity"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Manage treasury assets responsibly with diversified holdings, risk management protocols, and disciplined capital deployment to ensure multi-decade sustainability."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"Foster Collaborative Ecosystems"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Support initiatives that connect builders, facilitate knowledge sharing, and strengthen coordination across DAOs, protocols, and communities."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Capital Allocation Strategy */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Capital Allocation Strategy"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Foundation allocates capital across diversified categories designed to balance ecosystem growth, risk management, and long-term sustainability."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{"Product-Backed Ventures"}</h3>
                <div className="text-3xl font-bold text-primary">{"30%"}</div>
              </div>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Investments in AlphaDAO Labs products (e.g., Recertify) and internal initiatives with clear product-market fit and revenue potential."
                }
              </p>
            </Card>

            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{"Ecosystem Startups"}</h3>
                <div className="text-3xl font-bold text-primary">{"25%"}</div>
              </div>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Early-stage funding for external teams building on TON, Ethereum, and other blockchains that align with AlphaDAO's mission."
                }
              </p>
            </Card>

            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{"Public Goods & Research"}</h3>
                <div className="text-3xl font-bold text-primary">{"20%"}</div>
              </div>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Funding for open-source infrastructure, protocol research, cryptographic innovations, and educational initiatives that benefit the entire ecosystem."
                }
              </p>
            </Card>

            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{"Grants & Bounties"}</h3>
                <div className="text-3xl font-bold text-primary">{"15%"}</div>
              </div>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Non-dilutive grants for community contributors, bounties for specific development tasks, and scholarships for academy participants."
                }
              </p>
            </Card>

            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{"Strategic Reserves"}</h3>
                <div className="text-3xl font-bold text-primary">{"10%"}</div>
              </div>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Liquid reserves maintained for operational flexibility, market opportunities, and emergency funding needs to ensure treasury resilience."
                }
              </p>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-xl border-2 border-primary/20 bg-primary/5">
              <p className="text-lg font-semibold text-center text-balance text-white">
                {
                  "Capital is deployed in phases, not rushed. Every investment undergoes rigorous evaluation and governance review."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Funding Models */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Investment & Funding Models"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Foundation employs flexible funding structures tailored to project needs, stage, and alignment with ecosystem goals."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Grants (Non-Dilutive)"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "No equity or token warrants required. Ideal for public goods, research, open-source tooling, and community initiatives where financial returns are secondary to ecosystem impact."
                }
              </p>
              <p className="text-sm text-gray-200 italic">{"Typical range: $5k - $50k"}</p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Revenue Share Agreements"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "AlphaDAO receives a percentage of future revenues until a predefined cap or multiple is reached. Aligns interests without diluting founders or requiring governance control."
                }
              </p>
              <p className="text-sm text-gray-200 italic">{"Example: 5-15% revenue share until 3x return"}</p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Strategic Equity (Where Applicable)"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "In select cases, AlphaDAO Foundation takes minority equity stakes in high-potential ventures with strong alignment, especially when supporting AlphaDAO Labs spinouts or ecosystem-critical infrastructure."
                }
              </p>
              <p className="text-sm text-gray-200 italic">{"Typical range: 5-20% equity"}</p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Token Warrants (Future, Optional)"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "For protocol-native projects issuing tokens, AlphaDAO may negotiate token warrants at favorable terms, enabling upside participation while supporting ecosystem growth."
                }
              </p>
              <p className="text-sm text-gray-200 italic">{"Evaluated case-by-case"}</p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Milestone-Based Funding"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "Capital is released in tranches tied to predefined milestones: prototype completion, user metrics, product launches, or research deliverables. Ensures accountability and reduces risk."
                }
              </p>
              <p className="text-sm text-gray-200 italic">{"Standard for all investments >$50k"}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Investment Focus Areas"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Foundation prioritizes investments in sectors aligned with our mission of education, infrastructure, and decentralized coordination."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{"Education & Certification"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Learning platforms, credentialing systems, academies, and educational content that advance blockchain literacy and professional development."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{"Web3 Infrastructure"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Node infrastructure, indexing services, storage solutions, oracles, and other foundational components that enable decentralized applications to scale."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{"DAO Tooling & Governance"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Voting systems, treasury management tools, coordination platforms, and governance frameworks that improve DAO operations and decision-making."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{"Identity & Reputation Systems"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Decentralized identity protocols, reputation scoring, credential verification systems, and privacy-preserving attestation mechanisms."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{"Emerging Market Talent"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Initiatives that unlock Web3 opportunity for builders in underserved regions, including localized education, infrastructure access, and talent pipelines."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance & Oversight */}
       <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Governance & Oversight"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Foundation operates under structured governance with transparency, accountability, and progressive decentralization as core principles."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Founder-Led Stewardship (Early Phase)"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "In the initial phase, AlphaDAO founders maintain decision-making authority to ensure rapid execution, strategic clarity, and protocol stability during early development."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "This structure enables agile capital deployment while establishing governance frameworks for future decentralization."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Advisory Review Council"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "A council of ecosystem stakeholders, institutional partners, and subject matter experts provides non-binding guidance on investment decisions, strategic direction, and risk management."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {"Council members represent diverse perspectives and act as checks on founder decision-making."}
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Community Signaling (Snapshot)"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "Token holders and community members signal preferences on major allocation decisions through Snapshot proposals, providing input on investment priorities and strategic focus areas."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {"While non-binding in early stages, community sentiment strongly influences Foundation decisions."}
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Transparent Reporting"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "All major investments, grant recipients, and treasury movements are documented in public reports published quarterly. Community members can audit capital allocation at any time."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {"Transparency builds trust and enables accountability even before full decentralization."}
              </p>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="p-8 rounded-xl border-2 border-primary/20 bg-primary/5">
              <p className="text-lg font-semibold text-center text-balance text-white">
                {
                  "Governance matures alongside capital growth. As the treasury scales, decision-making progressively transitions to on-chain voting and decentralized oversight."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application & Evaluation Process */}
       <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Application & Evaluation Process"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Foundation follows a structured, transparent process for evaluating funding applications from builders, researchers, and ecosystem contributors."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Submit Proposal",
                description:
                  "Submit a funding application through the AlphaDAO Foundation portal with project details, team background, budget breakdown, milestones, and expected outcomes.",
              },
              {
                step: "2",
                title: "Initial Screening",
                description:
                  "Foundation team reviews applications for alignment with investment focus, feasibility, team competency, and strategic fit with AlphaDAO's mission.",
              },
              {
                step: "3",
                title: "Due Diligence",
                description:
                  "Selected proposals undergo detailed evaluation: technical review, market analysis, competitive assessment, and team reference checks.",
              },
              {
                step: "4",
                title: "Governance Review",
                description:
                  "Proposals above a certain threshold are presented to the Advisory Council and community for feedback, ensuring alignment with stakeholder priorities.",
              },
              {
                step: "5",
                title: "Funding Decision",
                description:
                  "Foundation leadership makes final decision based on due diligence, governance input, and strategic considerations. Approved projects receive formal funding agreement.",
              },
              {
                step: "6",
                title: "Milestone Tracking",
                description:
                  "Funded projects report progress against milestones. Subsequent funding tranches are released upon milestone completion and Foundation approval.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-4 text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting & Accountability */}
      <section className="border-b border-border bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Reporting & Accountability"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Foundation maintains rigorous transparency standards, ensuring community members and stakeholders can audit capital allocation and investment outcomes."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <BarChart3 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">{"Public Funding Disclosures"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "All grant recipients and investment commitments above $10,000 are publicly disclosed with project descriptions, funding amounts, and rationale for allocation decisions."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <FileCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">{"Milestone Updates"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Funded projects provide regular progress updates shared with the community, including milestone achievements, challenges encountered, and outcomes delivered."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Ecosystem Impact Reporting"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Quarterly reports summarize aggregate impact metrics: jobs created, protocols supported, open-source contributions, and ecosystem growth indicators."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Treasury Transparency (When Applicable)"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "As governance matures, treasury holdings, asset allocation, and on-chain transactions become fully transparent through public dashboards and blockchain explorers."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Relationship to AlphaDAO */}
       <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Relationship to AlphaDAO"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Foundation operates as an independent division with a distinct mandate, while remaining strategically aligned with AlphaDAO's overall mission and ecosystem."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Foundation Operates Independently"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "Foundation maintains its own governance structure, capital deployment strategy, and operational autonomy, enabling specialized focus on treasury management and investment activities."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "This separation ensures professional capital allocation without compromising other AlphaDAO functions."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Aligned with AlphaDAO Mission"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "All Foundation investments must advance AlphaDAO's core mission: education, infrastructure development, decentralized coordination, and ecosystem growth."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Strategic alignment is non-negotiable—Foundation does not pursue investments outside AlphaDAO's focus areas."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Supports Labs and Bootcamp"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "Foundation prioritizes funding for AlphaDAO Labs products (like Recertify) and Bootcamp initiatives, ensuring internal projects receive resources to scale and succeed."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "This creates a flywheel where successful products generate returns that fund future ecosystem growth."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Protects Long-Term Sustainability"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "Foundation's disciplined capital management ensures AlphaDAO remains financially sustainable across market cycles, avoiding the treasury depletion that plagues many DAOs."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {"Prudent allocation today enables decades of ecosystem support tomorrow."}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
       <section className="relative border-b border-border">
    
        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 text-white">
              {"Funding What Matters."}
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty mb-12">
              {
                "AlphaDAO Foundation backs builders, infrastructure, and public goods that strengthen the decentralized economy. If you're building something meaningful, we want to hear from you."
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8">
                {"Apply for Support"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                {"Partner with AlphaDAO"}
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                {"View Governance Model"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
