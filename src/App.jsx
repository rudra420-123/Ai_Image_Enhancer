import Home from "./components/Home";
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-8 px-2">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Drop your image in and watch the AI instantly enhance it with stunning
          detail and crisp quality.
        </p>
      </div>

      <Home />
      <footer className="text-gray-300 text-center py-6 text-sm mt-auto">
        <p className="mb-1">
          &copy; 2025 Rudra Prasad Nayak. All rights reserved.
        </p>
        <p>
          Made with <span className="text-red-500">❤️</span> using AI —
          Developed by{" "}
          <span className="font-semibold text-gray-400">
            @Rudra Prasad Nayak
          </span>
        </p>
      </footer>
    </div>
  );
};

export default App;
