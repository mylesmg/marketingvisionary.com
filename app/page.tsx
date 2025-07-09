import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowRight, Users, TrendingUp, Clock, Shield, Zap, Search } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <img src="/logo-final.png" alt="Marketing Visionary" className="h-12 object-contain" />
              <span className="text-xl font-semibold text-gray-900">Marketing Visionary</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                <span>Product</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                <span>Solutions</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Resources</span>
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Enterprise</span>
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Pricing</span>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search or jump to..."
                className="pl-10 bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 w-64 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              Sign in
            </Button>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#21262d] overflow-hidden">
        {/* GitHub-style gradient background with glowing orbs */}
        <div className="absolute inset-0">
          {/* Large gradient orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/25 via-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/20 via-purple-500/15 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

          {/* Smaller floating orbs */}
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-gradient-to-r from-white/20 to-blue-300/30 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-60 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-300/25 to-pink-300/20 rounded-full blur-xl animate-bounce delay-500"></div>
          <div className="absolute bottom-40 right-1/5 w-20 h-20 bg-gradient-to-r from-cyan-300/30 to-blue-300/25 rounded-full blur-xl animate-bounce delay-1000"></div>

          {/* Subtle mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-pink-900/10"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            From Brief to Publish-Ready Assets in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hours, Not Weeks
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Replace your freelancer chaos with AI-powered marketing that delivers expert results at enterprise scale—for
            80% less.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-2xl mx-auto">
            <div className="flex-1 w-full sm:w-auto">
              <Input
                placeholder="Enter your email"
                className="bg-[#21262d] border-gray-600 text-white placeholder-gray-400 h-12 text-lg backdrop-blur-sm"
              />
            </div>
            <Button
              size="lg"
              className="bg-[#238636] hover:bg-[#2ea043] text-white h-12 px-8 whitespace-nowrap shadow-lg shadow-green-500/25"
            >
              Get Your Custom ROI Report
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 h-12 px-8 bg-transparent backdrop-blur-sm"
            >
              See Live Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Trusted by 500+ Marketing Leaders
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              SOC 2 Certified
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Zero Learning Curve
            </span>
          </div>
        </div>
      </section>

      {/* For Marketing Agencies */}
      <section id="agencies" className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">For Marketing Agencies</h2>
            <p className="text-xl text-gray-300">Production Capacity That Makes Every Retainer More Profitable</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#161b22]/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50">
              <h3 className="text-2xl font-bold mb-6 text-red-400">The Agency Reality Check</h3>
              <div className="space-y-4 text-gray-300">
                <p>Your strategists spend 40% of their time managing freelancers instead of growing accounts.</p>
                <p>Your margins shrink with every revision cycle.</p>
                <p>
                  Your clients demand more content, faster delivery, and perfect consistency—while your team is already
                  maxed out.
                </p>
              </div>
            </div>
            <div className="bg-[#161b22]/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50">
              <h3 className="text-2xl font-bold mb-6 text-green-400">The Marketing Visionary Advantage</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Billable Hours Bleeding Away?</strong> → One-click briefs become
                    publish-ready drafts in 2 hours, not 2 weeks
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Freelancer Rates Eating Margins?</strong> → 60-80% cost reduction
                    with zero quality compromise
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Brand Voice All Over the Place?</strong> → AI models trained on your
                    brand guidelines ensure perfect consistency
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Scope Creep Killing Deadlines?</strong> → Elastic capacity scales to
                    100+ pieces overnight without hiring
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-12 bg-[#161b22]/80 backdrop-blur-sm border-gray-800/50">
            <CardHeader>
              <CardTitle className="text-center text-white text-2xl">Real Agency Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">35%</div>
                  <p className="text-sm text-gray-400">average margin improvement per retainer</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">3x</div>
                  <p className="text-sm text-gray-400">faster campaign delivery without rushing</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                  <p className="text-sm text-gray-400">more project capacity with same headcount</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">$150K+</div>
                  <p className="text-sm text-gray-400">annual savings on contractor costs</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                  <p className="text-sm text-gray-400">first-draft approval rate from clients</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">2.5x</div>
                  <p className="text-sm text-gray-400">increase in upsell opportunities</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-[#238636] hover:bg-[#2ea043] text-white shadow-lg shadow-green-500/25">
              Calculate Your Agency's Savings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Brands */}
      <section id="brands" className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#161b22] via-[#21262d] to-[#161b22]">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-gradient-to-r from-pink-500/10 to-purple-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">For Brands</h2>
            <p className="text-xl text-gray-300">Enterprise Marketing Power Without the Enterprise Overhead</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#0d1117]/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50">
              <h3 className="text-2xl font-bold mb-6 text-red-400">The Brand Challenge</h3>
              <div className="space-y-4 text-gray-300">
                <p>You need a full marketing department's output, but hiring 10 specialists costs $1.5M+ annually.</p>
                <p>Agencies move too slowly. Freelancers deliver inconsistent quality.</p>
                <p>Meanwhile, your competitors launch campaigns in days while you're still in planning meetings.</p>
              </div>
            </div>
            <div className="bg-[#0d1117]/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50">
              <h3 className="text-2xl font-bold mb-6 text-green-400">The Marketing Visionary Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Content Backlog Blocking Launches?</strong> → Complete campaign
                    assets in 48 hours
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">$2M Marketing Department Budget?</strong> → Same expertise for
                    $200K/year
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Agency Retainers Draining Budget?</strong> → Flat enterprise pricing
                    replaces 3-5 vendor relationships
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Flying Blind on Strategy?</strong> → Built-in journey mapping and
                    predictive analytics
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-12 bg-[#161b22]/80 backdrop-blur-sm border-gray-800/50">
            <CardHeader>
              <CardTitle className="text-center text-white text-2xl">Proven Brand Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
                  <p className="text-sm text-gray-400">content velocity without adding headcount</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
                  <p className="text-sm text-gray-400">reduction in external marketing spend</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">5x</div>
                  <p className="text-sm text-gray-400">faster time-to-market for campaigns</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
                  <p className="text-sm text-gray-400">average conversion lift from AI optimization</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-[#238636] hover:bg-[#2ea043] text-white shadow-lg shadow-green-500/25">
              See Your Brand's Potential
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1117] via-[#161b22] to-[#0d1117]">
          <div className="absolute top-20 right-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Marketing Visionary Delivers</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#161b22]/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50">
              <h3 className="text-2xl font-bold mb-8 text-green-400">Available Today</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Customer Journey Orchestration</strong> - Map and optimize every
                    touchpoint
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Multi-Channel Ad Strategies</strong> - Data-driven frameworks that
                    convert
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">SEO Content at Scale</strong> - Long-form, topic clusters, local
                    optimization
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Brand Voice Consistency</strong> - AI trained on your exact
                    guidelines
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#161b22]/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50">
              <h3 className="text-2xl font-bold mb-8 text-blue-400">Coming Q2 2025</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Sales Page Generator</strong> - Middle and bottom funnel pages
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Competitive Intelligence</strong> - Real-time market positioning
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Social Media Engine</strong> - Platform-optimized content creation
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <strong className="text-white">Email Campaign Builder</strong> - Personalized nurture sequences
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#161b22] via-[#21262d] to-[#161b22]">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Marketing Visionary Difference</h2>
            <p className="text-xl text-gray-300">Not Just Another AI Tool</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#0d1117]/80 backdrop-blur-sm border-gray-800/50">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-400 mb-2" />
                <CardTitle className="text-white">Enterprise-Grade Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• SOC 2 Type II Certified</li>
                  <li>• Private tenant architecture</li>
                  <li>• Your data never trains our models</li>
                  <li>• 99.9% uptime guarantee</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0d1117]/80 backdrop-blur-sm border-gray-800/50">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Human + AI Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Expert strategists guide the AI</li>
                  <li>• Quality assurance on every asset</li>
                  <li>• White-glove onboarding</li>
                  <li>• Dedicated success manager</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0d1117]/80 backdrop-blur-sm border-gray-800/50">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle className="text-white">Measurable Business Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Average 3.2x ROI in 12 months</li>
                  <li>• 94% customer retention</li>
                  <li>• 40% conversion lift average</li>
                  <li>• 15-20 hours saved weekly</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1117] via-[#161b22] to-[#0d1117]">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#161b22]/80 backdrop-blur-sm border-gray-800/50">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-4">
                  "We replaced 3 freelance writers and an SEO consultant. Now we produce 10x more content at 80% less
                  cost—and the quality is consistently better."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">SC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Chen</div>
                    <div className="text-sm text-gray-400">CEO, Velocity Marketing</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#161b22]/80 backdrop-blur-sm border-gray-800/50">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-4">
                  "Marketing Visionary let us say yes to every client request. Our capacity went up 40% and margins
                  improved by 35%."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MT</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Michael Torres</div>
                    <div className="text-sm text-gray-400">Growth Director, Scale Digital</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#161b22]/80 backdrop-blur-sm border-gray-800/50">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-4">
                  "5-day campaign launches used to be impossible. Now they're standard. Our clients think we hired 20
                  people."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">JW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Jennifer Wu</div>
                    <div className="text-sm text-gray-400">CMO, TechForward</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#161b22] via-[#21262d] to-[#161b22]">
          <div className="absolute top-20 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing That Makes Sense</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-400">For Agencies</h3>
              <div className="space-y-4">
                <Card className="bg-[#0d1117]/80 backdrop-blur-sm border-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-white">Growth Plan</CardTitle>
                    <CardDescription className="text-gray-400">Perfect for 10-50 clients</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-[#0d1117]/80 backdrop-blur-sm border-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-white">Scale Plan</CardTitle>
                    <CardDescription className="text-gray-400">Unlimited capacity for larger shops</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-[#0d1117]/80 backdrop-blur-sm border-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-white">White Label</CardTitle>
                    <CardDescription className="text-gray-400">Your brand, our engine</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-purple-400">For Brands</h3>
              <div className="space-y-4">
                <Card className="bg-[#0d1117]/80 backdrop-blur-sm border-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-white">Department Plan</CardTitle>
                    <CardDescription className="text-gray-400">Replace 3-5 freelancers</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-[#0d1117]/80 backdrop-blur-sm border-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-white">Enterprise Plan</CardTitle>
                    <CardDescription className="text-gray-400">Full marketing capabilities</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-[#0d1117]/80 backdrop-blur-sm border-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-white">Custom Solutions</CardTitle>
                    <CardDescription className="text-gray-400">Tailored to your needs</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              All plans include: Onboarding, training, dedicated success manager, API access
            </p>
            <Button size="lg" className="bg-[#238636] hover:bg-[#2ea043] text-white shadow-lg shadow-green-500/25">
              Get Pricing Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
          <p className="text-xl mb-12 opacity-90">See Marketing Visionary in Action</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white">Agencies</CardTitle>
                <CardDescription className="text-white/80">
                  Discover how to increase margins by 35% while delivering more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-black hover:bg-gray-100 shadow-lg">
                  Book Agency Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white">Brands</CardTitle>
                <CardDescription className="text-white/80">
                  Learn how to 10x your marketing output for 80% less
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-black hover:bg-gray-100 shadow-lg">
                  Schedule Executive Briefing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <p className="text-lg mb-6 opacity-90">
              Have Questions? Our team is ready to show you exactly how Marketing Visionary fits your needs.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm shadow-lg"
            >
              Talk to Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1117] via-[#161b22] to-[#0d1117]">
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Bottom Line</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg mb-12 text-gray-300">
            <p>Stop managing freelancers. Stop waiting weeks for content. Stop compromising on quality for speed.</p>
            <p>
              Marketing Visionary delivers enterprise marketing capabilities through AI—giving you the power of a full
              team at a fraction of the cost.
            </p>
            <p className="text-xl font-semibold text-white">The future of marketing is here. Are you ready?</p>
          </div>
          <Button size="lg" className="bg-[#238636] hover:bg-[#2ea043] text-white shadow-lg shadow-green-500/25">
            Start Your Transformation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161b22] py-12 border-t border-gray-800 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161b22] via-[#21262d] to-[#161b22]">
          <div className="absolute top-0 left-1/2 w-64 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo-final.png" alt="Marketing Visionary" className="h-12 object-contain" />
              <span className="text-xl font-semibold text-white">Marketing Visionary</span>
            </div>
            <div className="text-sm text-gray-400">© 2025 Marketing Visionary. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
