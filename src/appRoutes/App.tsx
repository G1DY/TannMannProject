import Layout from '../components/layout/layout';
import PreviewDescription from '../pages/PreviewDescription';
import UploadFile from '../pages/UploadFile';

const App = () => {
  return (
    <div>
      <Layout>
        <div className="flex justify-center items-center h-full">
          <UploadFile />
        </div>
        <PreviewDescription />
      </Layout>
    </div>
  );
};
export default App;
