import Layout from '../components/layout/layout';
import MaleFashion from '../pages/MaleSection';

const App = () => {
  return (
    <div>
      <Layout>
        <div className="flex justify-center items-center h-full">
          <MaleFashion />
        </div>
      </Layout>
    </div>
  );
};
export default App;
