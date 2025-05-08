import { useState } from 'react';
import Modal from '../components/Modal';

const MaleFashion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setDesignFile(file || null);
  };

  const handleSubmit = () => {
    console.log('Uploaded:', designFile);
    console.log('Description:', description);
    setIsModalOpen(false);
    // Optionally reset form here
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

      <Modal
        open={isModalOpen}
        description={description}
        setDescription={setDescription}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default MaleFashion;
