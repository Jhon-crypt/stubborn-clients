export default function TagClientModal() {

    return (

        <>

            <div class="modal fade" id="tagClientModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Tag client</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body font">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="alert alert-info p-2 text-center" style={{ borderRadius: "30px" }}>
                                    When you tag, we post @stubbornClients on x
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Client username</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="@stubbornClient419" style={{ borderRadius: "30px" }}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Your username</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="@inncoentDev666" style={{ borderRadius: "30px" }}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your complain</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ borderRadius: "30px" }}></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "30px" }}>Create Tag</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}