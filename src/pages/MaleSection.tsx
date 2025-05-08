import { useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import Modal from '../components/Modal';
import { toast } from 'sonner';

const MaleFashion = () => {
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDesignFile(file);
      setImagePreview(URL.createObjectURL(file));
      toast('Upload started...');
    }
  };

  const handleReUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleSubmit = () => {
    console.log('Uploaded:', designFile);
    console.log('Description:', description);

    toast.success('Design uploaded successfully!');

    // Reset state
    setDesignFile(null);
    setImagePreview(null);
    setDescription('');
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-center text-red-600 mb-8">
        MALE FASHION
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto space-y-4">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-auto rounded border border-gray-300"
          />
        )}

        {designFile && (
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={handleReUpload}>
              ReUpload
            </Button>
            <Button onClick={() => setIsModalOpen(true)}>
              Add Description
            </Button>
          </div>
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
