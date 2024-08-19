import { FaEye } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";

export default function TagCards(props) {

    return (

        <>

            <div className="card font mb-3" style={{ borderRadius: "30px" }}>
                <div className="card-body px-3">
                    <div className="card-headd mb-3">
                        <span class="badge text-dark py-2" style={{ backgroundColor: "#F1F4F9", borderRadius: "30px" }}>tagged by <u>{props.creator}</u></span>
                    </div>
                    <div className="card-content">
                        <p>{props.complain}</p>

                        <p>
                            <button class="btn btn-btn-md btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.tag_id}`} aria-expanded="false" aria-controls="collapseWidthExample" style={{ borderRadius: "30px" }}>
                                View proofs
                            </button>
                        </p>
                        <div style={{ "minHeight": "100px;" }}>
                            <div class="collapse collapse-horizontal" id={`collapse${props.tag_id}`}>
                                <div class="card card-body mb-5">
                                    <div className="row row-cols-1">
                                        {props.proofs.map((image, index) => (
                                            <div className="col mb-3" key={index}>
                                                <img className="rounded img-thumbnail" src={`https://floffshqxewdpeyrrwbl.supabase.co/storage/v1/object/public/proofs/${image}`} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <a className="card-link text-decoration-none text-dark">
                                <span class="badge text-dark py-2" style={{ backgroundColor: "#F1F4F9", borderRadius: "30px" }}><FaEye /> view on X</span>
                            </a>
                            <a className="card-link text-decoration-none text-dark">
                                <span class="badge text-danger py-2" style={{ backgroundColor: "#F8D7DA", borderRadius: "30px" }}><BsTrash /> delete</span>
                            </a>
                            <a className="card-link text-decoration-none text-dark">
                                <span class="badge text-dark py-2" style={{ backgroundColor: "#F1F4F9", borderRadius: "30px" }}><BiRepost /> repost</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}