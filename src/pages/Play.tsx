import Navbar from "../components/Navbar"
export default function Play() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-3/5">
        <Navbar></Navbar>
        <div className="p-8">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p>This is where your projects will go.</p>
        </div>
      </div>
    </div>
  );
}
