import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center">
      <div className="bg-gray-800 border-4 border-gray-500 rounded-lg p-8 w-96 text-center">
        <input
          type="text"
          placeholder="Enter text"
          className="w-full p-4 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
    </div>
  );
}
