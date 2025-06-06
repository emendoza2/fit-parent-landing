"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowRight, QrCode } from "lucide-react"
import { useEffect, useState } from "react"
import QRCode from "react-qr-code"
import Image from "next/image"

interface AppDownloadBannerProps {
  title?: string
  description?: string
  showQRCode?: boolean
  variant?: "default" | "compact"
}

export function AppDownloadBanner({ 
  title = "Get the FIT Parent App",
  description = "Experience FIT Parenting on the go! The FIT Parent app is available for both iOS and Android devices. Access your personalized dashboard, daily check-ins, and curated resources—anytime, anywhere.",
  showQRCode = true,
  variant = "default"
}: AppDownloadBannerProps) {
  const [userAgent, setUserAgent] = useState("")

  useEffect(() => {
    setUserAgent(navigator.userAgent)
  }, [])

  const isIOS = /iPad|iPhone|iPod/.test(userAgent)
  const isAndroid = /Android/.test(userAgent)

  const appStoreUrl = "https://testflight.apple.com/join/c6QWRe9z"
  const playStoreUrl = "https://drive.google.com/file/d/1UP8NLyjP2Eq-GB5ijGpOE4756rlDnPwn/view?usp=sharing"

  if (variant === "compact") {
    return (
      <Card className="border-champagne-200 mb-8">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-champagne-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-8 h-8 text-champagne-600" />
          </div>
          <h3 className="text-xl font-semibold text-champagne-900 mb-3">Scan QR Code</h3>
          <p className="text-champagne-600 mb-4 text-sm">
            Scan the QR code with your phone's camera to quickly access the app download page.
          </p>
          <div className="w-32 h-32 bg-champagne-200 rounded-lg flex items-center justify-center mx-auto mb-4">
            <QRCode value="https://fitparent.ph/store-redirect" size={128} />
          </div>
          <p className="text-xs text-champagne-500">Point your camera at the QR code to download the app</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="py-16 bg-brown-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-champagne-900 mb-6">{title}</h2>
          <p className="text-lg text-champagne-700 mb-8">{description}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          {showQRCode && (
            <div className="flex flex-col items-center gap-6">
              <div className="w-40 h-40 p-4 bg-champagne-50 rounded-xl shadow flex items-center justify-center">
                <QRCode value="https://fitparent.ph/store-redirect" size={160} />
              </div>
              <p className="text-champagne-600 text-sm">Scan to download on iOS or Android</p>
            </div>
          )}
          <div className="flex flex-col items-center gap-4">
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Image src="/app-store-dl.svg" alt="Download on the App Store" width={180} height={54} className="mb-2" />
            </a>
            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Image src="/google-play-dl.svg" alt="Get it on Google Play" width={180} height={54} />
            </a>
            <p className="text-champagne-600 text-sm h-6 flex items-center">Or search "FIT Parent" in your app store</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-champagne-900 mb-3">Why use the app?</h3>
          <ul className="text-champagne-700 text-base mb-6 list-disc list-inside text-left inline-block">
            <li>Access your FIT Parent profile and assessment results</li>
            <li>Check in daily with personalized challenges</li>
            <li>Track your parenting journey and progress</li>
            <li>Receive helpful resources and updates</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 