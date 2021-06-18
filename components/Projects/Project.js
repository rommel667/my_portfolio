import React, { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'
import ImagesCarousel from './ImagesCarousel'

const Project = ({ title, description, images, stacks, github, website }) => {

    const [showButton, setShowButton] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="w-4/5 mx-auto shadow-md mt-8 rounded-md">
            <div className="relative" onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)} >
                <Image
                    src={images[0]}
                    alt=""
                    width={800}
                    height={450}
                    layout="responsive"
                    quality={65}
                />

                <button
                    onClick={() => setShowModal(true)}
                    className={`${showButton ? "" : "hidden"} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none`}>
                    More Photos
                </button>
                <Modal
                    open={showModal}
                    closeModal={() => setShowModal(false)}
                    modalTitle={title}
                >
                    <ImagesCarousel images={images} />
                </Modal>
            </div>

            <h3>{title}</h3>
        </div>
    )
}

export default Project