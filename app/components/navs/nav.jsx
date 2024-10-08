import TagClientModal from "../modal/tagClientModal"

export default function Navs() {

    return (

        <>

            <div className="d-flex justify-content-between align-items-center mb-5">
                <div>
                    <h4 style={{ fontFamily: "Montserrat, sans-serif" }}>Complain Tags</h4>

                </div>
                <div>
                    <button className="btn btn-md btn-outline-dark" data-bs-toggle="modal" data-bs-target="#tagClientModal" style={{ borderRadius: "30px" }}>
                        Tag a client
                    </button>
                </div>
            </div>

            <TagClientModal />

        </>

    )

}