import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FlaskConical, Code2, Lightbulb, Users, CheckCircle2, Blocks, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">AlphaDAO Labs</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Research, Product Development, and Web3 Infrastructure
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                AlphaDAO Labs is the research and development arm of AlphaDAO, responsible for designing, building, and
                maintaining community-owned products and protocols. We focus on building real, production-grade Web3
                products that solve tangible problems for builders, organizations, and communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#products">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#contribute">Become a Contributor</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                AlphaDAO Labs operates at the intersection of research, engineering, and community collaboration. Our
                work spans protocol design, smart contract development, infrastructure building, and applied Web3
                research.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <FlaskConical className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Protocol & Smart Contract Research</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We design and audit smart contract architectures, explore on-chain mechanisms, and conduct technical
                    research on blockchain primitives. Our research informs production implementations and contributes
                    to the broader Web3 knowledge base.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <Code2 className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Product Engineering & Infrastructure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We build full-stack Web3 applications, smart contracts, APIs, and developer tools. Our engineering
                    team ships production-grade code with emphasis on security, scalability, and maintainability across
                    multiple blockchain ecosystems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <Lightbulb className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Applied Research & Experimentation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We prototype new ideas, test emerging technologies, and validate product hypotheses through rapid
                    experimentation. Our applied research methodology balances innovation with pragmatic execution to
                    identify viable product directions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <Users className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Open-Source & Community Collaboration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We build in public and embrace open-source principles. Labs work is documented, shared, and
                    accessible to the community. We actively collaborate with contributors, researchers, and partner
                    projects across the Web3 ecosystem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Flagship Product Section */}
        <section id="products" className="py-24 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Blocks className="h-4 w-4" />
                  Flagship Product
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Recertify</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A blockchain-based certification and reputation system using NFTs and Soulbound Tokens (SBTs) to
                  issue, verify, and manage credentials on-chain.
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="p-10">
                  <p className="text-lg mb-8 leading-relaxed">
                    Recertify solves credential fraud and verification inefficiency by leveraging blockchain technology
                    for tamper-proof, instantly verifiable digital certificates. Built on the TON blockchain and
                    distributed via Telegram Mini Apps, Recertify serves educational institutions, professional
                    organizations, and Web3 projects.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Fraud-Proof Credentials:</span>
                        <span className="text-muted-foreground ml-2">
                          Certificates stored on-chain cannot be forged or tampered with
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Instant Verification:</span>
                        <span className="text-muted-foreground ml-2">
                          Anyone can verify authenticity without contacting the issuer
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Revocable & Renewable:</span>
                        <span className="text-muted-foreground ml-2">
                          Certificates can be revoked for misconduct or renewed for continued validity
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Telegram Mini App Distribution:</span>
                        <span className="text-muted-foreground ml-2">
                          Accessible directly within Telegram for seamless user experience
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <Link href="/recertify">
                      View Recertify <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How Labs Works Section */}
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Labs Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Our product development process is systematic, transparent, and community-informed. From initial
                research to ongoing maintenance, we follow a structured workflow that balances speed with quality.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Research & Problem Discovery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identify real problems through community feedback, market research, and technical analysis. Define
                  clear problem statements and success criteria.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Prototyping & Testing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build rapid prototypes, conduct technical validation, and gather early user feedback. Iterate quickly
                  to find product-market fit before full development.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Product Launch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ship production-grade code with comprehensive documentation, security audits (where applicable), and
                  go-to-market strategy execution.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Iteration & Maintenance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continuous improvement based on usage data, community requests, and technical evolution. Long-term
                  support and feature development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technology Stack</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We build with modern, battle-tested technologies across blockchain and Web3 infrastructure. Our stack
                prioritizes developer experience, security, and scalability.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
              {[
                "TON Blockchain",
                "Telegram Mini Apps",
                "Tact / FunC",
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Solidity",
                "Hardhat",
                "Ethers.js",
                "Open-source tooling",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 rounded-full border-2 border-border bg-background font-medium hover:border-primary transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration & Contribution Section */}
        <section id="contribute" className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Collaboration & Contribution</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AlphaDAO Labs is open to builders, researchers, and designers who want to contribute to community-owned
                Web3 infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Who Can Contribute</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Smart contract developers and blockchain engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Full-stack developers familiar with Web3 technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Researchers working on protocol design and mechanism theory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Product designers and UX specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Technical writers and documentation specialists</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Contribution Mechanisms</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Working groups for ongoing projects and research initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bounties for specific features, bug fixes, and improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Grants for larger independent research and development work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Skill-based participation through AlphaDAO Bootcamp graduates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Reputation-based access to advanced projects and leadership roles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 max-w-5xl mx-auto mb-10">
              <CardContent className="p-10">
                <h3 className="text-2xl font-semibold mb-4">Integration with AlphaDAO Bootcamp</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Labs actively collaborates with AlphaDAO Bootcamp to create real-world learning opportunities.
                  Bootcamp participants work on actual Labs projects, contribute to production code, and gain hands-on
                  experience building Web3 products.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Top performers in Bootcamp are invited to join Labs working groups, receive mentorship from core
                  contributors, and potentially transition into full-time roles as Labs evolves. This creates a talent
                  pipeline that benefits both individual contributors and the broader AlphaDAO ecosystem.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#join">
                  Contribute to Labs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://t.me/alphadao">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Telegram
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Governance & Alignment Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Governance & Alignment</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  AlphaDAO Labs operates under AlphaDAO governance, ensuring that product roadmaps and resource
                  allocation align with community priorities and long-term protocol sustainability.
                </p>
                <p>
                  Major product decisions, funding requests, and strategic direction are subject to community review
                  through governance forums and signaling votes. Labs maintains transparency through public roadmaps,
                  progress updates, and open documentation of technical decisions.
                </p>
                <p>
                  Accountability is enforced through quarterly performance reviews, milestone-based funding, and
                  community oversight. This governance structure ensures Labs remains aligned with AlphaDAO's mission
                  while maintaining operational efficiency.
                </p>
              </div>

              <div className="mt-10">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/governance">
                    Learn About Governance <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
