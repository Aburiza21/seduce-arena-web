import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alex D.",
    role: "Pemain Veteran",
    content: "Gameplay yang sangat intens! Saya tidak pernah berpikir sebuah game romansa bisa memacu adrenalin seperti ini. Waktu terasa sangat cepat saat mencoba bertahan hidup.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=fce4ec"
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Penggemar Visual Novel",
    content: "Karakter Elara ditulis dengan sangat baik. Tantangannya tidak mudah, satu pilihan salah dan semuanya berakhir. Benar-benar bikin penasaran terus!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=fce4ec"
  },
  {
    id: 3,
    name: "Budi T.",
    role: "Casual Gamer",
    content: "Konsep survival dicampur dengan strategi merayu adalah sesuatu yang segar. Sistem Waktu/HP membuat setiap dialog dan keputusan terasa sangat krusial.",
    rating: 4,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi&backgroundColor=fce4ec"
  }
];

export default function Testimoni() {
  return (
    <section id="testimoni" className="w-full py-24 bg-white text-gray-900 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
            Apa Kata <span className="text-pink-600">Mereka?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ribuan pemain telah mencoba bertahan hidup di Seduce Arena. Berikut adalah pengalaman mereka menghadapi tantangan romansa yang mendebarkan ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimoni) => (
            <div key={testimoni.id} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-15px_rgba(236,72,153,0.2)] transition-all duration-300 group hover:-translate-y-2 flex flex-col">
              <div className="flex text-pink-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < testimoni.rating ? "text-pink-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed mb-8 italic flex-grow">
                "{testimoni.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-pink-200 group-hover:border-pink-500 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={testimoni.image} alt={testimoni.name} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimoni.name}</h4>
                  <p className="text-sm text-pink-600 font-medium">{testimoni.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
