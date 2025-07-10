import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";

const plans = [
  // {
  //   name: "Starter",
  //   price: "99.000",
  //   period: "per bulan",
  //   description: "Cocok untuk perusahaan kecil dengan 1-50 karyawan",
  //   badge: null,
  //   features: [
  //     "Manajemen data karyawan",
  //     "Absensi dasar",
  //     "Slip gaji digital",
  //     "Dashboard basic",
  //     "Support email",
  //     "1 lokasi kantor",
  //   ],
  //   buttonText: "Mulai Gratis",
  //   buttonVariant: "outline" as const,
  //   popular: false,
  // },
  {
    name: "Perbulan",
    // price: "Custom",
    // period: "hubungi kami",
    description:
      "Cocok untuk perusahaan yang ingin mencoba layanan kami tanpa komitmen panjang. Bayar per bulan dan berhenti kapan saja.",
    badge: "",
    // features: [
    //   "Semua fitur Professional",
    //   "Custom workflow",
    //   "Advanced security",
    //   "Dedicated account manager",
    //   "On-premise deployment",
    //   "Custom integration",
    //   "24/7 phone support",
    //   "Training & onboarding",
    // ],
    buttonText: "Hubungi Sales",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Pertahun",
    // price: "199.000",
    // period: "per bulan",
    description:
      "Harga lebih terjangkau untuk penggunaan jangka panjang. Dapatkan 1 buah pc dan diskon hingga 25% dengan berlangganan selama 1 tahun penuh!",
    badge: "Paling Populer",
    // features: [
    //   "Semua fitur Starter",
    //   "Manajemen cuti advanced",
    //   "Payroll automation",
    //   "Analytics & reports",
    //   "Mobile app",
    //   "Multiple lokasi",
    //   "API integration",
    //   "Support prioritas",
    // ],
    buttonText: "Hubungi Sales",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Customize",
    // price: "Custom",
    // period: "hubungi kami",
    description:
      "Cocok untuk perusahaan dengan kebutuhan khusus. Sesuaikan fitur, kapasitas, dan integrasi sesuai workflow perusahaan Anda.",
    badge: "",
    // features: [
    //   "Semua fitur Professional",
    //   "Custom workflow",
    //   "Advanced security",
    //   "Dedicated account manager",
    //   "On-premise deployment",
    //   "Custom integration",
    //   "24/7 phone support",
    //   "Training & onboarding",
    // ],
    buttonText: "Hubungi Sales",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge
            variant="secondary"
            className="mb-4 bg-purple-100 text-purple-700"
          >
            Paket Harga
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pilih Paket yang
            <span className="text-primary block">Sesuai Kebutuhan Anda</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Semua paket sudah termasuk implementasi gratis dan training untuk
            tim Anda.
          </p>
        </div>

        <div className="flex justify-center items-center" data-aos="fade-up">
          <div className="flex flex-col lg:grid lg:grid-cols-3 items-center justify-center gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-300 w-full max-w-md mx-auto ${
                  plan.popular
                    ? "ring-2 ring-primary shadow-xl scale-105"
                    : "shadow-lg border-0"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-12">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6">
                    {plan.description}
                  </CardDescription>
                  <div className="mb-6">
                    {/* <div className="flex items-baseline justify-center">
                    {plan.price !== "Custom" && (
                      <span className="text-gray-500 text-sm mr-1">Rp</span>
                    )}
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-500 text-sm ml-1">K</span>
                    )}
                  </div> */}
                    {/* <p className="text-gray-500 text-sm mt-1">{plan.period}</p> */}
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  {/* <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul> */}
                  <a href="https://wa.me/6287821104000" target="_blank">
                    <Button
                      className={`w-full py-6 text-lg ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-white"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                      }`}
                      variant={plan.buttonVariant}
                    >
                      {plan.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div
          className="text-center bg-primary/5 rounded-2xl p-8"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Semua Paket Termasuk
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-medium text-gray-900">Setup Gratis</div>
              <div className="text-sm text-gray-600">
                Implementasi tanpa biaya tambahan
              </div>
            </div>
            <div>
              <div className="text-3xl mb-2">📚</div>
              <div className="font-medium text-gray-900">Training</div>
              <div className="text-sm text-gray-600">
                Pelatihan untuk seluruh tim
              </div>
            </div>
            <div>
              <div className="text-3xl mb-2">🔄</div>
              <div className="font-medium text-gray-900">Migrasi Data</div>
              <div className="text-sm text-gray-600">
                Transfer data dari sistem lama
              </div>
            </div>
            <div>
              <div className="text-3xl mb-2">🛡️</div>
              <div className="font-medium text-gray-900">Keamanan Tinggi</div>
              <div className="text-sm text-gray-600">Enkripsi end-to-end</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
