"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Compass, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/30 mb-6 text-xs font-mono uppercase tracking-wide">
              {"About the Protocol"}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-8">
              {"AlphaDAO: Decentralized Infrastructure for Education and Credentialing"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {
                "AlphaDAO represents a fundamental reimagining of how educational infrastructure, professional credentials, and skill verification systems are built and governed. Founded on principles of decentralization, transparency, and community ownership, we develop protocol-level solutions that enable trustless credential issuance, verifiable skill attestation, and composable reputation systems for the Web3 ecosystem and beyond."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Team Avatars Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">{"Our Team"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Driven by builders, researchers, and educators passionate about decentralized infrastructure"}
            </p>
          </div>
          
          <style jsx>{`
            .avatar-container {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 2rem 0;
            }
            
            .avatar-wrapper {
              position: relative;
              transition: transform 0.3s ease;
            }
            
            .avatar-wrapper:hover {
              transform: translateY(-12px) scale(1.1);
              z-index: 10;
            }
            
            .avatar-circle {
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              border: 4px solid hsl(var(--background));
              background: hsl(var(--muted));
              overflow: hidden;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
              transition: box-shadow 0.3s ease;
            }
            
            .avatar-wrapper:hover .avatar-circle {
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
            }
            
            .avatar-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          `}</style>

          <div className="avatar-container">
            {/* Avatar 1 */}
            <div className="avatar-wrapper" style={{ marginLeft: '-25px' }}>
              <div className="avatar-circle" style={{ width: '80px', height: '80px' }}>
                <img
                  src="/placeholder-user.jpg"
                  alt="Team member 1"
                  className="avatar-image"
                />
              </div>
            </div>

            {/* Avatar 2 */}
            <div className="avatar-wrapper" style={{ marginLeft: '-25px' }}>
              <div className="avatar-circle" style={{ width: '100px', height: '100px' }}>
                <img
                  src="/placeholder-user.jpg"
                  alt="Team member 2"
                  className="avatar-image"
                />
              </div>
            </div>

            {/* Avatar 3 */}
            <div className="avatar-wrapper" style={{ marginLeft: '-25px' }}>
              <div className="avatar-circle" style={{ width: '110px', height: '110px' }}>
                <img
                  src="/placeholder-user.jpg"
                  alt="Team member 3"
                  className="avatar-image"
                />
              </div>
            </div>

            {/* Avatar 4 */}
            <div className="avatar-wrapper" style={{ marginLeft: '-25px' }}>
              <div className="avatar-circle" style={{ width: '100px', height: '100px' }}>
                <img
                  src="/placeholder-user.jpg"
                  alt="Team member 4"
                  className="avatar-image"
                />
              </div>
            </div>

            {/* Avatar 5 */}
            <div className="avatar-wrapper" style={{ marginLeft: '-25px' }}>
              <div className="avatar-circle" style={{ width: '80px', height: '80px' }}>
                <img
                  src="/placeholder-user.jpg"
                  alt="Team member 5"
                  className="avatar-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">{"Origin and Mission"}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {
                    "AlphaDAO emerged from recognition of systemic failures in traditional credentialing systems: centralized control by gatekeeping institutions, lack of interoperability between platforms, absence of cryptographic verification, and limited accessibility for global populations. These structural inefficiencies create friction in labor markets, reduce trust in educational qualifications, and prevent individuals from truly owning their professional identities."
                  }
                </p>
                <p>
                  {
                    "Our mission is to establish decentralized infrastructure that returns control of credentials and reputation to individuals while providing institutions with more secure, verifiable, and efficient certification systems. By leveraging blockchain technology, cryptographic proofs, and decentralized governance, we enable a future where professional qualifications are portable across platforms, verifiable without intermediaries, and controlled by credential holders rather than issuing authorities."
                  }
                </p>
                <p>
                  {
                    "AlphaDAO operates as a public good protocol—our infrastructure benefits the entire Web3 ecosystem while remaining financially sustainable through strategic treasury management, grant funding, and value-aligned partnerships. We prioritize long-term protocol development over short-term extraction, ensuring AlphaDAO serves builder communities for decades to come."
                  }
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 border-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{"Core Mission"}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {
                        "Build decentralized infrastructure for verifiable credentials, skill certification, and reputation systems that serve the global Web3 ecosystem."
                      }
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Compass className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{"Strategic Vision"}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {
                        "Establish AlphaDAO as the trusted protocol for on-chain credentials, enabling permissionless professional identity and trustless skill verification globally."
                      }
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{"Operational Approach"}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {
                        "Balance rapid innovation with protocol sustainability through transparent governance, progressive decentralization, and community-aligned development practices."
                      }
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{"Operating Principles"}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {
                "AlphaDAO adheres to foundational principles that guide protocol development, governance decisions, and community interactions. These principles ensure alignment with our mission while maintaining operational flexibility."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">{"Decentralization by Design"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "We architect systems to minimize central points of control and maximize community participation. Progressive decentralization ensures stability during protocol maturation while maintaining commitment to eventual full community governance."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">{"Transparency as Default"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "All governance proposals, treasury transactions, development decisions, and partnership agreements occur with full community visibility. We publish regular reports on protocol health, financial status, and strategic direction."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">{"Community Ownership"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "AlphaDAO belongs to its community of contributors, token holders, and ecosystem participants. Value generated by the protocol accrues to the community rather than extractive intermediaries or centralized entities."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">{"Public Good Orientation"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "Our infrastructure serves the broader Web3 ecosystem. We prioritize open-source development, permissionless access, and protocol composability to maximize positive externalities for builders globally."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">{"Long-Term Sustainability"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "We optimize for decades of operation rather than short-term extraction. Treasury management, protocol economics, and governance structures prioritize multi-decade sustainability and continuous value creation."
                }
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">{"Verifiable Execution"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "Claims about protocol functionality, governance outcomes, and credential validity are cryptographically verifiable. We build systems that enable trustless verification rather than requiring faith in authorities."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24 lg:py-32 text-center">
          <h2 className="text-3xl font-bold mb-6">{"Join the Protocol"}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {
              "AlphaDAO welcomes contributors who share our vision for decentralized education infrastructure. Participate in governance, contribute to protocol development, or engage with our community of builders."
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/#join">
                {"Join the Community"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/governance">{"View Governance"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
