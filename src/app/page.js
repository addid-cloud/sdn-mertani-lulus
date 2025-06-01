"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [nisn, setNisn] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nisn.trim()) {
      router.push(`/siswa/${nisn.trim()}`);
    }
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen"
      key="home"
    >
      <h1 className="text-2xl font-bold mb-4">Cek Kelulusan</h1>
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="text"
          placeholder="Masukkan NISN"
          value={nisn}
          onChange={(e) => setNisn(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cek
        </button>
      </form>
    </main>
  );
}
