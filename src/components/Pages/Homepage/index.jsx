import HomeTitle from "../../Layouts/HomeTitle/homeTitle";
import Navbar from "../../Fragments/Navbar";

const Homepage = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-950 flex flex-col justify-between">
      <Navbar />
      <main className="flex flex-col sm:flex-row items-center justify-center mx-10 gap-9 sm:gap-24">
        <HomeTitle />
      </main>
      <footer className="text-slate-400 text-center mt-10 text-[0.75rem] bg-gray-900 py-2">
        <span>©2024 Tongky</span>
      </footer>
    </div>
  );
};

export default Homepage;
