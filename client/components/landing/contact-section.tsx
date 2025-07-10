import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import Spinner from "../ui/spinner";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [employeeCount, setEmployeeCount] = useState("");
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    emailjs
      .sendForm(
        "service_9u8el7u",
        "template_5suvd7l",
        formRef.current,
        "MjaInuR8oK4R-34tI",
      )
      .then(
        () => {
          toast.success("Form berhasil dikirim!");
          setLoading(false);
          formRef.current?.reset();
          setEmployeeCount("");
          setIndustry("");
        },
        () => {
          toast.error("Gagal mengirim form. Coba lagi nanti.");
          setLoading(false);
        },
      );
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge
            variant="secondary"
            className="mb-4 bg-green-100 text-green-700"
          >
            Hubungi Kami
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Siap Memulai dengan
            <span className="text-primary block">PPM HRIS?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim ahli kami siap membantu Anda memilih solusi terbaik untuk
            kebutuhan HR perusahaan. Jadwalkan konsultasi gratis hari ini juga!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="w-full"
          >
            <Card className="shadow-xl border-0 w-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Daftarkan perusahaan anda untuk mendapatkan harga presale
                  sekarang!
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Isi form di bawah ini dan tim kami akan menghubungi Anda dalam
                  24 jam
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nama Depan *</Label>
                    <Input
                      id="firstName"
                      name="first_name"
                      required
                      placeholder="John"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nama Belakang *</Label>
                    <Input
                      id="lastName"
                      name="last_name"
                      required
                      placeholder="Doe"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Bisnis *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    placeholder="+62 812 3456 7890"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Nama Perusahaan *</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    placeholder="PT. Nama Perusahaan"
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="employees">Jumlah Karyawan</Label>
                    <Select onValueChange={setEmployeeCount}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih jumlah" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 karyawan</SelectItem>
                        <SelectItem value="11-50">11-50 karyawan</SelectItem>
                        <SelectItem value="51-200">51-200 karyawan</SelectItem>
                        <SelectItem value="201-500">
                          201-500 karyawan
                        </SelectItem>
                        <SelectItem value="500+">500+ karyawan</SelectItem>
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      name="employeeCount"
                      value={employeeCount}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industri</Label>
                    <Select onValueChange={setIndustry}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih industri" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Teknologi</SelectItem>
                        <SelectItem value="manufacturing">
                          Manufaktur
                        </SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="healthcare">Kesehatan</SelectItem>
                        <SelectItem value="finance">Keuangan</SelectItem>
                        <SelectItem value="other">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="industry" value={industry} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan (Opsional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ceritakan tentang kebutuhan HR perusahaan Anda..."
                    className="min-h-[100px] w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                >
                  {loading ? <Spinner /> : "Jadwalkan Konsultasi Sekarang"}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Dengan mengirim form ini, Anda menyetujui syarat dan ketentuan
                  kami
                </p>
              </CardContent>
            </Card>
          </form>

          {/* Contact Info — unchanged */}
          <div className="space-y-8 px-4 sm:px-6" data-aos="fade-up">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cara Lain untuk Menghubungi Kami
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">
                      admin@primapersadamultimedia.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telepon</div>
                    <div className="text-gray-600">
                      +62 878 2110 4000 (WhatsApp)
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Kantor</div>
                    <div className="text-gray-600">
                      Ruko Sinergi Antapani
                      <br />
                      Jl. Raya Cibodas No.18 Kel. Antapani, Kec. Antapani, Kota
                      Bandung
                      <br />
                      Jawa Barat - 40291
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Jam Operasional
                    </div>
                    <div className="text-gray-600">
                      Senin - Jumat: 08.00 - 17.00 WIB
                      <br />
                      Sabtu: 08.00 - 14.00 WIB
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
