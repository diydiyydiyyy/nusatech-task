import Navbar from "./components/navbar";
import login from "./assets/image 4.png";
import FormLogin from "./components/formLogin";

function App() {
  return (
    <div className="bg-[#0B0E11] min-h-screen min-w-screen">
      <Navbar />
      <div className="flex justify-between w-full">
        <div className="w-1/2">
          <img src={login} alt="login" className="" />
        </div>
        <div className="w-1/2 px-24">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}

export default App;
