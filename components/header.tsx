"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [joinDropdownOpen, setJoinDropdownOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Academy", href: "/academy" },
    { label: "Labs", href: "/labs" },
    { label: "Governance", href: "/governance" },
    { label: "NFTs", href: "/nfts" },
    { label: "Whitepaper", href: "/ALPHA DAO Whitepaper.pdf", external: true },
  ]


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <img src="/new-logo.png" alt="AlphaDAO" className="w-8 h-8" />
          {"AlphaDAO"}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                  isActive 
                    ? "text-purple-400 bg-purple-500/10" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          
          {/* Products Dropdown */}
          <div className="relative">
            <button
              className="px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted text-muted-foreground hover:text-foreground flex items-center gap-1"
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
            >
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
            {productsDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg min-w-[150px]">
                <Link
                  href="/recertify"
                  className="block px-4 py-2 text-sm font-medium transition-colors hover:bg-muted text-muted-foreground hover:text-foreground"
                  onClick={() => setProductsDropdownOpen(false)}
                >
                  Recertify
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 relative">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setJoinDropdownOpen(!joinDropdownOpen)}
            className="flex items-center gap-1"
          >
            {"Join"}
            <ChevronDown className="h-4 w-4" />
          </Button>
          {joinDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 bg-background border border-border rounded-md shadow-lg min-w-[200px] z-50 py-2">
              <a href="https://t.me/AlphaDaoHub" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-muted" onClick={() => setJoinDropdownOpen(false)}>Telegram</a>
              <a href="https://discord.gg/Scy6spQxf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-muted" onClick={() => setJoinDropdownOpen(false)}>Discord</a>
              <a href="https://x.com/Alpha_Daos" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-muted" onClick={() => setJoinDropdownOpen(false)}>X (Alpha DAOs)</a>
              <a href="https://x.com/AlphaDAOLabs" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-muted" onClick={() => setJoinDropdownOpen(false)}>X (AlphaDAO Labs)</a>
              <a href="https://www.linkedin.com/company/alpha-daos/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-muted" onClick={() => setJoinDropdownOpen(false)}>LinkedIn</a>
              <a href="https://youtube.com/@officialalphadao?si=wFUx-5SsS-oczEOF" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-muted" onClick={() => setJoinDropdownOpen(false)}>YouTube</a>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                    isActive 
                      ? "text-purple-400 bg-purple-500/10" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/about"
              className="block px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/recertify"
              className="block px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recertify
            </Link>
            <div className="pt-4 border-t border-border">
              <div className="font-medium text-sm text-muted-foreground px-4 mb-2">Join the Community</div>
              <div className="grid grid-cols-2 gap-2 px-4">
                <a href="https://t.me/AlphaDaoHub" target="_blank" rel="noopener noreferrer" className="text-sm py-2 hover:text-foreground text-muted-foreground">Telegram</a>
                <a href="https://discord.gg/Scy6spQxf" target="_blank" rel="noopener noreferrer" className="text-sm py-2 hover:text-foreground text-muted-foreground">Discord</a>
                <a href="https://x.com/Alpha_Daos" target="_blank" rel="noopener noreferrer" className="text-sm py-2 hover:text-foreground text-muted-foreground">X (Alpha DAOs)</a>
                <a href="https://x.com/AlphaDAOLabs" target="_blank" rel="noopener noreferrer" className="text-sm py-2 hover:text-foreground text-muted-foreground">X (Labs)</a>
                <a href="https://www.linkedin.com/company/alpha-daos/" target="_blank" rel="noopener noreferrer" className="text-sm py-2 hover:text-foreground text-muted-foreground">LinkedIn</a>
                <a href="https://youtube.com/@officialalphadao?si=wFUx-5SsS-oczEOF" target="_blank" rel="noopener noreferrer" className="text-sm py-2 hover:text-foreground text-muted-foreground">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
