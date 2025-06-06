"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { AppDownloadBanner } from "@/components/ui/app-download-banner"
import { Smartphone, Download, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function AccountCreatedPage() {
  const [userAgent, setUserAgent] = useState("")

  useEffect(() => {
    setUserAgent(navigator.userAgent)
  }, [])

  const isIOS = /iPad|iPhone|iPod/.test(userAgent)
  const isAndroid = /Android/.test(userAgent)

  const appStoreUrl = "https://testflight.apple.com/join/c6QWRe9z"
  const playStoreUrl = "https://drive.google.com/file/d/1UP8NLyjP2Eq-GB5ijGpOE4756rlDnPwn/view?usp=sharing"
  const appDeepLink = "app.fitparent.ph://signin"

  return (
    <div className="min-h-screen bg-champagne-50">
      <Header variant="simple" />

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
            <h1 className="text-4xl md:text-5xl font-bold text-champagne-900 mb-6">Welcome to FIT Parent!</h1>
            <p className="text-xl text-champagne-700 mb-8">
              Your account has been created successfully. Now let's get you set up with the FIT Parent app to access
              your personalized dashboard, daily check-ins, and community features.
            </p>

            {/* App Installation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Already Have App */}
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-champagne-900 mb-3">Already Have the App?</h3>
                  <p className="text-champagne-600 mb-4 text-sm">
                    Open the FIT Parent app and sign in with your new account credentials.
                  </p>
                  <Button asChild className="w-full bg-orange-400 hover:bg-orange-600 text-champagne-50">
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
                  <h3 className="text-xl font-semibold text-champagne-900 mb-3">Need to Install the App?</h3>
                  <p className="text-champagne-600 mb-4 text-sm">
                    Download the FIT Parent app from your device's app store, then sign in with your account.
                  </p>
                  <div className="space-y-2">
                    {isIOS && (
                      <Button asChild className="w-full bg-orange-400 hover:bg-orange-600 text-champagne-50">
                        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                          Download from App Store
                          <Download className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {isAndroid && (
                      <Button asChild className="w-full bg-orange-400 hover:bg-orange-600 text-champagne-50">
                        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                          Download from Play Store
                          <Download className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {!isIOS && !isAndroid && (
                      <>
                        <Button asChild className="w-full bg-orange-400 hover:bg-orange-600 text-champagne-50 mb-2">
                          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                            Download from App Store
                            <Download className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                        <Button asChild className="w-full bg-orange-400 hover:bg-orange-600 text-champagne-50">
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
            <AppDownloadBanner 
              variant="compact"
              title="Scan QR Code"
              description="Scan the QR code with your phone's camera to quickly access the app download page."
            />

            {/* Next Steps */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-champagne-900 mb-4">What's Next?</h3>
                <div className="text-left space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-champagne-700">Open or download the FIT Parent app</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-champagne-700">Sign in with your new account credentials</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <p className="text-champagne-700">View your FIT Parent Assessment results and personalized dashboard</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <p className="text-champagne-700">Start your FIT Parent journey with daily check-ins and challenges</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <div className="mt-8 text-center">
              <p className="text-champagne-600 mb-4">Need help? We're here to support you on your parenting journey.</p>
              <Button variant="outline" className="border-orange-600 text-orange-700 hover:bg-orange-50">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
