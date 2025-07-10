import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Play,
  Users,
  Clock,
  FileText,
  DollarSign,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-primary/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-10 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <Badge
              variant="secondary"
              className="w-fit bg-primary/10 text-primary border-primary/20"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Solusi HRIS Terdepan di Indonesia
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Kelola SDM Lebih
                <span className="text-primary block">Efisien & Modern</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Platform HRIS all-in-one yang membantu perusahaan mengelola
                karyawan, absensi, penggajian, dan administrasi HR dengan mudah
                dan akurat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                >
                  Hubungi Kami Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 px-8 py-6 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Lihat Demo
              </Button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-600">Perusahaan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-gray-600">Karyawan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          {/* <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  PPM HRIS Dashboard
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Users className="h-8 w-8 text-primary" />
                      <span className="text-2xl font-bold text-primary/90">
                        248
                      </span>
                    </div>
                    <p className="text-sm text-primary mt-2">Total Karyawan</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Clock className="h-8 w-8 text-green-600" />
                      <span className="text-2xl font-bold text-green-900">
                        96%
                      </span>
                    </div>
                    <p className="text-sm text-green-600 mt-2">Kehadiran</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <FileText className="h-8 w-8 text-purple-600" />
                      <span className="text-2xl font-bold text-purple-900">
                        12
                      </span>
                    </div>
                    <p className="text-sm text-purple-600 mt-2">Cuti Pending</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <DollarSign className="h-8 w-8 text-orange-600" />
                      <span className="text-2xl font-bold text-orange-900">
                        85M
                      </span>
                    </div>
                    <p className="text-sm text-orange-600 mt-2">
                      Total Payroll
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="relative" data-aos="fade-left">
            <img
              src="/images/section-home-1.webp"
              alt="Section Web"
              className="w-full h-auto object-cover object-center shadow-2xl p-6 border border-gray-100 rounded-2xl"
              loading="eager"
            />
            <img
              src="/images/section-home-2.webp"
              alt="Section App"
              className="absolute bottom-0 right-0 2xl:-right-24 w-1/4 h-auto object-contain object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
