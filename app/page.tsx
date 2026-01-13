import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Shield,
  Lightbulb,
  Wallet,
  Users,
  Vote,
  Github,
  MessageSquare,
  Twitter,
  CheckCircle2,
  Database,
  GraduationCap,
  Building2,
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative border-b border-border overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/home-bng.jpg)',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Floating icons for Web3 vibe */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-8 h-8 opacity-20 animate-pulse">
            <img src="/icon-dark-32x32.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute top-40 right-20 w-6 h-6 opacity-30 animate-bounce" style={{animationDelay: '1s'}}>
            <img src="/icon-dark-32x32.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-40 left-20 w-10 h-10 opacity-25 animate-pulse" style={{animationDelay: '2s'}}>
            <img src="/icon-dark-32x32.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute top-60 left-1/3 w-4 h-4 opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}>
            <img src="/icon-dark-32x32.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-60 right-1/4 w-7 h-7 opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}>
            <img src="/icon-dark-32x32.png" alt="" className="w-full h-full" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-4">
              <img src="/apple-icon.png" alt="AlphaDAO" className="w-24 h-24 mx-auto" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm mb-8 text-sm font-mono text-white">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {"Active Community DAO"}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-6 text-white">
              {"Building Skills, Products, and Community-Owned Infrastructure"}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty mb-12 max-w-3xl mx-auto">
              {
                "AlphaDAO is a decentralized autonomous organization focused on advancing Web3 education, research, and infrastructure. We operate at the intersection of talent development, product innovation, and decentralized governance—funding builders, creating verifiable credential systems, and establishing long-term sustainable protocols for the blockchain ecosystem."
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8 bg-primary hover:bg-primary/90" asChild>
                <Link href="/recertify">
                  {"Explore Recertify"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                <Link href="#join">{"Join the DAO"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of sections with body background */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(/bng-body.jpg)',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/85" />

      {/* YouTube Video Section */}
      <section className="relative border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">{"Watch: Understanding AlphaDAO"}</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {"Learn about our vision for decentralized education and credential infrastructure"}
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
            <video
              width="100%"
              height="100%"
              controls
              className="w-full h-full object-cover"
            >
              <source src="/AlphaDAOvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Organizational Structure"}</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {
                "AlphaDAO operates through three interconnected divisions, each serving a distinct function within the protocol ecosystem. This modular architecture enables specialized focus while maintaining coordinated strategic alignment across research, education, and capital deployment activities."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"AlphaDAO Labs"}</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "Our research and development division focuses on building production-grade Web3 infrastructure and tooling. Labs incubates protocol-level innovations, conducts applied blockchain research, and develops open-source solutions for credentialing, reputation systems, and decentralized identity."
                }
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Protocol development and smart contract engineering"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Applied research in cryptography and consensus mechanisms"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Open-source tooling for decentralized systems"}</span>
                </li>
              </ul>
              <Button variant="link" className="p-0 h-auto text-white hover:text-primary" asChild>
                <Link href="/labs">
                  {"Learn more about Labs"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"AlphaDAO Academy"}</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "Our education and talent development arm provides structured learning pathways for blockchain developers, protocol designers, and Web3 builders. Academy emphasizes hands-on experience, mentorship from protocol contributors, and verifiable skill certification through on-chain credentials."
                }
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Comprehensive blockchain development curriculum"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Direct mentorship from active protocol contributors"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Verifiable on-chain certifications via Recertify"}</span>
                </li>
              </ul>
