import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { AppDownloadBanner } from "@/components/ui/app-download-banner"
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
  HandHeart,
  ThumbsUp,
  Coffee,
  BookMarked,
  Search,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import QRCode from "react-qr-code"

const dimensions = [
  {
    title: "Truth-Seeking",
    icon: Search,
    description: "Build your family's foundation on biblical truth and eternal values.",
    color: "bg-orange-100 text-orange-800",
  },
  {
    title: "Exemplifying",
    icon: Users,
    description: "Model Christlike behavior, and live out the values and character you want your child to internalize.",
    color: "bg-violet-200 text-violet-800",
  },
  {
    title: "Communicating",
    icon: MessageCircle,
    description: "Engage in open, empathetic communication to understand your child feelings and build trust.",
    color: "bg-bluegreen-100 text-bluegreen-800",
  },
  {
    title: "Engaging",
    icon: HandHeart,
    description: "Prioritize and dedicate undivided attention to your child to foster a strong, lasting relationship.",
    color: "bg-yellowgreen-100 text-yellowgreen-800",
  },
  {
    title: "Affirming",
    icon: ThumbsUp,
    description:
      "Regularly affirm your child's worth through positive, life-giving words that build them up and remind them of their identity in Christ.",
    color: "bg-pink-100 text-pink-800",
  },
  {
    title: "Loving",
    icon: Heart,
    description: "Express love consistently and authentically, mirroring the unconditional love of God.",
    color: "bg-blueviolet-100 text-blueviolet-800",
  },
  {
    title: "Teaching",
    icon: Lightbulb,
    description: "Equip your child with the knowledge and skills to navigate life's challenges.",
    color: "bg-green-200 text-green-800",
  },
  {
    title: "Training",
    icon: Shield,
    description: "Set clear, loving boundaries that guide your child's behavior while nurturing growth and maturity.",
    color: "bg-brown-200 text-brown-800",
  },
  {
    title: "Peacemaking",
    icon: Handshake,
    description:
      "Cultivate a home environment where conflicts are resolved constructively and relationships are strengthened.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Entrusting",
    icon: Crown,
    description: "Surrender your parenting journey to God, trusting and resting in his wisdom and provision.",
    color: "bg-champagne-100 text-champagne-800",
  },
]

const ambassadors = [
  { name: "Ken and Mafe Carangue" },
  { name: "Miguel and Jerika Aguilar" },
  { name: "Ryan and Isabelle Gallagher" },
  { name: "Edric and Joy Mendoza" },
  { name: "Gian and Joy Sotto" },
  { name: "Dennis and Thammie Sy" },
  { name: "Wisdom and Betty Sy" },
  { name: "VJ and Camille Yambao" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-champagne-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-brown-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image src="/logo.svg" alt="FIT Parent Logo" width={64} height={64} className="w-28 h-28 rounded-full bg-[#E7A034] p-2" />
            </div>
            <Badge className="mb-6 bg-brown-200 text-orange-800 hover:bg-brown-200 text-sm px-4 py-1">Join the Movement</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-champagne-900 mb-6">Family. Intentionality. Truth.</h1>
            <p className="text-xl text-champagne-700 mb-8 max-w-3xl mx-auto">
              Discover your parenting strengths and get your personalized FIT Parent Profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-orange-400 hover:bg-orange-600 text-champagne-50 px-8 py-3">
                <Link href="https://profile.fitparent.ph/assessment">
                  Get Your FIT Parent Profile
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-sm text-champagne-600">Takes 15–20 minutes • Free Assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Dimensions */}
      <section className="py-16 bg-champagne-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-champagne-900 mb-6">The 10 Dimensions of FIT Parenting encourage you to be:</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {dimensions.map((dimension, index) => {
              const IconComponent = dimension.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-champagne-200">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${dimension.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-champagne-900 mb-3">{dimension.title}</h3>
                    <p className="text-champagne-600 text-sm leading-relaxed">{dimension.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-orange-400 hover:bg-orange-600 text-champagne-50">
              <Link href="https://profile.fitparent.ph/assessment">
                Discover Your Parenting Profile
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose FIT Parent */}
      <section className="py-16 bg-champagne-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-champagne-900 mb-12">Why Choose FIT Parent?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="absolute top-8 -left-4 -right-4 md:-left-8 md:-right-8 h-[2px] bg-champagne-200 hidden lg:block"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 p-[2px]">
                  <div className="w-full h-full bg-orange-100 rounded-full flex items-center justify-center">
                    <BookMarked className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-champagne-900 mb-3">Biblical</h3>
                <p className="text-champagne-600 text-sm">
                  Parenting trends come and go, but principles anchored on truth remain relevant and effective. Instead of blindly embracing parenting trends that are popularized by culture today, FIT Parent takes the best aspects of modern and traditional parenting, as well as the research and data, and filters them through the lens of a Biblical worldview.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 p-[2px]">
                  <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-champagne-900 mb-3">Doable</h3>
                <p className="text-champagne-600 text-sm">
                  The encouragement is "get better today." You will be given practical, bite-sized changes and fixes to work on that are doable. Since parenting is a journey, the goal is not perfection but daily progress.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellowgreen-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 p-[2px]">
                  <div className="w-full h-full bg-yellowgreen-100 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-yellowgreen-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-champagne-900 mb-3">Personalized</h3>
                <p className="text-champagne-600 text-sm">
                  Similar to a health fitness tracker, you will start with the FIT Parent Profile Tool to get an overview of your strengths and areas of improvement based on the 10 Dimensions of FIT Parenting. Sign up for the free FIT Parent App to receive your full profile along with personalized daily challenges and resources that will impact your Daily Wellness Score.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 p-[2px]">
                  <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                    <Coffee className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-champagne-900 mb-3">Community</h3>
                <p className="text-champagne-600 text-sm">
                  Be part of a movement of FIT Parents who are family-focused, intentional, and truth-seeking and journey together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIT Parent App Section */}
      <AppDownloadBanner />

      {/* FIT Parent Ambassadors */}
      <section className="py-16 bg-champagne-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-champagne-900 mb-6">Meet Our FIT Parent Ambassadors</h2>
            <p className="text-lg text-champagne-700 text-center mb-12">
              Real families sharing their parenting journeys and unique family dynamics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {ambassadors
                .slice()
                .sort((a, b) => {
                  const getLastName = (name: string) => name.split(" ").slice(-1)[0].toLowerCase();
                  return getLastName(a.name).localeCompare(getLastName(b.name));
                })
                .map((ambassador, index) => (
                  <Card key={index} className="border-champagne-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-champagne-900 mb-2">{ambassador.name}</h3>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-orange-400 hover:bg-orange-600 text-champagne-50">
                <Link href="https://profile.fitparent.ph/assessment">
                  Start Your FIT Parent Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-brown-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-champagne-50 mb-6">Ready to Discover Your Parenting Strengths?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Take the FIT Parent Assessment and get a personalized profile that shows your strengths and growth areas.
              Share your results and inspire other parents in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-champagne-50 text-orange-700 hover:bg-orange-200 px-8 py-3">
                <Link href="https://profile.fitparent.ph/assessment">
                  Get Your FIT Parent Profile Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-orange-100 text-sm">Free • Takes 15&ndash;20 minutes • Shareable results</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
