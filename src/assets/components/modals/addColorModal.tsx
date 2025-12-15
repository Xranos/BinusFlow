import ModalOverlay from "./modalOverlay"

type AddColorProps = {
    onClose: () => void;
};

function AddColorModal({onClose}: AddColorProps){
    return(
        <div>
            <ModalOverlay  onClose={onClose}>

            </ModalOverlay>

        </div>
    )
}

export default AddColorModal