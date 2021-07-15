function Modal (props){
    function cancel(){
        props.onCancel();
    }
    function confirm(){
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p> Are you sure ?</p>
            <button className="btn btn--alt" onClick={cancel}> Cancel </button>
            <button className="btn" onClick={confirm}> Confirm </button>
        </div>

    );
}

export default Modal;