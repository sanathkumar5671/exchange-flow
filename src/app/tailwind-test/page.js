export default function TailwindTest() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
        <h1 className="text-3xl font-bold mb-4">Tailwind CSS Test</h1>
        <p className="text-lg">
          If you can see this styled with blue background and white text,
          Tailwind is working!
        </p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-red-500 p-4 rounded">Red</div>
        <div className="bg-green-500 p-4 rounded">Green</div>
        <div className="bg-yellow-500 p-4 rounded">Yellow</div>
      </div>
    </div>
  );
}
