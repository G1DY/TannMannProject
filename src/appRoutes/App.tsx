import { Toaster } from 'sonner';
import Layout from '../components/layout/Layout';
import MaleFashion from '../pages/MaleSection';

const App = () => {
  return (
    <div>
      <Toaster richColors position="top-center" />
      <Layout>
        <div className="flex justify-center items-center h-full">
          <MaleFashion />
        </div>
      </Layout>
    </div>
  );
};
export default App;
