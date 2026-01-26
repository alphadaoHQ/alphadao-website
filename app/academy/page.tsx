import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  Users,
  Code,
  Palette,
  MessageSquare,
  FileText,
  Award,
  TrendingUp,
  Briefcase,
  Shield,
  Globe,
  Rocket,
} from "lucide-react"

export default function AcademyPage() {
  return (
    <main className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/bng.jpg)' }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/85" />
      
      {/* Hero Section */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm mb-8 text-sm font-mono text-white">
              <GraduationCap className="w-4 h-4" />
              {"Education Division"}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-6 text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {"Learn. Build. Get Certified."}
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty mb-12 max-w-3xl mx-auto">
              {
                "AlphaDAO Academy equips individuals from any background with practical skills, real credentials, and access to opportunity in the Web3 and digital economy. Our structured learning pathways combine hands-on development, mentorship from protocol contributors, and verifiable skill certification through blockchain-based credentials."
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8 bg-primary hover:bg-primary/90">
                {"Join the Next Cohort"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                {"View Curriculum"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Academy Exists */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {"Why AlphaDAO Academy Exists"}
              </span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "The current education system fails to prepare individuals for the demands of the decentralized economy. AlphaDAO Academy bridges this gap with practical, community-driven learning."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 mb-4">
                <FileText className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Education is Fragmented"}
                </span>
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Learning resources are scattered across platforms with inconsistent quality, no clear pathways, and limited hands-on experience building real-world projects."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 mb-4">
                <Shield className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Credentials Lack Trust"}
                </span>
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Traditional certificates are easily forged and difficult to verify. Employers lack reliable methods to assess candidate skills beyond self-reported claims."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 mb-4">
                <Globe className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Talent is Undervalued Globally"}
                </span>
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Geographic location and institutional access limit opportunity. Skilled builders in emerging markets struggle to access global jobs despite possessing relevant competencies."
                }
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {"The AlphaDAO Academy Solution"}
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h4 className="font-bold mb-2 text-white">{"Practical Learning"}</h4>
                <p className="text-sm text-gray-200">
                  {"Structured curriculum focused on building real projects, not just consuming content."}
                </p>
              </Card>
              <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h4 className="font-bold mb-2 text-white">{"Verified Certification via Recertify"}</h4>
                <p className="text-sm text-gray-200">
                  {"Blockchain-based credentials that are tamper-proof, instantly verifiable, and portable."}
                </p>
              </Card>
              <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h4 className="font-bold mb-2 text-white">{"Community-Powered Growth"}</h4>
                <p className="text-sm text-gray-200">
                  {"Learn alongside peers, contribute to open-source, and gain access to the AlphaDAO network."}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {"Who the Academy Is For"}
              </span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Academy serves a diverse range of learners, from complete beginners to experienced professionals seeking to transition into Web3 and blockchain development."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Beginners (Zero Experience)"}
                </span>
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "No prior programming or blockchain knowledge required. Start from fundamentals and build competency through guided, incremental learning pathways."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Developers & Builders"}
                </span>
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Experienced programmers looking to transition into blockchain development, smart contract engineering, and decentralized application architecture."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Designers & Creators"}
                </span>
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Product designers, UI/UX professionals, and content creators seeking to understand Web3 product design, tokenomics, and decentralized user experiences."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Community Managers"}
                </span>
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Learn how DAOs function, governance mechanisms, community building strategies, and Web3-native communication and coordination tools."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Career Switchers"}
                </span>
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Professionals from traditional industries seeking to pivot into blockchain, DeFi, NFTs, and Web3 with structured guidance and mentorship."
                }
              </p>
            </Card>

            <Card className="p-6 border-2 border-white/30 bg-black/60 backdrop-blur-sm hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Students & Graduates"}
                </span>
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "University students and recent graduates looking to supplement academic learning with practical, job-ready skills in cutting-edge blockchain technology."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {"Learning Tracks"}
              </span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Academy offers specialized learning tracks designed to meet diverse skill-building goals. Tracks evolve with ecosystem demand and community input."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Web3 Fundamentals"}
                </span>
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "Introduction to blockchain technology, cryptographic principles, consensus mechanisms, wallets, and decentralized application architecture. Ideal for beginners with no prior blockchain experience."
                }
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Blockchain basics and cryptographic foundations"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Understanding wallets, keys, and transaction mechanics"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Introduction to DeFi, NFTs, and decentralized identity"}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {"Blockchain & TON Ecosystem"}
                </span>
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "Deep dive into The Open Network (TON) architecture, scalability solutions, and Telegram integration. Learn how to build on one of the fastest-growing blockchain ecosystems."
                }
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"TON blockchain architecture and sharding mechanics"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Building Telegram Mini Apps and bots"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Deploying dApps on TON with Telegram distribution"}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Smart Contracts (Tact / FunC)"}</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "Master smart contract development using TON's native languages. Learn security best practices, gas optimization, and contract testing methodologies."
                }
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Writing secure smart contracts in Tact and FunC"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Testing, debugging, and deploying contracts on TON"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Security audits and common vulnerability patterns"}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"DAO Operations & Governance"}</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "Understand how decentralized autonomous organizations function, governance mechanisms, treasury management, and community coordination strategies."
                }
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"DAO structures, voting mechanisms, and tokenomics"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Treasury management and on-chain governance"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Community building and decentralized coordination"}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Product & Startup Building"}</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "Learn how to ideate, validate, and launch Web3 products from concept to market. Covers product-market fit, go-to-market strategies, and fundraising in crypto."
                }
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Web3 product development and user research"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Tokenomics design and economic modeling"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Fundraising strategies and pitch preparation"}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{"Technical Writing & DevRel"}</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {
                  "Develop skills in technical documentation, developer relations, content creation, and community education—critical for growing Web3 ecosystems."
                }
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Writing clear technical documentation and tutorials"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Developer advocacy and community engagement"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{"Content marketing for Web3 protocols"}</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-sm text-gray-200 italic">
              {
                "Note: Tracks evolve with ecosystem demand. AlphaDAO Academy continuously updates curriculum based on industry needs and community feedback."
              }
            </p>
          </div>
        </div>
      </section>

      {/* How the Academy Works */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"How the Academy Works"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "A structured, six-step journey from enrollment to certification, designed to maximize learning outcomes and career opportunities."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Apply or Enroll",
                description:
                  "Submit an application with your learning goals and background. Some tracks require prerequisites; others are open to all. Admissions decisions prioritize commitment and alignment with program values.",
              },
              {
                step: "2",
                title: "Learn Through Structured Modules",
                description:
                  "Access curated learning materials, video lectures, code exercises, and live sessions. Modules are self-paced with recommended timelines to maintain cohort cohesion and peer collaboration.",
              },
              {
                step: "3",
                title: "Build Real Projects",
                description:
                  "Apply knowledge through hands-on project work. Build dApps, write smart contracts, or design DAO governance systems. Projects are reviewed by mentors and peers for feedback and iteration.",
              },
              {
                step: "4",
                title: "Pass Assessments",
                description:
                  "Demonstrate competency through quizzes, code reviews, and final capstone projects. Assessments ensure mastery of core concepts before certification is awarded.",
              },
              {
                step: "5",
                title: "Receive Verifiable Certification (NFT/SBT)",
                description:
                  "Successful graduates receive blockchain-based credentials via Recertify. Certificates are tamper-proof, instantly verifiable, and portable across platforms—proving your skills trustlessly.",
              },
              {
                step: "6",
                title: "Join AlphaDAO Talent Network",
                description:
                  "Access exclusive job boards, freelance opportunities, and DAO contributor roles. Connect with hiring partners, participate in ecosystem projects, and continue learning through advanced programs.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-4 text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification & Recertify */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm mb-6 text-xs font-mono uppercase tracking-wide text-white">
                {"Powered by Recertify"}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
                {"Certification & Recertify Integration"}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                {
                  "AlphaDAO Academy issues all certificates through Recertify, our blockchain-based credential system. This ensures your skills are verifiable, portable, and recognized globally without relying on centralized authorities or intermediaries."
                }
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{"Certificates Issued via Recertify"}</h4>
                    <p className="text-sm text-gray-200">
                      {
                        "All academy graduates receive NFT or Soulbound Token (SBT) credentials stored permanently on-chain."
                      }
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{"On-Chain Verification"}</h4>
                    <p className="text-sm text-gray-200">
                      {
                        "Employers and institutions verify your credentials instantly by querying the blockchain—no need to contact AlphaDAO."
                      }
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{"Portable Across Platforms"}</h4>
                    <p className="text-sm text-gray-200">
                      {
                        "Your credentials follow you wherever you go—LinkedIn profiles, job applications, DAO governance systems, and more."
                      }
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{"Trusted by Partners & Employers"}</h4>
                    <p className="text-sm text-gray-200">
                      {
                        "Our ecosystem partners and hiring companies recognize Recertify credentials as trustworthy proof of competency."
                      }
                    </p>
                  </div>
                </li>
              </ul>
              <div className="p-6 rounded-xl border-2 border-primary/20 bg-primary/5">
                <p className="text-lg font-semibold text-balance text-white">{"Your skills become verifiable assets."}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl border-2 border-white/30 bg-black/60 backdrop-blur-sm p-8 shadow-2xl">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-200 uppercase tracking-wide font-mono">
                          {"Academy Graduate"}
                        </div>
                        <div className="font-semibold text-white">{"Smart Contract Development"}</div>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-200">{"Issued by"}</span>
                        <span className="font-mono text-white">{"AlphaDAO Academy"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-200">{"Track"}</span>
                        <span className="font-mono text-white">{"Tact / FunC"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-200">{"Cohort"}</span>
                        <span className="font-mono text-white">{"2025 Q1"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-200">{"Credential ID"}</span>
                        <span className="font-mono text-white">{"#0xc7a3..."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-white">{"Blockchain Verified"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-white">{"Soulbound Token"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-white">{"Globally Portable"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn-to-Earn */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Learn-to-Earn & Participation"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Academy offers multiple incentive mechanisms to reward learners, support contributors, and ensure accessible education for all backgrounds."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Scholarships"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Need-based and merit-based scholarships cover academy fees for talented individuals from underserved regions or backgrounds, ensuring access is not limited by financial constraints."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Bounties"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Earn rewards by completing specific tasks: writing tutorials, building open-source tools, improving curriculum, or solving ecosystem challenges posted by AlphaDAO or partners."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Learn-to-Earn Rewards"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Select cohorts feature learn-to-earn programs where participants receive token rewards for completing milestones, contributing to projects, or achieving learning targets."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Reputation-Based Access"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Your on-chain credentials unlock access to advanced courses, exclusive events, and premium opportunities within the AlphaDAO ecosystem and partner networks."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"DAO Participation Pathways"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Academy graduates gain early access to AlphaDAO governance proposals, contributor roles, and community leadership opportunities, fostering long-term engagement."
                }
              </p>
            </Card>

            <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">{"Peer-to-Peer Learning"}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {
                  "Join study groups, hackathons, and collaborative projects. Learn alongside peers, build networks, and earn recognition for contributions to cohort success."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes & Opportunities */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Outcomes & Opportunities"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Academy graduates gain access to a wide range of career opportunities, from employment at Web3 companies to building their own startups or contributing to DAOs."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">{"Portfolio-Ready Projects"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Graduate with a portfolio of real-world projects: dApps, smart contracts, DAO governance proposals, technical documentation, and more. Showcase your work to employers and clients with verifiable on-chain credentials."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <Briefcase className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">{"Access to Jobs and Gigs"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Join our exclusive talent network connecting graduates with hiring partners, freelance opportunities, and contract work in Web3. Partners include DAOs, startups, protocols, and established blockchain companies."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">{"DAO Contributor Roles"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Become a contributor to AlphaDAO or partner DAOs. Participate in governance, earn bounties, lead working groups, and help shape the future of decentralized organizations."
                }
              </p>
            </Card>

            <Card className="p-8 border-white/30 bg-black/60 backdrop-blur-sm">
              <Rocket className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">{"Startup Incubation"}</h3>
              <p className="text-gray-200 leading-relaxed">
                {
                  "Selected graduates gain access to AlphaDAO's startup incubation program, receiving mentorship, funding consideration from AlphaDAO Foundation, and support launching Web3 ventures."
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Partners & Sponsors"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {
                "AlphaDAO Academy collaborates with ecosystem partners, institutions, communities, and sponsors who help shape curriculum, provide resources, and hire talent."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {["Ecosystem Partners", "Communities", "Institutions", "Sponsors"].map((item) => (
              <Card key={item} className="p-8 text-center border-white/30 bg-black/60 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-muted mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-bold text-white">{item}</h3>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-200 leading-relaxed italic">
              {
                "Note: Partners help shape curriculum, provide mentorship, offer job opportunities, and support scholarship programs. Interested in partnering with AlphaDAO Academy? Contact us to learn more."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Academy History */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{"Academy History & Credibility"}</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              {
                "AlphaDAO Academy launched in early 2025 with a mission to bridge the global skills gap in blockchain development and Web3 competencies. Since inception, we've continuously iterated based on learner feedback, industry demand, and technological advances."
              }
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
                <h4 className="font-bold mb-2 text-white">{"First Academy Launched in Early 2025"}</h4>
                <p className="text-sm text-gray-200">
                  {"Inaugural cohort focused on TON blockchain development and Telegram Mini Apps."}
                </p>
              </Card>
              <Card className="p-6 border-white/30 bg-black/60 backdrop-blur-sm">
                <h4 className="font-bold mb-2 text-white">{"Continuous Iteration"}</h4>
                <p className="text-sm text-gray-200">
                  {
                    "Curriculum evolves rapidly based on learner outcomes, partner feedback, and ecosystem developments."
                  }
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-2">{"Community-Driven Improvements"}</h4>
                <p className="text-sm text-muted-foreground">
                  {"Graduates and mentors contribute to curriculum design, ensuring relevance and quality."}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 text-white">
              {"Build Skills That Matter."}
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty mb-12">
              {
                "Join AlphaDAO Academy and gain the practical skills, verifiable credentials, and career opportunities needed to thrive in the Web3 economy."
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8">
                {"Apply Now"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                {"Become a Partner"}
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                {"Sponsor a Cohort"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
