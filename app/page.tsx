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
    description: "Engage in open, empathetic communication to understand your child feelings and build trust.",
    color: "bg-orange-100 text-orange-800",
  },
  {
    title: "Engaging",
    icon: HandHeart,
    description: "Prioritize and dedicate undivided attention to your child to foster a strong, lasting relationship.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Affirming",
    icon: ThumbsUp,
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
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="FIT Parent Logo" width={32} height={32} className="w-8 h-8 rounded-full bg-[#E7A034] p-1" />
            <span className="text-xl font-bold text-stone-900">FIT Parent</span>
          </div>
          <Button asChild variant="outline" size="sm" className="border-amber-600 text-amber-700 hover:bg-amber-50">
            <Link href="https://profile.fitparent.ph/assessment">Get Your Profile</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image src="/logo.svg" alt="FIT Parent Logo" width={64} height={64} className="w-28 h-28 rounded-full bg-[#E7A034] p-2" />
            </div>
            <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-100">Join the Movement</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">Family. Intentionality. Truth.</h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto">
              Discover your parenting strengths and get your personalized FIT Parent Profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                <Link href="https://profile.fitparent.ph/assessment">
                  Get Your FIT Parent Profile
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-sm text-stone-600">Takes 15–20 minutes • Free Assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is FIT Parent */}
      {
      //   <section className="py-16 bg-white">
      //   <div className="container mx-auto px-4">
      //     <div className="max-w-4xl mx-auto text-center mb-12">
      //       <h2 className="text-3xl font-bold text-stone-900 mb-6">What is FIT Parent?</h2>
      //       <p className="text-lg text-stone-700 mb-8">
      //         FIT Parent is a non-profit organization that advocates for healthy parenting through three core
      //         principles:
      //       </p>
      //     </div>

      //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
      //       <Card className="border-amber-200 hover:shadow-lg transition-shadow">
      //         <CardContent className="p-6 text-center">
      //           <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
      //             <Users className="w-8 h-8 text-amber-600" />
      //           </div>
      //           <h3 className="text-xl font-semibold text-stone-900 mb-3">Family-Focused</h3>
      //           <p className="text-stone-600">
      //             Parents prioritize their family's well-being and needs so that family members feel loved and valued.
      //           </p>
      //         </CardContent>
      //       </Card>

      //       <Card className="border-orange-200 hover:shadow-lg transition-shadow">
      //         <CardContent className="p-6 text-center">
      //           <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
      //             <Target className="w-8 h-8 text-orange-600" />
      //           </div>
      //           <h3 className="text-xl font-semibold text-stone-900 mb-3">Intentional</h3>
      //           <p className="text-stone-600">
      //             Parents actively plan, act on, and pursue the right principles, values, and goals while raising their
      //             children.
      //           </p>
      //         </CardContent>
      //       </Card>

      //       <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
      //         <CardContent className="p-6 text-center">
      //           <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
      //             <BookOpen className="w-8 h-8 text-yellow-600" />
      //           </div>
      //           <h3 className="text-xl font-semibold text-stone-900 mb-3">Truth-Centered</h3>
      //           <p className="text-stone-600">
      //             Parents teach, train, and disciple their children to be people of character who discern right from
      //             wrong.
      //           </p>
      //         </CardContent>
      //       </Card>
      //     </div>

      //     <div className="text-center">
      //       <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
      //         <Link href="https://profile.fitparent.ph/assessment">
      //           Take the FIT Parent Assessment
      //           <ArrowRight className="ml-2 w-4 h-4" />
      //         </Link>
      //       </Button>
      //     </div>
      //   </div>
      // </section>
}

      {/* 10 Dimensions */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">The 10 Dimensions of FIT Parenting encourage you to be:</h2>
            {/* <p className="text-lg text-stone-700">
              The 10 Dimensions of:
            </p> */}
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
              <Link href="https://profile.fitparent.ph/assessment">
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
                  <BookMarked className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Biblical</h3>
                <p className="text-stone-600 text-sm">
                  Parenting trends come and go, but principles anchored on truth remain relevant and effective. Instead of blindly embracing parenting trends that are popularized by culture today, FIT Parent takes the best aspects of modern and traditional parenting, as well as the research and data, and filters them through the lens of a Biblical worldview.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Doable</h3>
                <p className="text-stone-600 text-sm">
                  The encouragement is "get better today." You will be given practical, bite-sized changes and fixes to work on that are doable. Since parenting is a journey, the goal is not perfection but daily progress.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Personalized</h3>
                <p className="text-stone-600 text-sm">
                  Similar to a health fitness tracker, you will start with the FIT Parent profile tool to get an overview of your strengths and areas of improvement based on the 10 FIT Dimensions of Parenting. Sign up for the free FIT Parent App, to receive your full profile along with personalized daily challenges and resources that will impact your Daily Wellness Score.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Community</h3>
                <p className="text-stone-600 text-sm">
                  Be part of a movement of FIT Parents who are family-focused, intentional, and truth-seeking and journey together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIT Parent App Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Get the FIT Parent App</h2>
            <p className="text-lg text-stone-700 mb-8">
              Experience FIT Parenting on the go! The FIT Parent app is available for both iOS and Android devices. Access your personalized dashboard, daily check-ins, and curated resources—anytime, anywhere.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            {/* App Banner & QR */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-40 h-40 p-4 bg-white rounded-xl shadow flex items-center justify-center">
                {/* Dynamically generated QR code */}
                <QRCode value="https://fitparent.ph/store-redirect" size={160} />
              </div>
              <p className="text-stone-600 text-sm">Scan to download on iOS or Android</p>
            </div>
            {/* App Store Links */}
            <div className="flex flex-col items-center gap-4">
              <a href="https://testflight.apple.com/join/c6QWRe9z" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Image src="/app-store-dl.svg" alt="Download on the App Store" width={180} height={54} className="mb-2" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=ph.fitparent.app" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Image src="/google-play-dl.svg" alt="Get it on Google Play" width={180} height={54} />
              </a>
              <p className="text-stone-500 text-xs mt-2">Or search "FIT Parent" in your app store</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Why use the app?</h3>
            <ul className="text-stone-700 text-base mb-6 list-disc list-inside text-left inline-block">
              <li>Access your FIT Parent profile and assessment results</li>
              <li>Check in daily with personalized challenges</li>
              <li>Track your parenting journey and progress</li>
              {/* <li>Connect with the FIT Parent community</li> */}
              <li>Receive helpful resources and updates</li>
            </ul>
            {/* <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <a href="https://apps.apple.com/app/fitparent" target="_blank" rel="noopener noreferrer">
                Download the FIT Parent App
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button> */}
          </div>
        </div>
      </section>

      {/* FIT Parent Ambassadors */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-stone-900 mb-6">Meet Our FIT Parent Ambassadors</h2>
            <p className="text-lg text-stone-700 text-center mb-12">
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
                  <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-amber-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-2">{ambassador.name}</h3>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="https://profile.fitparent.ph/assessment">
                  Start Your FIT Parent Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      {/* <section className="py-16 bg-white">
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
                <Link href="https://profile.fitparent.ph/assessment">
                  Join the Movement - Get Your Profile
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

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
                <Link href="https://profile.fitparent.ph/assessment">
                  Get Your FIT Parent Profile Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-amber-100 text-sm">Free • Takes 15&ndash;20 minutes • Shareable results</p>
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
              <p className="text-stone-400">Email: hello@fitparent.ph</p>
              <p className="text-stone-400">Website: www.fitparent.ph</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/people/FIT-Parent/61576955067819/" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
                <Link href="https://www.instagram.com/fitparent.ph" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
                <Link href="https://www.tiktok.com/@fitparent.ph" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  TikTok
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; {new Date().getFullYear()} FIT Parent. All rights reserved.</p>
            <div className="mt-2 flex flex-col md:flex-row gap-2 justify-center items-center text-xs">
              <Link href="https://profile.fitparent.ph/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline text-stone-400">Privacy Policy</Link>
              <span className="hidden md:inline">&middot;</span>
              <Link href="https://profile.fitparent.ph/terms" target="_blank" rel="noopener noreferrer" className="hover:underline text-stone-400">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
