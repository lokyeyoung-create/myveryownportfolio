import Navbar from "../components/Navbar";
export default function Work() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-3/5">
        <div className="fixed w-3/5 mx-auto top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
          <Navbar />
        </div>
        <div className="pt-32 p-8">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p>This is where your projects will go.</p>
        </div>
      </div>
    </div>
  );
}
