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
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 mb-8 text-sm font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {"Active Protocol"}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              {"Building Skills, Products, and Community-Owned Infrastructure"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty mb-12 max-w-3xl mx-auto">
              {
                "AlphaDAO is a decentralized autonomous organization focused on advancing Web3 education, research, and infrastructure. We operate at the intersection of talent development, product innovation, and decentralized governance—funding builders, creating verifiable credential systems, and establishing long-term sustainable protocols for the blockchain ecosystem."
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8" asChild>
                <Link href="/recertify">
                  {"Explore Recertify"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
                <Link href="#join">{"Join the DAO"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{"Organizational Structure"}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {
                "AlphaDAO operates through three interconnected divisions, each serving a distinct function within the protocol ecosystem. This modular architecture enables specialized focus while maintaining coordinated strategic alignment across research, education, and capital deployment activities."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{"AlphaDAO Labs"}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {
                  "Our research and development division focuses on building production-grade Web3 infrastructure and tooling. Labs incubates protocol-level innovations, conducts applied blockchain research, and develops open-source solutions for credentialing, reputation systems, and decentralized identity."
                }
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Protocol development and smart contract engineering"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Applied research in cryptography and consensus mechanisms"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Open-source tooling for decentralized systems"}</span>
                </li>
              </ul>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/labs">
                  {"Learn more about Labs"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{"AlphaDAO Bootcamp"}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {
                  "Our education and talent development arm provides structured learning pathways for blockchain developers, protocol designers, and Web3 builders. Bootcamp emphasizes hands-on experience, mentorship from protocol contributors, and verifiable skill certification through on-chain credentials."
                }
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Comprehensive blockchain development curriculum"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Direct mentorship from active protocol contributors"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Verifiable on-chain certifications via Recertify"}</span>
                </li>
              </ul>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/bootcamp">
                  {"Explore Bootcamp programs"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{"AlphaDAO Foundation"}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {
                  "The treasury and capital allocation division manages protocol resources, provides grants to ecosystem builders, and makes strategic investments in Web3 infrastructure. Foundation ensures long-term sustainability through disciplined capital deployment and transparent governance."
                }
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Treasury management and diversified asset allocation"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Grant programs for protocol development and research"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Strategic investments in early-stage Web3 projects"}</span>
                </li>
              </ul>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/foundation">
                  {"View Foundation activities"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Flagship Product Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background mb-6 text-xs font-mono uppercase tracking-wide">
                {"Flagship Product"}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {"Recertify: Verifiable Credentials for Web3"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {
                  "Recertify is AlphaDAO's core infrastructure protocol for issuing, managing, and verifying blockchain-based credentials. Built on Ethereum-compatible networks, Recertify leverages NFTs and Soulbound Tokens (SBTs) to create tamper-proof, portable, and composable digital certificates that serve as on-chain proof of skills, achievements, and professional qualifications."
                }
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {
                  "Unlike traditional credential systems that rely on centralized authorities and proprietary databases, Recertify provides cryptographically verifiable attestations that individuals own and control. Educational institutions, DAOs, employers, and training programs can issue certificates that recipients carry across platforms, enabling truly portable reputation and trustless verification of competencies."
                }
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{"Immutable Credential Storage"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {
                        "All certifications are stored on-chain, ensuring permanent, tamper-proof records that cannot be altered or revoked without transparent on-chain actions."
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{"Cryptographic Verification"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {
                        "Every credential includes cryptographic proof of authenticity, enabling instant verification without contacting issuing institutions or intermediaries."
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{"User-Owned Reputation"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {
                        "Individuals control their credential portfolios, deciding what to share and with whom, enabling privacy-preserving professional identity management."
                      }
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="text-base px-8" asChild>
                <Link href="/recertify">
                  {"Explore Recertify Protocol"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl border-2 border-border bg-background p-8 shadow-2xl">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide font-mono">
                          {"Certified Credential"}
                        </div>
                        <div className="font-semibold">{"Blockchain Developer"}</div>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{"Issued by"}</span>
                        <span className="font-mono">{"AlphaDAO Bootcamp"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{"Credential ID"}</span>
                        <span className="font-mono">{"#0x42f8..."}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{"Token Standard"}</span>
                        <span className="font-mono">{"ERC-721 (SBT)"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{"Chain"}</span>
                        <span className="font-mono">{"Ethereum"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>{"Cryptographically Verified"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>{"Non-Transferable (Soulbound)"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>{"Permanently On-Chain"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AlphaDAO Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{"Protocol Advantages"}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {
                "AlphaDAO represents a fundamental shift in how education, credentialing, and professional development infrastructure is built and governed. Our protocol-first approach ensures transparency, sustainability, and community alignment."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{"Trustless Verification"}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "Cryptographic proofs eliminate the need for trusted intermediaries. Anyone can verify credentials instantly without contacting issuing institutions, reducing fraud and administrative overhead."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{"Progressive Decentralization"}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "AlphaDAO follows a measured path toward full decentralization. Early governance is founder-led to ensure protocol stability, with increasing community control as the ecosystem matures."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{"Community Ownership"}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "Governance token holders collectively control protocol upgrades, treasury allocation, and strategic direction. Value accrues to the community rather than extractive intermediaries."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{"Global Accessibility"}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "Blockchain infrastructure enables permissionless participation. Anyone with an internet connection can earn credentials, access education, and build reputation regardless of geography or institutional affiliation."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{"Composable Credentials"}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "On-chain certificates integrate seamlessly with other Web3 protocols. Credentials can gate access to DAOs, serve as collateral in DeFi, or power reputation systems across the ecosystem."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{"Transparent Governance"}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "All governance proposals, votes, and treasury transactions occur on-chain with full public auditability. Community members maintain complete visibility into organizational decision-making."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance & Trust Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{"Governance Architecture"}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {
                    "AlphaDAO employs a hybrid governance model that balances agility with decentralization. Decision-making mechanisms evolve as the protocol matures, with clear processes for community participation, proposal submission, and implementation oversight."
                  }
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Vote className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{"Snapshot Voting"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {
                        "Community proposals are voted on using Snapshot, an off-chain voting platform that captures token-weighted preferences without gas costs. Voting results inform on-chain execution through multi-signature wallets controlled by elected representatives."
                      }
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{"Treasury Management"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {
                        "Protocol treasury is managed through transparent on-chain operations. All expenditures, grant allocations, and investment decisions require community approval via governance proposals. Financial reports are published quarterly with full transaction history available on-chain."
                      }
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{"Decentralization Roadmap"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {
                        "AlphaDAO follows a progressive decentralization framework. Initial governance is founder-led to establish core infrastructure and operational processes. As the protocol stabilizes, control gradually transitions to token holders through increased delegation and reduced founder veto rights."
                      }
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="text-base px-8" asChild>
                <Link href="/governance">
                  {"View Governance Documentation"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-2">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold">{"Active Proposals"}</h4>
                  <span className="text-xs font-mono px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                    {"3 OPEN"}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-sm">{"AIP-023: Increase Bootcamp Grant Pool"}</div>
                      <span className="text-xs text-muted-foreground">{"4d left"}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {"Proposal to allocate additional 500K tokens to Q1 bootcamp cohort funding."}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-green-500">{"✓ 847K"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-red-500">{"✗ 123K"}</span>
                      </div>
                      <div className="text-muted-foreground">{"87% approval"}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-sm">{"AIP-024: Recertify V2 Deployment"}</div>
                      <span className="text-xs text-muted-foreground">{"6d left"}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {"Approve deployment of upgraded Recertify protocol with batch issuance features."}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-green-500">{"✓ 923K"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-red-500">{"✗ 45K"}</span>
                      </div>
                      <div className="text-muted-foreground">{"95% approval"}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-sm">{"AIP-025: Strategic Partnership Framework"}</div>
                      <span className="text-xs text-muted-foreground">{"11d left"}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {"Establish guidelines for institutional partnerships and credential co-issuance."}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-green-500">{"✓ 612K"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-red-500">{"✗ 234K"}</span>
                      </div>
                      <div className="text-muted-foreground">{"72% approval"}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2">
                <h4 className="font-bold mb-4">{"Governance Statistics"}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold mb-1">{"47"}</div>
                    <div className="text-sm text-muted-foreground">{"Total Proposals"}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">{"2.8M"}</div>
                    <div className="text-sm text-muted-foreground">{"Active Voters"}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">{"94%"}</div>
                    <div className="text-sm text-muted-foreground">{"Avg Approval Rate"}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">{"$12M"}</div>
                    <div className="text-sm text-muted-foreground">{"Treasury Value"}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Join Section */}
      <section id="join" className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{"Join the Protocol"}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {
                "AlphaDAO welcomes contributors, builders, researchers, and community members who share our vision for decentralized education and credential infrastructure. Multiple pathways exist for participation based on your skills and interests."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-4">{"For Contributors"}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {
                  "Contribute to protocol development, educational content creation, community moderation, or governance participation. Contributors receive recognition through on-chain credentials and may qualify for ongoing compensation via grants and bounty programs."
                }
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Open-source development opportunities on core protocols"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Content creation for educational resources and documentation"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Community support and mentorship roles"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Governance proposal drafting and research"}</span>
                </li>
              </ul>
              <Button size="lg" className="w-full" asChild>
                <Link href="https://t.me/alphadao">
                  {"Join on Telegram"}
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-4">{"For Partners"}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {
                  "We collaborate with educational institutions, blockchain protocols, Web3 projects, and traditional enterprises seeking to leverage decentralized credential infrastructure. Partnership opportunities include co-branded certifications, integration support, and custom protocol implementations."
                }
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"White-label credential issuance for institutions"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Protocol integrations and technical collaboration"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Strategic advisory and governance participation"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{"Co-marketing and ecosystem development initiatives"}</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
                <Link href="mailto:partnerships@alphadao.xyz">{"Contact Partnerships Team"}</Link>
              </Button>
            </Card>
          </div>

          <div className="flex flex-col items-center gap-6">
            <p className="text-muted-foreground text-center">
              {"Connect with the AlphaDAO community across platforms"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="https://t.me/alphadao" className="gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {"Telegram"}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://twitter.com/alphadao" className="gap-2">
                  <Twitter className="h-5 w-5" />
                  {"Twitter"}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/alphadao" className="gap-2">
                  <Github className="h-5 w-5" />
                  {"GitHub"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
