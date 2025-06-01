import data from "@/data/data.json";

export default async function SiswaPage({ params }) {
  const siswa = data.find((s) => s.nisn === params.nisn);

  if (!siswa) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        Data tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <img
        src={siswa.foto}
        alt={siswa.nama}
        className="w-48 h-48 object-cover rounded-full shadow"
      />
      <h1 className="text-2xl font-semibold">{siswa.nama}</h1>
      <p className="text-gray-700">{siswa.ttl}</p>
      <p className="text-green-600 text-xl font-bold">LULUS</p>
    </div>
  );
}
