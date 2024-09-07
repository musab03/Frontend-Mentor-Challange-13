import bgtop from "./images/bg-pattern-top.svg";
import bgbottom from "./images/bg-pattern-bottom.svg";
import cardbg from "./images/bg-pattern-card.svg";
import cardimg from "./images/image-victor.jpg";

function App() {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Top background image */}
        <img
          src={bgtop}
          alt="top background"
          className="absolute top-0 left-0 w-[400px] h-[400px] md:w-[1000px] md:h-[900px]"
          style={{ transform: "translate(-30%, -30%)" }}
        />

        
        <img
          src={bgbottom}
          alt="bottom background"
          className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[1000px] md:h-[600px]"
          style={{ transform: "translate(30%, 30%)" }}
        />

        {/* Centered card content */}
        <div className="relative flex justify-center items-center h-full">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
            <img src={cardbg} alt="" className="" />
           
            <img
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white"
              src={cardimg}
              alt="profile"
              width="96"
              height="96"
              />
            

            <h2 className="mt-16 text-lg font-bold">
              Victor Crest <span className="text-gray-500">26</span>
            </h2>
            <p className="text-gray-600">London</p>

            <hr className="border-gray-300 my-4" />

            <div className="flex justify-between  text-gray-700 px-6 py-3">
              <div>
                <h3 className="font-bold">80K</h3>
                <p className="text-xs">Followers</p>
              </div>
              <div>
                <h3 className="font-bold">803K</h3>
                <p className="text-xs">Likes</p>
              </div>
              <div>
                <h3 className="font-bold">1.4K</h3>
                <p className="text-xs">Photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
