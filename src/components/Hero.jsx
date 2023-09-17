import bigShoe from "../assets/images/big-shoe1.png";

const Hero = () => {
  return (
    <div className="mt-[50px] flex flex-column justify-between px-11">
      <div>
        <p className="text-[#c48782] pt-6 font-medium">
          Our Summer collections
        </p>
        <p className="text-7xl pt-6 font-semibold">The New Arrival</p>
        <p className="text-7xl pt-6 font-semibold">
          <span className="text-[#e06d63]">Nike</span> Shoes
        </p>
        <p className="text-[#737272] mt-4">
          Discover stylish Nike arrivals, quality
        </p>
        <p className="text-[#737272]">
          comfort, and innovation for active life
        </p>
        <button className="bg-[#e06d63] pt-2 pb-2 px-4 mt-4 rounded-3xl text-white">
          Shop now
        </button>
      </div>
      <div>
        <img src={bigShoe} width={500} />
      </div>
    </div>
  );
}

export default Hero