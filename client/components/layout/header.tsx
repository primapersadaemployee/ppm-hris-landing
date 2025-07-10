import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Users } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Beranda", href: "#home" },
    { name: "Fitur", href: "#features" },
    { name: "Tampilan", href: "#preview" },
    { name: "Harga", href: "#pricing" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* <div className="p-2 bg-primary rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div> */}
            <img
              src="/images/ppm-logo.png"
              alt="Logo"
              className="w-12 h-auto"
            />
            <div>
              <div className="text-xl font-bold text-gray-900">PPM HRIS</div>
              <div className="text-xs text-gray-500 -mt-1">HRIS Platform</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600">
              Masuk
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Coba Gratis
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-primary font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full text-gray-600">
                  Masuk
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Coba Gratis
                </Button>
              </div> */}
            </nav>
          </div>
        )}
      </div>

      {/* Announcement Bar */}
      {/* <div className="bg-primary text-white py-2 px-6 text-center">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <Badge
            variant="secondary"
            className="bg-primary/80 text-white border-primary/60"
          >
            🎉 NEW
          </Badge>
          <span>
            Dapatkan diskon 30% untuk pelanggan baru hingga akhir bulan!
          </span>
          <Button
            variant="link"
            className="text-white underline p-0 h-auto text-sm"
          >
            Pelajari lebih lanjut
          </Button>
        </div>
      </div> */}
    </header>
  );
}
