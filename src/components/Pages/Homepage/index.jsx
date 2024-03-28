import HomeTitle from "../../Layouts/HomeTitle/homeTitle";
import Navbar from "../../Fragments/Navbar";

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 to-gray-950">
      <header className="flex justify-center relative">
        <Navbar className="w-full"></Navbar>
      </header>
      <main className="flex items-center justify-center  my-32 mx-5">
        <HomeTitle />
      </main>
    </div>
  );
};

export default Homepage;
