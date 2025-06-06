import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface HeaderProps {
  variant?: "default" | "simple"
}

export function Header({ variant = "default" }: HeaderProps) {
  return (
    <header className="bg-champagne-50 shadow-sm border-b border-champagne-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.svg" 
            alt="FIT Parent Logo" 
            width={32} 
            height={32} 
            className="w-6 h-6 rounded-full bg-[#E7A034] p-1" 
          />
          <span className="text-xl font-bold text-champagne-900">FIT Parent</span>
        </Link>
        {variant === "default" && (
          <Button asChild variant="outline" size="sm" className="border-orange-600 text-orange-700 hover:bg-orange-50">
            <Link href="https://profile.fitparent.ph/assessment">Get Your Profile</Link>
          </Button>
        )}
      </div>
    </header>
  )
} 