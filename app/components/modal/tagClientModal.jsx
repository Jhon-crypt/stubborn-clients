"use client"
import { useState, useRef } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function TagClientModal() {

    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef(null); // Reference for file input

    const [formData, setFormData] = useState({
        clientUsername: '',
        devUsername: '',
        images: [],
        complain: '' // Updated to handle multiple images
    });

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        Promise.all(files.map(fileToDataURL))
            .then((images) => {
                setFormData((prevData) => ({
                    ...prevData,
                    images: [...prevData.images, ...images]
                }));
            })
            .catch((error) => {
                console.error('Error reading files:', error);
            });
    };

    const fileToDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = () => {
                reject(reader.error);
            };

            reader.readAsDataURL(file);
        });
    };

    const handleDelete = (index) => {
        setFormData((prevData) => {
            const updatedImages = [...prevData.images];
            updatedImages.splice(index, 1);
            return {
                ...prevData,
                images: updatedImages
            };
        });

        // Reset the file input field
        fileInputRef.current.value = null;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        setLoading(true)

        e.preventDefault();

        const data = new FormData();
        data.append('clientUsername', formData.clientUsername);
        data.append('devUsername', formData.devUsername);
        data.append('complain', formData.complain);
        formData.images.forEach((image, index) => {
            data.append(`images${index}`, image);
        });

        const BearerToken = process.env.NEXT_PUBLIC_API_BEARER_KEY;

        const payload = {
            creator: formData.devUsername,
            client: formData.clientUsername,
            complain: formData.complain,
            images: formData.images
        }

        const response = await fetch('/api/tag-clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${BearerToken}`
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const error_response = await response.json();
            //console.log(error_response.error)
            toast.error(`${error_response.message}`, {
                position: "top-right"
            });
            setLoading(false)
        } else {
            const success_response = await response.json();
            window.location.href = `/#complain`;
            window.location.reload();  // Explicitly reload the page
            toast.success(`${success_response.message}`, {
                position: "top-right"
            });
            setLoading(false)
        }

    }

    return (

        <>

            <div class="modal fade" id="tagClientModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Tag client</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body font">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="alert alert-info p-2 text-center" style={{ borderRadius: "30px", fontSize: "14px" }}>
                                        When you tag, we post @stubbornClients on <FaXTwitter />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Client username on <FaXTwitter />(formerly twitter)</label>
                                    <input type="text" name="clientUsername" value={formData.clientUsername} onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="@stubbornClient419" style={{ borderRadius: "30px" }} required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Your username on <FaXTwitter />(formerly twitter)</label>
                                    <input type="text" name="devUsername" value={formData.devUsername} onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="@inncoentDev666" style={{ borderRadius: "30px" }} required />
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Upload screenshot proofs</label>
                                    <input ref={fileInputRef} multiple accept="image/*" onChange={handleImageChange} class="form-control" type="file" id="formFile" style={{ borderRadius: "30px" }} />
                                </div>
                                <div>
                                    {formData.images.map((image, index) => (
                                        <div key={index} className="position-relative d-inline-block me-2">
                                            <img className="img-thumbnail rounded mb-3" src={image} style={{ width: '100px', height: '100px', objectFit: 'contain' }} alt={`Thumbnail ${index}`} />
                                            <button className="btn btn-danger btn-sm position-absolute top-0 end-0 bg-light text-danger" onClick={() => handleDelete(index)}>
                                                <FaRegTrashCan />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your complain</label>
                                    <textarea name="complain" value={formData.complain} onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ borderRadius: "30px" }} required></textarea>
                                </div>

                            </div>
                            <div class="modal-footer">
                                {loading ? (
                                    <>
                                        <button disabled type="submit" class="btn btn-outline-dark" style={{ borderRadius: "30px" }}>
                                            Tagging...
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button type="submit" class="btn btn-outline-dark" style={{ borderRadius: "30px" }}>
                                            Create
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </>

    )

}