"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Smartphone, Download, CheckCircle, ArrowRight, QrCode } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AccountCreatedPage() {
  const [userAgent, setUserAgent] = useState("")

  useEffect(() => {
    setUserAgent(navigator.userAgent)
  }, [])

  const isIOS = /iPad|iPhone|iPod/.test(userAgent)
  const isAndroid = /Android/.test(userAgent)

  const appStoreUrl = "https://apps.apple.com/app/fitparent" // Replace with actual App Store URL
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.fitparent" // Replace with actual Play Store URL
  const appDeepLink = "fitparent://signin" // Replace with actual deep link scheme

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-stone-900">FIT Parent</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* Success Message */}
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Account Created Successfully!</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Welcome to FIT Parent!</h1>
            <p className="text-xl text-stone-700 mb-8">
              Your account has been created successfully. Now let's get you set up with the FIT Parent app to access
              your personalized dashboard, daily check-ins, and community features.
            </p>

            {/* App Installation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Already Have App */}
              <Card className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">Already Have the App?</h3>
                  <p className="text-stone-600 mb-4 text-sm">
                    Open the FIT Parent app and sign in with your new account credentials.
                  </p>
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <a href={appDeepLink}>
                      Open FIT Parent App
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Need to Install */}
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">Need to Install the App?</h3>
                  <p className="text-stone-600 mb-4 text-sm">
                    Download the FIT Parent app from your device's app store, then sign in with your account.
                  </p>
                  <div className="space-y-2">
                    {isIOS && (
                      <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                          Download from App Store
                          <Download className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {isAndroid && (
                      <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                          Download from Play Store
                          <Download className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {!isIOS && !isAndroid && (
                      <>
                        <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white mb-2">
                          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                            Download from App Store
                            <Download className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                        <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                          <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                            Download from Play Store
                            <Download className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* QR Code Option */}
            <Card className="border-stone-200 mb-8">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8 text-stone-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Scan QR Code</h3>
                <p className="text-stone-600 mb-4 text-sm">
                  Scan the QR code with your phone's camera to quickly access the app download page.
                </p>
                {/* Placeholder for QR Code - replace with actual QR code image */}
                <div className="w-32 h-32 bg-stone-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-16 h-16 text-stone-400" />
                </div>
                <p className="text-xs text-stone-500">Point your camera at the QR code to download the app</p>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-4">What's Next?</h3>
                <div className="text-left space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-stone-700">Open or download the FIT Parent app</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-stone-700">Sign in with your new account credentials</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <p className="text-stone-700">View your FIT Parent Assessment results and personalized dashboard</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <p className="text-stone-700">Start your FIT Parent journey with daily check-ins and challenges</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <div className="mt-8 text-center">
              <p className="text-stone-600 mb-4">Need help? We're here to support you on your parenting journey.</p>
              <Button variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                Contact Support
              </Button>
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
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
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
