import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  // const footerSections = [
  //   {
  //     title: "Produk",
  //     links: [
  //       { name: "Fitur Utama", href: "#" },
  //       { name: "Pricing", href: "#" },
  //       { name: "Integrasi", href: "#" },
  //       { name: "Mobile App", href: "#" },
  //       { name: "API Documentation", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Solusi",
  //     links: [
  //       { name: "Perusahaan Kecil", href: "#" },
  //       { name: "Perusahaan Menengah", href: "#" },
  //       { name: "Enterprise", href: "#" },
  //       { name: "Startup", href: "#" },
  //       { name: "Konsultan HR", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Sumber Daya",
  //     links: [
  //       { name: "Blog", href: "#" },
  //       { name: "Case Studies", href: "#" },
  //       { name: "Webinar", href: "#" },
  //       { name: "E-book", href: "#" },
  //       { name: "HR Templates", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Dukungan",
  //     links: [
  //       { name: "Help Center", href: "#" },
  //       { name: "Contact Support", href: "#" },
  //       { name: "Training", href: "#" },
  //       { name: "System Status", href: "#" },
  //       { name: "Community", href: "#" },
  //     ],
  //   },
  // ];

  // const socialLinks = [
  //   { icon: Facebook, href: "#", label: "Facebook" },
  //   { icon: Twitter, href: "#", label: "Twitter" },
  //   { icon: Instagram, href: "#", label: "Instagram" },
  //   { icon: Linkedin, href: "#", label: "LinkedIn" },
  // ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      {/* <div className="bg-primary">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Dapatkan Tips HR Terbaru
              </h3>
              <p className="text-primary-foreground/80">
                Subscribe newsletter kami untuk mendapatkan insight, tips, dan
                update terbaru seputar manajemen HR dan teknologi.
              </p>
            </div>
            <div className="flex space-x-3">
              <Input
                placeholder="Masukkan email Anda"
                className="bg-white text-gray-900 border-0"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/ppm-logo.png"
                alt="Logo"
                className="w-12 h-auto"
              />
              <div>
                <div className="text-xl font-bold">PPM HRIS</div>
                <div className="text-sm text-gray-400">HRIS Platform</div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Platform HRIS terdepan di Indonesia yang membantu perusahaan
              mengelola sumber daya manusia dengan lebih efisien dan modern.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>primapersadamultimedia@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+62 878 2110 4000</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Bandung, Indonesia</span>
              </div>
            </div>

            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Footer Links */}
          {/* {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
          <div className="flex flex-col gap-4">
            <h5 className="font-semibold text-lg">Direct Menu</h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a
                  href="#preview"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tampilan
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 PT Prima Persada Multimedia. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
