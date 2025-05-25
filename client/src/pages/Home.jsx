import { ReactTyped } from "react-typed";


const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        src="/src/assets/bg.mp4"
        autoPlay="{true}"
        loop
        muted
        class="absolute z-10 inset-0 h-full w-full object-cover"
      ></video>

      <div className="fixed inset-0 top-70 z-20 ml-259 overflow-hidden">
        <ReactTyped className="text-8xl font-extrabold bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent" strings={["LAUNCHING SOON....", ]} typeSpeed={100} loop/>
       
        
      </div>
    </div>
  );
};

export default Home;
