import img1 from "../assets/img/b0e7d0028251bc86e07b9c8f8bd6c244 1.svg";
import img3 from "../assets/img/Frame 392.svg";
import img4 from "../assets/img/Frame 393.svg";
import arrowDown from "../assets/img/scrollDown.svg";
import "../index.css";

function Banner() {
  return (
    <div className="md:pl-10 flex overflow-y-scroll h-full max-h-[550px] md:max-h-[600px] custom-scrollbar">
      <div className="flex flex-col gap-24 pt-10 pl-3 md:gap-36">
        <h1 className="text-textPrimary font-bold text-[14px] md:text-[40px] md:w-1/2 w-3/4 md:sticky md:top-11 z-0">
          WELCOME <br />
          TO THE INTERNATIONAL MUGHAM CENTER <br /> OF AZERBAIJAN
        </h1>
        <div className="cursor-pointer">
          {/* <p className="rotate-90">SCROLL DOWN</p> */}
          <img src={arrowDown} />
        </div>
        {/* <img src={arrowDown} className="w-6"/> */}
      </div>

      <div className="w-3/4 md:w-1/2 md:gap-5 md:flex ">
        <div className="flex flex-col md:w-1/2 h-[550px] md:h-[1000px]">
          <img src={img1} />
          <div className="flex flex-col justify-between h-40 p-3 border border-t-0 border-b-0 md:p-5 md:h-60">
            <div>
              <h3 className="text-jetBlack text-xs md:text-[15px] font-bold">
                OUR HISTORY
              </h3>
              <p className="text-dimGrey  text-[10px] font-medium overflow-hidden overflow-ellipsis line-clamp-2">
                Three major schools of mugham performance existed from the late
                19th and early 20th centuries in the regions of Karabakh,
                Shirvan, and Baku.
              </p>
            </div>
            <a className="text-textPrimary text-[10px] underline  underline-offset-2 font-bold text-right cursor-pointer">
              READ MORE
            </a>
          </div>
          <img src={img3} />
        </div>

        <div className="md:w-1/2 h-[550px] md:h-[600px]">
          <div className="flex flex-col justify-between h-40 p-3 border-l md:p-5 md:h-60">
            <div>
              <h3 className="text-jetBlack text-[15px] font-bold">MUGHAM</h3>
              <p className="text-dimGrey text-[10px] font-medium overflow-hidden overflow-ellipsis line-clamp-2">
                Mugham or Mughamat is one of the many classical compositions
                from Azerbaijan, contrasting with tasnif and ashik.It is a
                highly complex art form that weds classical
              </p>
            </div>
            <a className="text-textPrimary text-[10px] underline  underline-offset-2 font-bold text-end cursor-pointer">
              READ MORE
            </a>
          </div>
          <img src={img4} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
