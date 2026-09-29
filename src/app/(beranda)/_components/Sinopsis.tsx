export default function Sinopsis() {
  return (
    <div className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-10px_rgba(236,72,153,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      {/* Inner glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-pink-500/0 to-fuchsia-500/0 group-hover:from-pink-50 group-hover:to-fuchsia-50 transition-all duration-500 rounded-3xl" />

      <div className="relative z-10">
        <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 border border-pink-100 shadow-sm group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-fuchsia-600 transition-all duration-300">
          <svg
            className="w-7 h-7 text-pink-500 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Sinopsis
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          Karakter utama terjangkit sebuah penyakit misterius dan
          mematikan. Satu-satunya penawar untuk menunda kematian dan terus
          bertahan hidup adalah dengan membangun keintiman fisik. Anda
          harus merayu berbagai karakter wanita, yang masing-masing
          memiliki kepribadian, latar belakang, dan rintangannya
          tersendiri, untuk mempertahankan hidup Anda dalam perlombaan
          melawan waktu.
        </p>
        <div className="mt-6 flex items-center gap-2 text-pink-500 text-sm italic font-medium">
          <span>❤</span>
          <span>Setiap pilihan membawa konsekuensi yang menggoda.</span>
        </div>
      </div>
    </div>
  );
}
