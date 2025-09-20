import "./App.css";

export default function App() {
  const itens = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Lista de Cartões</h1>

      {/* Container responsivo */}
      <div className="w-full max-w-md flex flex-col gap-3">
        {itens.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-md px-4 py-3 shadow-sm"
          >
            <h2 className="text-gray-900 font-medium">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
