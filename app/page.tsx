import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  BookOpen,
  Shield,
  MessageCircle,
  Target,
  Lightbulb,
  Handshake,
  Crown,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const dimensions = [
  {
    title: "Truth-Seeking",
    icon: BookOpen,
    description: "Build your family's foundation on biblical truth and eternal values.",
    color: "bg-amber-100 text-amber-800",
  },
  {
    title: "Exemplifying",
    icon: Users,
    description: "Model Christlike behavior, and live out the values and character you want your child to internalize.",
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Communicating",
    icon: MessageCircle,
    description: "Engage in open, empathetic communication to validate your child's feelings and build trust.",
    color: "bg-orange-100 text-orange-800",
  },
  {
    title: "Engaging",
    icon: Target,
    description: "Prioritize and dedicate undivided attention to your child to foster a strong, lasting relationship.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Affirming",
    icon: Heart,
    description:
      "Regularly affirm your child's worth through positive, life-giving words that build them up and remind them of their identity in Christ.",
    color: "bg-rose-100 text-rose-800",
  },
  {
    title: "Loving",
    icon: Heart,
    description: "Express love consistently and authentically, mirroring the unconditional love of God.",
    color: "bg-red-100 text-red-800",
  },
  {
    title: "Teaching",
    icon: Lightbulb,
    description: "Equip your child with the knowledge and skills to navigate life's challenges.",
    color: "bg-lime-100 text-lime-800",
  },
  {
    title: "Training",
    icon: Shield,
    description: "Set clear, loving boundaries that guide your child's behavior while nurturing growth and maturity.",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    title: "Peacemaking",
    icon: Handshake,
    description:
      "Cultivate a home environment where conflicts are resolved constructively and relationships are strengthened.",
    color: "bg-teal-100 text-teal-800",
  },
  {
    title: "Entrusting",
    icon: Crown,
    description: "Surrender your parenting journey to God, trusting and resting in his wisdom and provision.",
    color: "bg-stone-100 text-stone-800",
  },
]

const ambassadors = [
  { name: "Ken and Mafe Carangue", specialty: "Parenting adopted children" },
  { name: "Edric and Joy Mendoza", specialty: "Parenting as homeschoolers" },
  { name: "Gian and Joy Sotto", specialty: "Parenting sons/a large family" },
  { name: "Dennis and Thammie Sy", specialty: "Parenting as church leaders" },
  { name: "VJ and Camille Yambao", specialty: "Parenting a mixed-family" },
  { name: "Ryan and Isabelle Gallagher", specialty: "Parenting as a multi-cultural family" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="FIT Parent Logo" width={32} height={32} className="w-8 h-8 rounded-full bg-[#E7A034] p-1" />
            <span className="text-xl font-bold text-stone-900">FIT Parent</span>
          </div>
          <Button asChild variant="outline" size="sm" className="border-amber-600 text-amber-700 hover:bg-amber-50">
            <Link href="https://profile.fitparent.ph">Get Your Profile</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image src="/logo.svg" alt="FIT Parent Logo" width={64} height={64} className="w-16 h-16 rounded-full bg-[#E7A034] p-2" />
            </div>
            <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-100">Join the Movement</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">Family. Intentionality. Truth.</h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto">
              Welcome to FIT Parent - a movement that advocates for healthy parenting that is family-focused,
              intentional, and truth-centered. Discover your parenting strengths and get a personalized profile you can
              share.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                <Link href="https://profile.fitparent.ph">
                  Get Your FIT Parent Profile
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-sm text-stone-600">Takes 30–60 minutes • Free Assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is FIT Parent */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">What is FIT Parent?</h2>
            <p className="text-lg text-stone-700 mb-8">
              FIT Parent is a non-profit organization that advocates for healthy parenting through three core
              principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Family-Focused</h3>
                <p className="text-stone-600">
                  Parents prioritize their family's well-being and needs so that family members feel loved and valued.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Intentional</h3>
                <p className="text-stone-600">
                  Parents actively plan, act on, and pursue the right principles, values, and goals while raising their
                  children.
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Truth-Centered</h3>
                <p className="text-stone-600">
                  Parents teach, train, and disciple their children to be people of character who discern right from
                  wrong.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="https://profile.fitparent.ph">
                Take the FIT Parent Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 10 Dimensions */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">The 10 Dimensions of FIT Parenting</h2>
            <p className="text-lg text-stone-700">
              Ten principles that form a comprehensive framework for nurturing your child's spiritual, emotional,
              mental, relational, physical, and practical growth (Luke 2:52).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {dimensions.map((dimension, index) => {
              const IconComponent = dimension.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-stone-200">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${dimension.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">{dimension.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{dimension.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="https://profile.fitparent.ph">
                Discover Your Parenting Profile
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose FIT Parent */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">Why Choose FIT Parent?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Biblical</h3>
                <p className="text-stone-600 text-sm">
                  Principles anchored on truth that remain relevant and effective, filtered through a Biblical
                  worldview.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Doable</h3>
                <p className="text-stone-600 text-sm">
                  Practical, bite-sized changes that are achievable. The goal is progress, not perfection.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Personalized</h3>
                <p className="text-stone-600 text-sm">
                  Like a fitness tracker for parenting, get personalized challenges and resources based on your FIT
                  Parent Score.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Community</h3>
                <p className="text-stone-600 text-sm">
                  Join parents who share the same values for family-focused, intentional, and truth-centered parenting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIT Parent Ambassadors */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-stone-900 mb-6">Meet Our FIT Parent Ambassadors</h2>
            <p className="text-lg text-stone-700 text-center mb-12">
              Real families sharing their parenting journeys and representing different parenting situations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {ambassadors.map((ambassador, index) => (
                <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">{ambassador.name}</h3>
                    <p className="text-stone-600 text-sm">{ambassador.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="https://profile.fitparent.ph">
                  Start Your FIT Parent Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-12">Our Mission & Vision</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-amber-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-4">Mission</h3>
                  <p className="text-stone-700">
                    To provide parents with the tools to become a FIT Parent – family-focused, intentional, and
                    truth-centered.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-4">Vision</h3>
                  <p className="text-stone-700">
                    To create a movement of FIT Parents who will disciple their families and transform the Philippines
                    for Jesus Christ.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="https://profile.fitparent.ph">
                  Join the Movement - Get Your Profile
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Discover Your Parenting Strengths?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Take the FIT Parent Assessment and get a personalized profile that shows your strengths and growth areas.
              Share your results and inspire other parents in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-3">
                <Link href="https://profile.fitparent.ph">
                  Get Your FIT Parent Profile Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-amber-100 text-sm">Free • Takes 30-60 minutes • Shareable results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.svg" alt="FIT Parent Logo" width={32} height={32} className="w-8 h-8 rounded-full bg-[#E7A034] p-1" />
                <span className="text-xl font-bold">FIT Parent</span>
              </div>
              <p className="text-stone-400">
                Join a movement that advocates for healthy parenting that is family-focused, intentional, and
                truth-centered.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-stone-400">Email: info@fitparent.ph</p>
              <p className="text-stone-400">Website: www.fitparent.ph</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-stone-400 hover:text-white transition-colors">
                  Facebook
                </Link>
                <Link href="#" className="text-stone-400 hover:text-white transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="text-stone-400 hover:text-white transition-colors">
                  TikTok
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; {new Date().getFullYear()} FIT Parent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
