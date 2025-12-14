type OverlayProps = {
    children: React.ReactNode;
    onClose?: () => void;
}

function ModalOverlay ({children, onClose}: OverlayProps){
    return(
         <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

export default ModalOverlay