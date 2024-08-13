import { FaEye } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";

export default function TagCards() {

    return (

        <>

            <div className="card font MB-3" style={{ borderRadius: "30px" }}>
                <div className="card-body px-3">
                    <div className="card-head mb-3">
                        <span class="badge text-dark py-2" style={{ backgroundColor: "#F1F4F9",borderRadius: "30px"}}>tagged by <u>@johnnn0x</u></span>
                    </div>
                    <div className="card-content">
                        <p>I worked for over nskdsh hgdkg hgd kkjda hggajh  hdjad hiude8deduedue</p>
                        <a className="card-link text-decoration-none text-dark"><FaEye /> view</a>
                        <a className="card-link text-decoration-none text-dark"><BsTrash /> delete</a>
                        <a className="card-link text-decoration-none text-dark"><BsTrash /> repost</a>
                    </div>
                </div>
            </div>

        </>

    )

}