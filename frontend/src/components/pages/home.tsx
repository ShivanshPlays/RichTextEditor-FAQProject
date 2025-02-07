import ApiList from "../api-list";
import FaqCreationForm from "../faqCreationForm";
import FaqList from "../faqList";
import PostmanTestGuide from "../PostmanTestGuide";

const Home = () => {
  return (
    <main className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 bg-gray-200 rounded-lg p-2">
        Frontend
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[75vh]">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Create New FAQ</h2>
          <FaqCreationForm />
        </div>
        <div className="h-full">
          <h2 className="text-2xl font-semibold mb-4">FAQ List</h2>
          <FaqList />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-8 bg-gray-200 rounded-lg p-2">
        Backend
      </h1>
      <div className="grid grid-cols-2 gap-20">
        <PostmanTestGuide />
        <ApiList />
      </div>
      <h1 className="text-3xl font-bold mb-8 bg-gray-200 rounded-lg p-2 mt-20">
        Architecture
      </h1>
      <img className="col-span-2 rounded-lg" src="BE.png" />
    </main>
  );
};

export default Home;
