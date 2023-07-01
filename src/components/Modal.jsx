import React from 'react';

const Modal = ({modal}) => {
     const {id,image,category,title} = modal
    return (
        <div>

            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <img src={image} alt="" />
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{category}</p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;