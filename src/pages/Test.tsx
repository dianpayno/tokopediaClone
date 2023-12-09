import SvgImage from "../assets/fixingImage.svg";

const Test = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl font-semibold capitalize flex flex-col items-center">
       
        <img src={SvgImage} className="w-[30%]" alt="" />
        <p>sorry! we are working on it.</p>
      </div>
    </div>
  );
};

export default Test;
