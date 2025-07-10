import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wijaya",
    position: "HR Director",
    company: "PT Teknologi Maju",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "PPM HRIS mengubah cara kami mengelola HR. Dari proses manual yang memakan waktu menjadi otomatis dan akurat. Tim HR kami sekarang bisa fokus pada hal-hal strategis.",
    rating: 5,
    companyLogo: "🏢",
  },
  {
    name: "Budi Santoso",
    position: "CEO",
    company: "CV Digital Kreasi",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "Sebagai startup yang berkembang pesat, kami membutuhkan sistem HR yang scalable. PPM HRIS tidak hanya memenuhi kebutuhan saat ini tapi juga mendukung pertumbuhan kami.",
    rating: 5,
    companyLogo: "🚀",
  },
  {
    name: "Lisa Chen",
    position: "Operations Manager",
    company: "PT Manufaktur Indonesia",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Implementasi PPM HRIS sangat smooth dengan support team yang responsif. Karyawan kami langsung bisa menggunakan sistem tanpa kesulitan berarti.",
    rating: 5,
    companyLogo: "🏭",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-green-100 text-green-700"
          >
            Testimoni Klien
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dipercaya oleh
            <span className="text-primary block">Berbagai Perusahaan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan langsung dari klien kami tentang bagaimana PPM HRIS
            membantu mereka mencapai efisiensi dan produktivitas yang lebih
            baik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span className="mr-2">{testimonial.companyLogo}</span>
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8">
            Dipercaya oleh perusahaan terkemuka
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">COMPANY A</div>
            <div className="text-2xl font-bold text-gray-400">COMPANY B</div>
            <div className="text-2xl font-bold text-gray-400">COMPANY C</div>
            <div className="text-2xl font-bold text-gray-400">COMPANY D</div>
          </div>
        </div>
      </div>
    </section>
  );
}
