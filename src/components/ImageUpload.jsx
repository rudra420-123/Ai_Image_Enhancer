import { useState, useCallback } from "react";

const ImageUpload = (props) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      ShowImageHandler({ target: { files: [file] } });
    }
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-5 w-full max-w-2xl mx-auto">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-4 cursor-pointer transition duration-300 text-center ${
          isDragging ? "border-blue-600 bg-blue-200" : "border-gray-500"
        }`}
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={ShowImageHandler}
        />

        <label
          htmlFor="fileInput"
          className="w-full flex flex-col items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4.5 10l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
          <p className="text-gray-700 font-semibold text-lg mt-2">
            Click or drag an image here to upload
          </p>
          <p className="text-sm text-gray-500">PNG, JPG, JPEG up to 10MB</p>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
