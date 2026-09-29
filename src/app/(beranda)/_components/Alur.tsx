export default function Alur() {
  return (
    <div className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-10px_rgba(236,72,153,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
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
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Alur Permainan
        </h3>
        <ul className="space-y-6 text-gray-600 text-lg">
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-pink-100 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-fuchsia-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold text-sm mt-1">
              1
            </span>
            <p>
              <strong className="text-gray-900">
                Identifikasi Target:
              </strong>{" "}
              Temukan dan pelajari karakteristik berbagai wanita di
              sekitar Anda.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-pink-100 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-fuchsia-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold text-sm mt-1">
              2
            </span>
            <p>
              <strong className="text-gray-900">
                Pecahkan Tantangan:
              </strong>{" "}
              Taklukkan hati mereka dengan menyelesaikan dialog bercabang,
              misi, dan rintangan unik setiap individu.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-pink-100 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-fuchsia-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold text-sm mt-1">
              3
            </span>
            <p>
              <strong className="text-gray-900">Bertahan Hidup:</strong>{" "}
              Bangun keintiman fisik untuk mendapatkan energi kehidupan
              dan melanjutkan perjalanan Anda.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
