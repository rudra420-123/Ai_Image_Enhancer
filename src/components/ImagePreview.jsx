import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-900 text-white py-3">
          Original Image
        </h2>

        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="Original Image"
            className="w-full h-80 object-cover transition-transform duration-300 transform hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-80 bg-gray-200 text-gray-600 p-6 rounded-xl shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7h16v16H4z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 11l4 4m0 0l-4 4m4-4l-4-4"
              />
            </svg>

            <p className="text-xl font-semibold text-gray-700">
              No Image Selected
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Please upload an image to preview it here.
            </p>
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-900 text-white py-3">
          Enhanced Image
        </h2>

        {props.enhanced && !props.loading ? (
          <img
            src={props.enhanced}
            alt="Enhanced Image"
            className="w-full h-80 object-cover transition-transform duration-300 transform hover:scale-105"
          />
        ) : props.loading ? (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            <Loading />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-80 bg-gray-200 text-gray-600 p-6 rounded-xl shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
            <p className="text-xl font-semibold text-gray-700">
              No Enhanced Image
            </p>
            <p className="text-sm text-gray-500 mt-2">
              The image is still being processed. Please wait...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
