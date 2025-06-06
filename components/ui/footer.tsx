import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-brown-900 text-champagne-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.svg" 
                alt="FIT Parent Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8 rounded-full bg-[#E7A034] p-1" 
              />
              <span className="text-xl font-bold">FIT Parent</span>
            </div>
            <p className="text-champagne-200">
              Join a movement that advocates for healthy parenting that is family-focused, intentional, and
              truth-centered.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-champagne-200">Email: hello@fitparent.ph</p>
            <p className="text-champagne-200">Website: www.fitparent.ph</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/people/FIT-Parent/61576955067819/" 
                className="text-champagne-200 hover:text-champagne-50 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
              <Link 
                href="https://www.instagram.com/fitparent.ph" 
                className="text-champagne-200 hover:text-champagne-50 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
              <Link 
                href="https://www.tiktok.com/@fitparent.ph" 
                className="text-champagne-200 hover:text-champagne-50 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                TikTok
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-champagne-800 mt-8 pt-8 text-center text-champagne-200">
          <p>&copy; {new Date().getFullYear()} FIT Parent. All rights reserved.</p>
          <div className="mt-2 flex flex-col md:flex-row gap-2 justify-center items-center text-xs">
            <Link 
              href="https://profile.fitparent.ph/privacy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-champagne-200"
            >
              Privacy Policy
            </Link>
            <span className="hidden md:inline">&middot;</span>
            <Link 
              href="https://profile.fitparent.ph/terms" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-champagne-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 