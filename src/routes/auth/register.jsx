
import RegisterModal from "../../components/RegisterModal.jsx";
import RegisterForm from "../../components/RegisterForm.jsx";

export default function Register(props) {
    return (
        <RegisterForm
        handleShow={props.handleShow}
        handleClose={props.handleClose}/>
    )
};