import React, {useState, useEffect} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../store/actions/modalAction';

const ModalImage = (props) => {
    // const modal = useSelector(state => state.modal.modal)
    
    // const dispatch = useDispatch()

    // const [isOpen, setOpen] = useState(modal.isModal)
    // const [message, setMessage] = useState(modal.message)

    // useEffect(() => {
    //     setOpen(modal.isModal)
    //     setMessage(modal.message)
    // }, [handleCloseModal])

    // function handleCloseModal () {
    //     dispatch(setModal({isModal: false, message: ""}))
    //     console.log("handleCloseModal")
    // }

    return (
        <Dialog open={false}> 
            <DialogTitle>{props.modalTitle}</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton 
                    // onClick={}
                >
                    <Close />
                </IconButton>
            </Box>
            <DialogContent>
                <div className="py-2">
                    <img className="poster-popup" src="https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
                        alt=""
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ModalImage;