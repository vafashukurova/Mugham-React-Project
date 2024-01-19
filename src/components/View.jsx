import mikeImg from "../assets/img/mike.svg";
import kamaImg from "../assets/img/kama.svg"

function View() {
  return (
    <section className="container flex flex-col pt-20">
        <div className="flex justify-between text-textPrimary font-bold items-center uppercase border-b border-lightGrey pb-3">
            <h3 className="md:text-[24px] text-[20xp]">now on view</h3>
            <a className="md:text-[13px] text-[10px] underline underline-offset-2 cursor-pointer">see more</a>
        </div>
        <div className="md:flex justify-between pt-5">
            <div>
                <img src={mikeImg} className="h-[200px] w-[500px] md:h-[350px] object-cover"/>
                <h6 className="text-textPrimary text-[16px] font-bold pt-3">MIKE DELL FERRO FEAT SAIDE TAGIZADEH</h6>
                <p className="text-dimGrey text-[13px] border-b  border-lightGrey py-2">10th December,2022</p>
            </div>

            <div>
                <img src={kamaImg}  className="h-[200px] w-[500px] md:h-[250px] object-cover"/>
                <h6 className="text-textPrimary text-[16px] font-bold pt-3">KAMA KAMILLA FEAT DJ GAIA SOLO CONCERT</h6>
                <p className="text-dimGrey text-[13px] border-b border-lightGrey py-2">10th December,2022</p>
            </div>
        </div>
    </section>
  )
}

export default View
