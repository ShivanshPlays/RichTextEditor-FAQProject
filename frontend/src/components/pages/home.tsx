import FaqCreationForm from "../faqCreationForm";
import FaqList from "../faqList";

const Home = () => {
  return (
    <main className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Frontend</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Create New FAQ</h2>
          <FaqCreationForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">FAQ List</h2>
          <FaqList />
        </div>
      </div>
    </main>
  );
};

export default Home;
