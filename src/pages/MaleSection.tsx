import { useState } from 'react';

const MaleFashion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setDesignFile(file || null);
  };

  const handleSubmit = () => {
    // logging to test
    console.log('Uploaded:', designFile);
    console.log('Description:', description);
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl text-red font-bold text-center mb-8">
        MALE FASHION
      </h1>

      <div className="bg-white rounded-lg p-6 shadow-md max-w-xl mx-auto text-center space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
        />
        {designFile && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
          >
            Add Description
          </button>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Add Design Description</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your design description..."
              className="w-full p-3 border border-gray-300 rounded mb-4"
              rows={4}
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaleFashion;
