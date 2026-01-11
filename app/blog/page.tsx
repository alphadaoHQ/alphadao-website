"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  BookOpen,
  TrendingUp,
  Zap,
  Star,
  Filter,
  Search,
  ChevronRight,
  Globe,
} from "lucide-react"
import { useState } from "react"

const categories = [
  { name: "All", count: 24 },
  { name: "Web3", count: 8 },
  { name: "DeFi", count: 6 },
  { name: "Education", count: 5 },
  { name: "Governance", count: 3 },
  { name: "Infrastructure", count: 2 },
]

const featuredPosts = [
  {
    id: 1,
    title: "The Future of Decentralized Education: How AlphaDAO is Revolutionizing Learning",
    excerpt: "Exploring how blockchain technology and DAOs are transforming traditional education models, creating new opportunities for learners worldwide.",
    author: "Alex Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    views: "2.4k",
    likes: 156,
    category: "Education",
    image: "/grok_image_oatei0.jpg",
    trending: true,
  },
  {
    id: 2,
    title: "Building Sustainable Web3 Communities: Lessons from AlphaDAO's Growth",
    excerpt: "Deep dive into the strategies and principles that have driven AlphaDAO's community growth and engagement in the decentralized ecosystem.",
    author: "Sarah Kim",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    views: "1.8k",
    likes: 124,
    category: "Web3",
    image: "/home-bng.jpg",
    trending: false,
  },
]

const blogPosts = [
  {
    id: 3,
    title: "Governance in Practice: How AlphaDAO Makes Decisions",
    excerpt: "An inside look at our governance processes, voting mechanisms, and how community members can participate in shaping the future.",
    author: "Michael Rodriguez",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    views: "1.2k",
    likes: 89,
    category: "Governance",
    image: "/bng-body.jpg",
  },
  {
    id: 4,
    title: "DeFi Infrastructure: Building the Financial Future",
    excerpt: "Exploring the technical foundations of decentralized finance and how AlphaDAO contributes to this revolutionary ecosystem.",
    author: "Emma Thompson",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    views: "956",
    likes: 67,
    category: "DeFi",
    image: "/grok_image_oatei0.jpg",
  },
  {
    id: 5,
    title: "Smart Contract Security: Best Practices for Developers",
    excerpt: "Essential security considerations and best practices for building robust smart contracts in the Web3 ecosystem.",
    author: "David Park",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    views: "1.5k",
    likes: 112,
    category: "Infrastructure",
    image: "/home-bng.jpg",
  },
  {
    id: 6,
    title: "The Economics of Token Distribution in DAOs",
    excerpt: "Analyzing different token distribution models and their impact on community governance and long-term sustainability.",
    author: "Lisa Wang",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    views: "834",
    likes: 45,
    category: "Web3",
    image: "/bng-body.jpg",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/grok_image_oatei0.jpg)' }}>
      <div className="absolute inset-0 bg-black/85" />
      
      {/* Hero Section */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm mb-8 text-sm font-mono text-white">
              <BookOpen className="w-4 h-4" />
              {"AlphaDAO Insights"}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-6 text-white">
              {"Thoughts on Web3,"}
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {"Education & Innovation"}
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty mb-12 max-w-3xl mx-auto">
              {"Explore insights, tutorials, and deep dives into the future of decentralized technology, education, and community building from the AlphaDAO team and contributors."}
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.name
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-black/40 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/10"
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Featured Articles</h2>
              <p className="text-gray-400">{"Don't miss these trending insights"}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-white/20 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="relative overflow-hidden">
                  <div 
                    className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.trending && (
                      <Badge className="bg-red-500/90 text-white border-0">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    <Badge className="bg-purple-500/90 text-white border-0">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </div>
                    </div>
                    <Button size="sm" className="bg-purple-500 hover:bg-purple-600 text-white">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Latest Insights</h2>
                <p className="text-gray-400">{"Fresh perspectives from our community"}</p>
              </div>
            </div>
            <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-white/20 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
                <div className="relative overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-purple-500/90 text-white border-0 text-xs">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-1">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3">
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm mb-8 text-sm font-mono text-white">
              <Globe className="w-4 h-4" />
              {"Stay Connected"}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {"Never Miss an Update"}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {"Get the latest insights, tutorials, and announcements delivered straight to your inbox."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 mt-4">
              {"No spam, unsubscribe at any time. We respect your privacy."}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}