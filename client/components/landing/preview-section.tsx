import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const featuresWeb = [
  "Dashboard HR: Data kehadiran, payroll, kontrak berakhir",
  "Manajemen Karyawan",
  "Pengelolaan jadwal kerja absensi, cuti, izin, lembur, laporan dan ekspor data payroll",
  "Pembuatan dan distribusi slip gaji",
  "Pengumuman internal dan FAQ",
  "Pengaturan perusahaan, lokasi kantor, rekening perusahaan",
];

const featuresMobile = [
  "Presensi masuk dan keluar",
  "Pengajuan dan cek cuti, izin, sakit dan lembur",
  "Cek slip gaji, dan total cuti",
  "FAQ dan notifikasi",
  "Informasi atau pengumuman",
  "Data personalia karyawan",
  "Produk Digital (Opsional)",
];

export function PreviewSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50 pt-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
          <Badge
            variant="secondary"
            className="mb-2 sm:mb-4 bg-primary/10 text-primary text-sm font-medium"
          >
            Tampilan Modern
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Tampilan <span className="text-primary">Modern</span> dan{" "}
            <span className="text-primary">Mudah Digunakan</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Dengan tampilan yang modern dan mudah digunakan, PPM HRIS memberikan
            pengalaman yang lebih baik kepada pengguna.
          </p>
        </div>
        <div className="flex flex-col gap-12 lg:gap-20 xl:gap-24">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center">
            <img
              src="/images/mockup-web.webp"
              alt="Mockup Web"
              className="w-full h-auto max-w-full max-h-[300px] sm:max-h-[400px] object-contain object-center rounded-2xl shadow-2xl p-2 border border-gray-100 transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-right"
              loading="lazy"
            />
            <div className="flex flex-col gap-4" data-aos="fade-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                Fitur <span className="text-primary">Web</span> PPM HRIS
              </h3>
              <ul className="flex flex-col gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                {featuresWeb.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-left leading-snug"
                  >
                    <span className="mt-1 w-2 h-2 min-w-[0.5rem] bg-primary rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 lg:items-center">
            <div className="flex flex-col gap-4" data-aos="fade-right">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                Fitur <span className="text-primary">Apps</span> PPM HRIS
              </h3>
              <ul className="flex flex-col gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                {featuresMobile.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-left leading-snug"
                  >
                    <span className="mt-1 w-2 h-2 min-w-[0.5rem] bg-primary rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/images/mockup-app.webp"
              alt="Mockup App"
              className="w-full h-auto max-w-full max-h-[300px] sm:max-h-[400px] object-contain object-center rounded-2xl shadow-2xl p-2 border border-gray-100 transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-left"
              loading="lazy"
            />
          </div>
        </div>
        <div className="bg-primary/5 rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Ingin Tahu Lebih Lanjut?
          </h3>
          <div className="flex justify-center items-center">
            <a href="/document/proposal.pdf" download>
              <Button size="lg">Download Proposal</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
