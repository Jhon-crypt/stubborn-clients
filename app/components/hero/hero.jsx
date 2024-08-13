import { BsEmojiExpressionlessFill } from "react-icons/bs";
import { BsFillEmojiAngryFill } from "react-icons/bs";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Hero() {

    return (

        <>

            <div className="d-flex align-items-center justify-content-center">
                <div>
                    <h1 className="font-six test text-center display-1"><BsEmojiExpressionlessFill /> Stubborn Clients <BsFillEmojiAngryFill /></h1>
                    <p className="text-center display-4 mb-5">For devs with clients that don't pay</p>

                    <div className="d-flex align-items-center justify-content-center">
                        <a href="#complain" className="btn btn-lg btn-outline-dark" style={{ fontSize: "30px", borderRadius: "30px" }}>
                            Get started below <FaLongArrowAltDown />
                        </a>
                    </div>
                </div>
            </div>

        </>

    )

}