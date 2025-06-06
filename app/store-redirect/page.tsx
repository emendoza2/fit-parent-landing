"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const APPLE_STORE_URL = "https://testflight.apple.com/join/c6QWRe9z"
const GOOGLE_PLAY_URL = "https://drive.google.com/file/d/1UP8NLyjP2Eq-GB5ijGpOE4756rlDnPwn/view?usp=sharing"
const HOMEPAGE_URL = "https://fitparent.ph/"

export default function StoreRedirectPage() {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent || ""
      if (/android/i.test(userAgent)) {
        window.location.replace(GOOGLE_PLAY_URL)
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !("MSStream" in window)) {
        window.location.replace(APPLE_STORE_URL)
      } else {
        window.location.replace(HOMEPAGE_URL)
      }
    }
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600 mb-6" />
      <p className="text-stone-700 text-lg">Redirecting you to the right app store...</p>
    </div>
  )
} 