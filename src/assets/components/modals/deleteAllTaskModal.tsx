import ModalOverlay from "./modalOverlay"

type DeleteAllTaskModalProps = {
    onClose: () => void;
};

function DeleteAllTaskModal({onClose}: DeleteAllTaskModalProps) {
    return (
         <ModalOverlay onClose={onClose}>
            <div className="bg-[#001BB7] w-275  rounded-xl p-4  flex flex-col ">
                    
            </div>
         </ModalOverlay>
    )
}

export default DeleteAllTaskModal

