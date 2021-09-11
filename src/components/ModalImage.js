import React, {useState, useEffect} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../store/actions/modalAction';

const ModalImage = (props) => {
    const modal = useSelector(state => state.modal.modal)
    
    const dispatch = useDispatch()

    const [isOpen, setOpen] = useState(modal.isModal)
    const [poster, setPoster] = useState(modal.poster)

    useEffect(() => {
        setOpen(modal.isModal)
        setPoster(modal.poster)
    }, [handleCloseModal])

    function handleCloseModal () {
        dispatch(setModal({isModal: false, poster: ""}))
        console.log("handleCloseModal")
    }

    return (
        <Dialog open={isOpen}> 
            <DialogTitle>{props.modalTitle}</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton 
                    onClick={() => handleCloseModal()}
                >
                    <Close />
                </IconButton>
            </Box>
            <DialogContent>
                <div className="py-2">
                    <img className="poster-popup" src={poster}
                        alt=""
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ModalImage;