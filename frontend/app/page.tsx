import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-indigo-100 flex justify-center items-center">
      <Header />
      <header className="text-center p-10">
        <h1 className="text-4xl font-bold text-indigo-800">Unreal Deals</h1>
        <p className="mt-4 text-lg text-gray-700">Products coming soon (TM)</p>
      </header>
    </div>
  );
}
