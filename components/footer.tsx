import Link from "next/link"
import { Github, MessageSquare, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
<Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <img src="/new-logo.png" alt="AlphaDAO" className="w-8 h-8" />
              {"AlphaDAO"}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {
                "A decentralized autonomous organization building skills, products, and community-owned infrastructure for the Web3 ecosystem."
              }
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{"Protocol"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"About AlphaDAO"}
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Labs"}
                </Link>
              </li>
              <li>
                <Link href="/recertify" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Recertify"}
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Governance"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{"Community"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
<Link href="/academy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Academy"}
                </Link>
              </li>
              <li>
                <Link href="/foundation" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Foundation"}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Blog"}
                </Link>
              </li>
              <li>
                <Link href="/#join" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Join the DAO"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{"Connect"}</h3>
            <div className="flex items-center gap-3">
              <Link
                href="https://t.me/alphadao"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Telegram"
              >
                <MessageSquare className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/alphadao"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/alphadao"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{"© 2026 AlphaDAO Protocol. All rights reserved."}</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              {"Terms"}
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              {"Privacy"}
            </Link>
            <Link href="/docs" className="hover:text-foreground transition-colors">
              {"Documentation"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
