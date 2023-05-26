// components/Modal.js
import { useState } from "react";

export const Modal = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>{title}</button>
            {isOpen && (
                <div>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                    {children}
                </div>
            )}
        </div>
    );
};
