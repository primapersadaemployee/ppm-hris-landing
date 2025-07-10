import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Clock,
  FileText,
  DollarSign,
  Shield,
  BarChart3,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Manajemen Karyawan",
    description:
      "Kelola data karyawan lengkap dengan profil, dokumen, dan informasi pekerjaan secara terpusat",
    badge: "PIM",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Absensi & Kehadiran",
    description:
      "Sistem absensi real-time dengan GPS tracking, WiFi (Internet Connection), Face recognition, dan laporan kehadiran otomatis",
    badge: "Time & Attendance",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Manajemen Cuti",
    description:
      "Proses pengajuan dan persetujuan cuti yang mudah dengan workflow otomatis dan notifikasi",
    badge: "Leave Management",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: DollarSign,
    title: "Payroll & Penggajian",
    description:
      "Perhitungan gaji otomatis, slip gaji digital, dan perhitungan perpajakan otomatis",
    badge: "Payroll",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Dashboard analytics dengan insight mendalam dan laporan HR yang customizable",
    badge: "Analytics",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Role & Permission",
    description:
      "Sistem keamanan berlapis dengan kontrol akses berdasarkan peran dan departemen",
    badge: "Security",
    gradient: "from-gray-600 to-gray-800",
  },
];

const additionalFeatures = [
  { icon: Smartphone, text: "Mobile App iOS & Android" },
  { icon: Globe, text: "Multi-lokasi & Multi-cabang" },
  { icon: Zap, text: "API Integration Ready" },
  { icon: Shield, text: "Akses Real-time" },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary"
          >
            Fitur Unggulan
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solusi HR Lengkap untuk
            <span className="text-primary block">
              Semua Kebutuhan Perusahaan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari manajemen karyawan hingga penggajian, semua dalam satu platform
            yang mudah digunakan dan dapat disesuaikan dengan kebutuhan bisnis
            Anda.
          </p>
        </div>

        {/* Main Features Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          data-aos="fade-up"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Plus Fitur Tambahan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
