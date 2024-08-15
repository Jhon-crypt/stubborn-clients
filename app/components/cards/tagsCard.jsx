import { FaEye } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";

export default function TagCards() {

    return (

        <>

            <div className="card font MB-3" style={{ borderRadius: "30px" }}>
                <div className="card-body px-3">
                    <div className="card-head mb-3">
                        <span class="badge text-dark py-2" style={{ backgroundColor: "#F1F4F9", borderRadius: "30px" }}>tagged by <u>@johnnn0x</u></span>
                    </div>
                    <div className="card-content">
                        <p>I worked for over nskdsh hgdkg hgd kkjda hggajh  hdjad hiude8deduedue</p>

                        <p>
                            <button class="btn btn-btn-md btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" style={{ borderRadius: "30px" }}>
                                View proofs
                            </button>
                        </p>
                        <div style={{ "minHeight": "100px;" }}>
                            <div class="collapse collapse-horizontal" id="collapseWidthExample">
                                <div class="card card-body mb-5">
                                    <div className="row row-cols-1">
                                        <div className="col mb-3">
                                            <img className="rounded img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPsS2NGH4mCKJ5DwPz3x4yFCdl6UQiDvr6Q&s" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="col">
                                            <img className="rounded img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPsS2NGH4mCKJ5DwPz3x4yFCdl6UQiDvr6Q&s" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                                        </div>
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