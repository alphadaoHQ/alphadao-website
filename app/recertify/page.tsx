import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  XCircle,
  Link2,
  Database,
  Clock,
  Users,
  TrendingUp,
  FileCheck,
  BarChart3,
  Zap,
  Globe,
  MessageSquare,
} from "lucide-react"

export default function RecertifyPage() {
  return (
    <main className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/grok_image_oatei0.jpg)' }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/85" />
      {/* Hero Section */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 mb-8 text-sm font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              {"Flagship Product"}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-6 text-white">
              {"Verifiable Credentials for a Borderless Skills Economy"}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty mb-12 max-w-3xl mx-auto">
              {
                "Recertify is a blockchain-based certification and reputation system that allows institutions and communities to issue, verify, and manage credentials securely using NFTs and Soulbound Tokens (SBTs). Built on decentralized infrastructure, Recertify enables trustless verification, portable reputation, and cryptographically secured professional identity management."
              }
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8">
                {"Launch on Telegram"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                {"Partner with Recertify"}
              </Button>
              <Button size="lg" variant="secondary" className="text-base px-8">
                {"Expert Dashboard"}
                <BarChart3 className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
                <Link href="/docs">
                  {"Documentation"}
                  <FileCheck className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
</section>

      {/* Dashboard Preview Section */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Enterprise-Grade Dashboard"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "Powerful analytics and credential management interface designed for institutions, DAOs, and organizations requiring comprehensive oversight and control."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-slate-800/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-border/50 shadow-2xl">
                <img 
                  src="/recertify1.PNG" 
                  alt="Recertify Dashboard Overview" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-900/20 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-border/50 shadow-2xl">
                <img 
                  src="/recertify2.PNG" 
                  alt="Recertify Analytics Dashboard" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-6 text-sm font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              {"Live Dashboard Preview"}
            </div>
            <p className="text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
              {
                "Advanced credential analytics, real-time verification metrics, and comprehensive management tools for organizations requiring enterprise-grade oversight and control."
              }
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
     <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Trust in Credentials is Broken"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "Traditional credential systems rely on centralized authorities, proprietary databases, and manual verification processes that create friction, enable fraud, and limit portability across institutions and borders."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-2">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{"Certificate Fraud & Forgery"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Physical and digital certificates are easily forged or altered. Employers and institutions lack reliable methods to verify authenticity without contacting issuing bodies."
                }
              </p>
            </Card>

            <Card className="p-6 border-2">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{"Manual & Slow Verification"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Credential verification requires time-consuming manual processes, back-and-forth communication with institutions, and reliance on intermediaries that introduce delays and costs."
                }
              </p>
            </Card>

            <Card className="p-6 border-2">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{"No Global Standard for Skills"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Credentials issued in one country or institution often lack recognition elsewhere. Cross-border professional mobility is hampered by incompatible credentialing systems and verification protocols."
                }
              </p>
            </Card>

            <Card className="p-6 border-2">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{"Static, Non-Revocable Credentials"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Traditional certificates cannot be updated, revoked, or renewed efficiently. Once issued, they remain static even when skills become outdated or certifications are invalidated."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"The Recertify Approach"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "Recertify leverages blockchain technology to create tamper-proof, instantly verifiable, and user-owned credentials that work across platforms, institutions, and geographic boundaries."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"On-Chain, Tamper-Proof Credentials"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "All credentials are stored on blockchain networks as NFTs or Soulbound Tokens, ensuring immutable, cryptographically secured records that cannot be altered or falsified without transparent on-chain actions visible to all participants."
                }
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Instant Verification Without Intermediaries"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Anyone can verify the authenticity and validity of a credential in seconds by querying the blockchain directly. No need to contact issuing institutions, reducing verification time from days to milliseconds and eliminating administrative bottlenecks."
                }
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Revocable & Renewable Certifications"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Recertify supports smart contract logic that enables credential revocation, expiry management, and renewal workflows. Institutions can update certification status dynamically, ensuring credentials remain current and reflect ongoing competency validation."
                }
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"Portable Reputation Across Platforms"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Credential holders control their own on-chain reputation portfolios. Certificates are owned by individuals, not institutions, enabling professionals to carry verified credentials across employers, platforms, DAOs, and geographic regions without friction or permission."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How Recertify Works */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"How Recertify Works"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "A simple, transparent four-step process transforms traditional certification into trustless, verifiable on-chain credentials accessible to anyone, anywhere."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 text-2xl font-bold text-primary-foreground">
                  {"1"}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{"Institution Issues Certificate"}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {
                    "Educational institutions, academies, DAOs, or employers mint NFT or SBT credentials on-chain with metadata describing skills, competencies, and completion criteria."
                  }
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 text-2xl font-bold text-primary-foreground">
                  {"2"}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{"Credential Stored On-Chain"}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {
                    "The credential is permanently recorded on the blockchain with cryptographic proofs linking it to the issuer's verified identity and the recipient's wallet address."
                  }
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 text-2xl font-bold text-primary-foreground">
                  {"3"}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{"Holder Shares Verification Link"}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {
                    "Credential holders generate shareable verification links or present QR codes that allow third parties to instantly validate authenticity without revealing unnecessary personal information."
                  }
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 text-2xl font-bold text-primary-foreground">
                  {"4"}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{"Anyone Verifies Instantly"}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {
                    "Employers, recruiters, communities, or other institutions query the blockchain to confirm credential validity, issuer authenticity, and current status in real-time with cryptographic certainty."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Who Recertify Serves"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "Recertify provides infrastructure for any organization or community that issues, manages, or verifies professional credentials and educational achievements."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{"Academies & Educators"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Issue tamper-proof certificates to students completing courses, academy programs, or degree programs. Enable graduates to prove their skills trustlessly to employers worldwide."
                }
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{"DAOs & Web3 Communities"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Create on-chain reputation systems, issue contributor badges, and gate access to governance or resources based on verifiable credentials held by community members."
                }
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{"Employers & Recruiters"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Verify candidate qualifications instantly without delays, intermediaries, or fraud risk. Integrate blockchain verification into hiring workflows for trustless credential checking."
                }
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{"NGOs & Institutions"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Certify training programs, humanitarian work, volunteer contributions, and professional development initiatives with globally portable, verifiable credentials recognized across borders."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Key Features"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "Recertify provides a comprehensive feature set designed for institutional-grade credential management with the flexibility and transparency of decentralized infrastructure."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-lg font-bold">{"NFT & SBT-Based Credentials"}</h3>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Support for both transferable NFT credentials and non-transferable Soulbound Tokens, enabling appropriate credential types for different use cases and regulatory requirements."
                }
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-lg font-bold">{"Revocable Certificates"}</h3>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Smart contract logic enables issuers to revoke credentials if competencies lapse, ethical violations occur, or certifications become invalid, maintaining credential integrity over time."
                }
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-lg font-bold">{"Expiry & Renewal Logic"}</h3>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Built-in support for time-limited certifications with automated expiry tracking and renewal workflows, ensuring credentials reflect current competencies and ongoing professional development."
                }
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-lg font-bold">{"Telegram Mini App Distribution"}</h3>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Native integration with Telegram Mini Apps enables frictionless credential management within the Telegram ecosystem, reaching billions of users without requiring separate app downloads."
                }
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-lg font-bold">{"Analytics & Dashboards"}</h3>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Issuer dashboards provide insights into credential issuance volume, verification activity, and credential lifecycle management (roadmap feature—coming in future releases)."
                }
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <Link2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-lg font-bold">{"API & Integrations"}</h3>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Developer-friendly APIs enable seamless integration with existing HR systems, learning management platforms, and identity verification services (roadmap feature—coming in future releases)."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Recertify is Different */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Why Recertify Is Different"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "Recertify represents a fundamental architectural shift from centralized credential management to decentralized, user-owned reputation infrastructure."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <XCircle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"No PDFs"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Paper and PDF certificates are easily forged. Recertify eliminates static documents in favor of dynamic, cryptographically secured on-chain records."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <XCircle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"No Centralized Databases"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Traditional systems rely on proprietary databases vulnerable to hacks, data loss, and single points of failure. Recertify uses distributed blockchain storage."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <XCircle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"No Manual Verification"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Recertify eliminates days-long verification processes. Anyone can confirm credential authenticity instantly by querying the blockchain directly."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"Community-First Distribution"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Built for DAOs, academies, and Web3 communities. Recertify integrates natively with decentralized ecosystems rather than retrofitting legacy systems."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"Built on TON + Telegram"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Leverages The Open Network and Telegram's massive user base, providing low-cost transactions and frictionless access to credential management for billions."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{"Privacy-Preserving Design"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Credential holders control what information they share. Zero-knowledge proofs enable selective disclosure without revealing unnecessary personal data."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Governance Section */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Trust & Governance"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "Recertify is built and governed by AlphaDAO with transparent development practices, community input, and long-term alignment with ecosystem growth."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4 text-white">{"Built by AlphaDAO Labs"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "Recertify is developed by AlphaDAO Labs, the research and engineering division of AlphaDAO focused on building production-grade Web3 infrastructure. Labs brings expertise in smart contract security, decentralized systems design, and protocol development."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "All code is open-source and subject to community audit, ensuring transparency and enabling collaborative improvement."
                }
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4 text-white">{"Community-Aligned Governance"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "Protocol upgrades and feature roadmaps are developed with input from institutional partners, credential issuers, and the broader AlphaDAO community. Major decisions undergo governance review to ensure alignment with ecosystem needs."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Governance maturity evolves alongside protocol adoption, transitioning toward decentralized decision-making over time."
                }
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4 text-white">{"Transparent Roadmap"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "Recertify's development roadmap is publicly accessible, with clear milestones for feature releases, integrations, and protocol enhancements. Community members can track progress, submit proposals, and contribute to development priorities."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Roadmap updates are shared through governance forums, developer documentation, and community channels."
                }
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4 text-white">{"Security-First Mindset"}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                {
                  "All smart contracts undergo rigorous internal review and third-party security audits before deployment. Recertify prioritizes credential integrity, user privacy, and protection against common attack vectors."
                }
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Bug bounties and responsible disclosure programs encourage community participation in protocol security."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 text-white">
              {"Start Issuing Verifiable Credentials Today"}
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty mb-12">
              {
                "Join educational institutions, DAOs, and Web3 communities already using Recertify to issue trustless, portable credentials that empower individuals and eliminate verification friction."
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8">
                {"Launch Recertify"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                {"Request Partnership"}
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                <MessageSquare className="mr-2 h-5 w-5" />
                {"Join Telegram Community"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
