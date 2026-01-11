import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Users, Vote, FileText, Lock, TrendingUp, AlertCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function GovernancePage() {
  return (
    <div className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/grok_image_oatei0.jpg)' }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/85" />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Transparent Governance. Sustainable Innovation.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AlphaDAO Labs operates under a progressive governance model that balances founder leadership, community
                participation, and institutional accountability.
              </p>
            </div>
          </div>
        </section>

        {/* Governance Overview */}
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
                <p>
                  AlphaDAO is a DAO-aligned organization designed to evolve from focused early execution to
                  community-driven governance over time. Unlike projects that prematurely decentralize and compromise
                  execution speed, we embrace a staged governance approach that prioritizes sustainable growth.
                </p>
                <p>
                  Our governance model acknowledges that early-stage execution requires decisive leadership while
                  maintaining transparency and accountability to the community. As the protocol matures, governance
                  authority progressively shifts from founder stewardship to community ownership through token-based
                  mechanisms.
                </p>
                <p>
                  This phased approach ensures we build strong foundations before distributing control, preventing the
                  governance paralysis that plagues many DAOs while maintaining alignment with decentralization
                  principles.
                </p>
              </div>

              <Card className="border-2 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <p className="text-xl font-semibold">
                    "Governance is designed to mature, not rush decentralization."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Governance Principles */}
        <section className="py-24 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Governance Principles</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our governance framework is built on five core principles that guide decision-making and organizational
                evolution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <FileText className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Transparency by Default</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All major decisions, financial activities, and strategic plans are documented and shared publicly.
                    Community members have visibility into governance processes and organizational operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <Shield className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Accountability Over Anonymity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Key decision-makers are publicly identified and held accountable for their actions. We reject
                    anonymous leadership while respecting privacy for individual contributors.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <Users className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Community-Aligned Incentives</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Leadership and contributor incentives are structured to align with long-term community value
                    creation rather than short-term extraction.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <TrendingUp className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Long-Term Sustainability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Governance decisions prioritize sustainable growth over rapid expansion. We build for decades, not
                    hype cycles.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <Vote className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Open Participation with Safeguards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Community participation is encouraged and accessible, but governance includes safeguards against
                    plutocracy, short-term thinking, and hostile actions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Governance Structure</h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                AlphaDAO's governance structure is designed to balance execution speed with community input. Different
                roles carry distinct responsibilities and authorities.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Founder / Executive Steward</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Holds primary decision-making authority during the early stage. Responsible for vision setting,
                        execution oversight, product leadership, and operational management. Acts as the primary
                        accountable party to the community.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Authority: Vision, execution, product direction, resource allocation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Core Contributors</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Experienced team members responsible for day-to-day execution across engineering, operations,
                        growth, and research. Core contributors advise on major decisions and lead specific functional
                        areas with significant autonomy.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Authority: Functional leadership, tactical execution, team management
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Advisory Council</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Advisors with deep expertise in relevant domains provide strategic guidance, ecosystem
                        connections, and external perspective. Advisory council does not hold formal authority but
                        influences direction through expertise.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Authority: Strategic advice, ecosystem guidance, compliance expertise
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Vote className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Community Members</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        All AlphaDAO participants can propose ideas, participate in discussions, and cast signaling
                        votes. Community feedback directly informs strategic decisions. Active contributors gain
                        increased influence through reputation mechanisms.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Authority: Proposals, discussions, signaling votes, community moderation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-muted/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Future: DAO Assembly</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        In the mature stage, token-based governance will enable binding on-chain decisions. The DAO
                        Assembly will control treasury allocation, approve major strategic shifts, and elect stewards
                        for specific functions. This stage activates after successful product-market fit and sustainable
                        revenue.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Future Authority: Treasury, strategic approval, steward elections
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Decision-Making Process */}
        <section className="py-24 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Decision-Making Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Our governance workflow balances speed with community input through a structured five-step process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Proposal Drafted",
                    description:
                      "Proposals can originate from the founder, core contributors, or community members. Each proposal includes clear objectives, rationale, resource requirements, and success metrics. Proposals are posted in governance forums for review.",
                  },
                  {
                    step: "2",
                    title: "Community Discussion",
                    description:
                      "Open discussion period in forums and Telegram channels. Community members provide feedback, ask questions, and suggest modifications. Discussion length varies based on proposal significance—routine matters may have shorter discussion periods.",
                  },
                  {
                    step: "3",
                    title: "Snapshot Signaling Vote",
                    description:
                      "Off-chain voting via Snapshot to gauge community sentiment. Votes are weighted by reputation or token holdings (when applicable). Signaling votes inform but do not bind decision-makers during early stage.",
                  },
                  {
                    step: "4",
                    title: "Execution by Core Team",
                    description:
                      "Founder or designated core contributors implement approved proposals. Execution includes progress updates, milestone tracking, and documentation. Community is notified of major implementation decisions.",
                  },
                  {
                    step: "5",
                    title: "On-Chain Governance (Future)",
                    description:
                      "Once token-based governance activates, binding on-chain votes will replace signaling votes for treasury and major strategic decisions. Smart contract execution ensures transparent implementation.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-2 bg-primary/5 mt-8">
                <CardContent className="p-6">
                  <p className="text-sm font-medium flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>
                      Note: Until token issuance, governance uses off-chain signaling for transparency while maintaining
                      execution speed. This approach prevents governance theater while building real community
                      participation.
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Role & Transition */}
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Founder Role & Transition</h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
                <p>
                  The founder serves as executive steward during AlphaDAO's early stage, holding primary decision-making
                  authority to ensure focused execution and rapid iteration. This centralized leadership is temporary
                  and intentional, designed to build strong foundations before distributing control.
                </p>
                <p>
                  As the protocol matures and achieves key milestones, founder authority progressively reduces.
                  Strategic decisions shift to community governance, operational control transfers to elected stewards,
                  and treasury management moves to on-chain mechanisms.
                </p>
                <p>
                  This transition follows predefined milestones including sustainable product-market fit, established
                  revenue streams, mature governance processes, and successful token distribution. The shift is gradual
                  and reversible if governance proves unstable.
                </p>
              </div>

              <Card className="border-2 bg-primary/5">
                <CardContent className="p-8">
                  <p className="text-xl font-semibold mb-4">
                    "Founder control is intentional, temporary, and accountable."
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike projects where founders retain permanent control or prematurely abandon responsibility,
                    AlphaDAO's governance structure explicitly defines when and how founder authority transitions to the
                    community. This approach prioritizes long-term protocol health over governance aesthetics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transparency & Reporting */}
        <section className="py-24 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transparency & Reporting</h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Transparency is not optional—it's a core operating principle. AlphaDAO commits to comprehensive public
                reporting across all major activities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Public Roadmap</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Detailed product roadmap updated quarterly with clear milestones, timelines, and responsible
                    parties. Community can track progress and hold teams accountable to stated goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Regular Progress Updates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Monthly community updates covering product development, governance decisions, partnership
                    developments, and operational metrics. Updates are posted publicly in forums and community channels.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Treasury Transparency</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When applicable, full treasury transparency with on-chain tracking of funds. Community can view
                    allocations, expenditures, and reserves in real-time through public dashboards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Governance Decisions Logged</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All governance proposals, voting results, and implementation outcomes are permanently logged and
                    accessible. This creates an immutable record of organizational evolution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Risk Management & Safeguards</h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
                <p>
                  AlphaDAO's governance includes multiple safeguards to protect against common DAO failure modes
                  including hostile takeovers, plutocratic control, and governance paralysis.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">No Anonymous Unilateral Control</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Key decision-makers are publicly identified. No single anonymous party can control critical
                      functions. Accountability requires identity transparency for leadership roles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Multi-Sig Execution (Future)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Treasury and critical smart contract operations will require multi-signature approval. No single
                      party can execute high-value transactions unilaterally once on-chain governance activates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Proposal Thresholds</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Minimum reputation or token thresholds prevent spam proposals and low-effort governance attacks.
                      Thresholds are calibrated to enable legitimate participation while filtering noise.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Gradual Decentralization</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Progressive authority transfer based on maturity milestones. If governance proves unstable at any
                      stage, authority can temporarily revert to ensure protocol survival and course correction.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Built for the Long Term</h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                AlphaDAO's governance model prioritizes sustainable growth, transparent accountability, and progressive
                decentralization. We're building institutions, not experiments.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/#join">
                    Join Governance Discussions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About AlphaDAO</Link>
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
