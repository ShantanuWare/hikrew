import Places from "@/components/Places";

function Trekking() {
  return (
    <div className=" py-8 text-black font-lobster">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold ">Choose Your Destination</h2>
        </div>
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Places service={"trekking"}></Places>
            <Places service={"trekking"}></Places>
            <Places service={"trekking"}></Places>
            <Places service={"trekking"}></Places>
            <Places service={"trekking"}></Places>
            <Places service={"trekking"}></Places>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trekking;