<Button variant="link" className="p-0 h-auto text-white hover:text-primary" asChild>
                <Link href="/academy">
                  {"Explore Academy programs"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{"AlphaDAO Foundation"}</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "The treasury and capital allocation division manages protocol resources, provides grants to ecosystem builders, and makes strategic investments in Web3 infrastructure. Foundation ensures long-term sustainability through disciplined capital deployment and transparent governance."
                }
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Treasury management and diversified asset allocation"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Grant programs for protocol development and research"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Strategic investments in early-stage Web3 projects"}</span>
                </li>
              </ul>
              <Button variant="link" className="p-0 h-auto text-white hover:text-primary" asChild>
                <Link href="/foundation">
                  {"View Foundation activities"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
</section>

      {/* People We Work With Section */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"People We Work With"}</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {
                "We collaborate with leading organizations, institutions, and protocols to advance decentralized education and credential infrastructure. Our partners represent the forefront of Web3 innovation, academic excellence, and enterprise adoption."
              }
            </p>
          </div>

          <div className="relative">
            <div className="flex animate-scroll-x space-x-12">
              {/* First set */}
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Ethereum Foundation"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"ConsenSys"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"MIT Media Lab"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Chainlink"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Uniswap"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Arbitrum"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"OpenZeppelin"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Harvard Innovation"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Aave"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"The Graph"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Stanford Blockchain"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Polygon"}</div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Ethereum Foundation"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"ConsenSys"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"MIT Media Lab"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Chainlink"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Uniswap"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Arbitrum"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"OpenZeppelin"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Harvard Innovation"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Aave"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"The Graph"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Stanford Blockchain"}</div>
              </div>
              <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 min-w-fit px-6">
                <div className="text-sm font-mono text-gray-200">{"Polygon"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"What Our Community Says"}</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {
                "Hear from builders, educators, and partners who are transforming credential infrastructure with AlphaDAO. Their experiences demonstrate the real-world impact of decentralized verification and community-owned protocols."
              }
            </p>
          </div>

          <div className="relative">
            <div className="flex animate-scroll-x space-x-6">
              {/* First set of testimonials */}
              <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-gray-200 leading-relaxed mb-4">
                      {
                        "AlphaDAO's Recertify protocol has revolutionized how we issue and verify credentials at our institution. The on-chain verification eliminates fraud while giving students true ownership of their achievements."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white">{"Dr. Sarah Chen"}</div>
                      <div className="text-sm text-gray-300">{"Dean of Digital Innovation, MIT"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "As a protocol developer, I appreciate AlphaDAO's commitment to open-source infrastructure. Their credential standards have become the de facto choice for DAOs looking to verify member skills and contributions."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"Marcus Rodriguez"}</div>
                      <div className="text-sm text-muted-foreground">{"Core Developer, Uniswap"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "The AlphaDAO Academy program transformed my career. Earning verifiable on-chain credentials opened doors to opportunities I never thought possible. The community support is incredible."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"Aisha Johnson"}</div>
                      <div className="text-sm text-muted-foreground">{"Smart Contract Developer, ConsenSys"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "AlphaDAO Foundation's grant program enabled us to build critical infrastructure for credential verification. Their transparent governance and community-first approach sets the standard for DAO operations."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"David Kim"}</div>
                      <div className="text-sm text-muted-foreground">{"Founder, Chainlink Labs"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "Security and trust are paramount in credential systems. AlphaDAO's cryptographic verification and decentralized architecture provide exactly what enterprises need for tamper-proof certification."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"Jennifer Wu"}</div>
                      <div className="text-sm text-muted-foreground">{"Security Lead, OpenZeppelin"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Vote className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "Participating in AlphaDAO governance has been incredibly rewarding. The community's thoughtful approach to protocol evolution and transparent decision-making creates real value for all stakeholders."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"Thomas Anderson"}</div>
                      <div className="text-sm text-muted-foreground">{"DAO Governance Expert"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Duplicate set for seamless loop */}
              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "AlphaDAO's Recertify protocol has revolutionized how we issue and verify credentials at our institution. The on-chain verification eliminates fraud while giving students true ownership of their achievements."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"Dr. Sarah Chen"}</div>
                      <div className="text-sm text-muted-foreground">{"Dean of Digital Innovation, MIT"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "As a protocol developer, I appreciate AlphaDAO's commitment to open-source infrastructure. Their credential standards have become the de facto choice for DAOs looking to verify member skills and contributions."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"Marcus Rodriguez"}</div>
                      <div className="text-sm text-muted-foreground">{"Core Developer, Uniswap"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "The AlphaDAO Academy program transformed my career. Earning verifiable on-chain credentials opened doors to opportunities I never thought possible. The community support is incredible."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"Aisha Johnson"}</div>
                      <div className="text-sm text-muted-foreground">{"Smart Contract Developer, ConsenSys"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "AlphaDAO Foundation's grant program enabled us to build critical infrastructure for credential verification. Their transparent governance and community-first approach sets the standard for DAO operations."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"David Kim"}</div>
                      <div className="text-sm text-muted-foreground">{"Founder, Chainlink Labs"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "Security and trust are paramount in credential systems. AlphaDAO's cryptographic verification and decentralized architecture provide exactly what enterprises need for tamper-proof certification."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"Jennifer Wu"}</div>
                      <div className="text-sm text-muted-foreground">{"Security Lead, OpenZeppelin"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 min-w-[380px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Vote className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">{"★"}</span>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4">
                      {
                        "Participating in AlphaDAO governance has been incredibly rewarding. The community's thoughtful approach to protocol evolution and transparent decision-making creates real value for all stakeholders."
                      }
                    </blockquote>
                    <div>
                      <div className="font-semibold">{"Thomas Anderson"}</div>
                      <div className="text-sm text-muted-foreground">{"DAO Governance Expert"}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Product Section */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm mb-6 text-xs font-mono uppercase tracking-wide text-white">
                {"Flagship Product"}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
                {"Recertify: Verifiable Credentials for Web3"}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                {
                  "Recertify is AlphaDAO's core infrastructure protocol for issuing, managing, and verifying blockchain-based credentials. Built on Ethereum-compatible networks, Recertify leverages NFTs and Soulbound Tokens (SBTs) to create tamper-proof, portable, and composable digital certificates that serve as on-chain proof of skills, achievements, and professional qualifications."
                }
              </p>
              <p className="text-gray-200 leading-relaxed mb-8">
                {
                  "Unlike traditional credential systems that rely on centralized authorities and proprietary databases, Recertify provides cryptographically verifiable attestations that individuals own and control. Educational institutions, DAOs, employers, and training programs can issue certificates that recipients carry across platforms, enabling truly portable reputation and trustless verification of competencies."
                }
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{"Immutable Credential Storage"}</h4>
                    <p className="text-sm text-gray-200">
                      {
                        "All certifications are stored on-chain, ensuring permanent, tamper-proof records that cannot be altered or revoked without transparent on-chain actions."
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{"Cryptographic Verification"}</h4>
                    <p className="text-sm text-gray-200">
                      {
                        "Every credential includes cryptographic proof of authenticity, enabling instant verification without contacting issuing institutions or intermediaries."
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{"User-Owned Reputation"}</h4>
                    <p className="text-sm text-gray-200">
                      {
                        "Individuals control their credential portfolios, deciding what to share and with whom, enabling privacy-preserving professional identity management."
                      }
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="text-base px-8 bg-primary hover:bg-primary/90" asChild>
                <Link href="/recertify">
                  {"Explore Recertify Protocol"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl border-2 border-white/30 bg-black/60 backdrop-blur-sm p-8 shadow-2xl">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-300 uppercase tracking-wide font-mono">
                          {"Certified Credential"}
                        </div>
                        <div className="font-semibold text-white">{"Blockchain Developer"}</div>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{"Issued by"}</span>
                        <span className="font-mono text-white">{"AlphaDAO Academy"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{"Credential ID"}</span>
                        <span className="font-mono text-white">{"#0x42f8..."}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{"Token Standard"}</span>
                        <span className="font-mono text-white">{"ERC-721 (SBT)"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{"Chain"}</span>
                        <span className="font-mono text-white">{"Ethereum"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-white">{"Cryptographically Verified"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-white">{"Non-Transferable (Soulbound)"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-white">{"Permanently On-Chain"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AlphaDAO Section */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Protocol Advantages"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO represents a fundamental shift in how education, credentialing, and professional development infrastructure is built and governed. Our protocol-first approach ensures transparency, sustainability, and community alignment."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Trustless Verification"}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {
                  "Cryptographic proofs eliminate the need for trusted intermediaries. Anyone can verify credentials instantly without contacting issuing institutions, reducing fraud and administrative overhead."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Progressive Decentralization"}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {
                  "AlphaDAO follows a measured path toward full decentralization. Early governance is founder-led to ensure protocol stability, with increasing community control as the ecosystem matures."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Community Ownership"}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {
                  "Governance token holders collectively control protocol upgrades, treasury allocation, and strategic direction. Value accrues to the community rather than extractive intermediaries."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Global Accessibility"}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {
                  "Blockchain infrastructure enables permissionless participation. Anyone with an internet connection can earn credentials, access education, and build reputation regardless of geography or institutional affiliation."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Composable Credentials"}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {
                  "On-chain certificates integrate seamlessly with other Web3 protocols. Credentials can gate access to DAOs, serve as collateral in DeFi, or power reputation systems across the ecosystem."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Transparent Governance"}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {
                  "All governance proposals, votes, and treasury transactions occur on-chain with full public auditability. Community members maintain complete visibility into organizational decision-making."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance & Trust Section */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Governance Architecture"}</h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {
                    "AlphaDAO employs a hybrid governance model that balances agility with decentralization. Decision-making mechanisms evolve as the protocol matures, with clear processes for community participation, proposal submission, and implementation oversight."
                  }
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Vote className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{"Snapshot Voting"}</h3>
                    <p className="text-gray-200 leading-relaxed">
                      {
                        "Community proposals are voted on using Snapshot, an off-chain voting platform that captures token-weighted preferences without gas costs. Voting results inform on-chain execution through multi-signature wallets controlled by elected representatives."
                      }
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{"Treasury Management"}</h3>
                    <p className="text-gray-200 leading-relaxed">
                      {
                        "Protocol treasury is managed through transparent on-chain operations. All expenditures, grant allocations, and investment decisions require community approval via governance proposals. Financial reports are published quarterly with full transaction history available on-chain."
                      }
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{"Decentralization Roadmap"}</h3>
                    <p className="text-gray-200 leading-relaxed">
                      {
                        "AlphaDAO follows a progressive decentralization framework. Initial governance is founder-led to establish core infrastructure and operational processes. As the protocol stabilizes, control gradually transitions to token holders through increased delegation and reduced founder veto rights."
                      }
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="text-base px-8 bg-primary hover:bg-primary/90" asChild>
                <Link href="/governance">
                  {"View Governance Documentation"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-white">{"Active Proposals"}</h4>
                  <span className="text-xs font-mono px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                    {"3 OPEN"}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-white/20">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-sm text-white">{"AIP-023: Increase Bootcamp Grant Pool"}</div>
                      <span className="text-xs text-gray-300">{"4d left"}</span>
                    </div>
                    <p className="text-xs text-gray-200 mb-3">
                      {"Proposal to allocate additional 500K tokens to Q1 academy cohort funding."}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-green-500">{"✓ 847K"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-red-500">{"✗ 123K"}</span>
                      </div>
                      <div className="text-gray-300">{"87% approval"}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-white/20">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-sm text-white">{"AIP-024: Recertify V2 Deployment"}</div>
                      <span className="text-xs text-gray-300">{"6d left"}</span>
                    </div>
                    <p className="text-xs text-gray-200 mb-3">
                      {"Approve deployment of upgraded Recertify protocol with batch issuance features."}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-green-500">{"✓ 923K"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-red-500">{"✗ 45K"}</span>
                      </div>
                      <div className="text-gray-300">{"95% approval"}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-white/20">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-sm text-white">{"AIP-025: Strategic Partnership Framework"}</div>
                      <span className="text-xs text-gray-300">{"11d left"}</span>
                    </div>
                    <p className="text-xs text-gray-200 mb-3">
                      {"Establish guidelines for institutional partnerships and credential co-issuance."}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-green-500">{"✓ 612K"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-red-500">{"✗ 234K"}</span>
                      </div>
                      <div className="text-gray-300">{"72% approval"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
                <h4 className="font-bold mb-4 text-white">{"Governance Statistics"}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold mb-1 text-white">{"47"}</div>
                    <div className="text-sm text-gray-300">{"Total Proposals"}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1 text-white">{"2.8M"}</div>
                    <div className="text-sm text-gray-300">{"Active Voters"}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1 text-white">{"94%"}</div>
                    <div className="text-sm text-gray-300">{"Avg Approval Rate"}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1 text-white">{"$12M"}</div>
                    <div className="text-sm text-gray-300">{"Treasury Value"}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Join Section */}
      <section id="join" className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Join the Protocol"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO welcomes contributors, builders, researchers, and community members who share our vision for decentralized education and credential infrastructure. Multiple pathways exist for participation based on your skills and interests."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"For Contributors"}</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "Contribute to protocol development, educational content creation, community moderation, or governance participation. Contributors receive recognition through on-chain credentials and may qualify for ongoing compensation via grants and bounty programs."
                }
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Open-source development opportunities on core protocols"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Content creation for educational resources and documentation"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Community support and mentorship roles"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Governance proposal drafting and research"}</span>
                </li>
              </ul>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link href="https://t.me/alphadao">
                  {"Join on Telegram"}
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"For Partners"}</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "We collaborate with educational institutions, blockchain protocols, Web3 projects, and traditional enterprises seeking to leverage decentralized credential infrastructure. Partnership opportunities include co-branded certifications, integration support, and custom protocol implementations."
                }
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"White-label credential issuance for institutions"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Protocol integrations and technical collaboration"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Strategic advisory and governance participation"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{"Co-marketing and ecosystem development initiatives"}</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                <Link href="mailto:partnerships@alphadao.xyz">{"Contact Partnerships Team"}</Link>
              </Button>
            </Card>
          </div>

          <div className="flex flex-col items-center gap-6">
            <p className="text-gray-200 text-center">
              {"Connect with the AlphaDAO community across platforms"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                <Link href="https://t.me/alphadao" className="gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {"Telegram"}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                <Link href="https://twitter.com/alphadao" className="gap-2">
                  <Twitter className="h-5 w-5" />
                  {"Twitter"}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                <Link href="https://github.com/alphadao" className="gap-2">
                  <Github className="h-5 w-5" />
                  {"GitHub"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}
