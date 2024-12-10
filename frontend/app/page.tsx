import Header from "./components/Header";
import MainContent from "./components/MainContent";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent />
    </div>
  );
};

export default Home;
