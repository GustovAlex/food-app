import LoginAdmin from "./LoginAdmin"
import { useState } from "react"
import { validateEmail } from "../../helpers/validation"
import { loginAdmin } from "../../redux/actions/loginAdmin"
import { useDispatch, useSelector } from "react-redux"
import { setErr } from "../../redux/actions/loginAdmin"
import { useHistory } from "react-router-dom"

export default function LoginAdminContainer() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { err } = useSelector((state) => state.data)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log("email", email)
    console.log("password", password)

    const validationEmailOnBlur = () => {
        dispatch(setErr(validateEmail(email)))
    }

    const onClickLoginAdmin = () => {
        dispatch(loginAdmin({ adminEmail: email, password }))
        history.push("/admin/categories")
    }

    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <LoginAdmin
                onChangeEmailHandler={onChangeEmailHandler}
                onChangePasswordHandler={onChangePasswordHandler}
                validationEmailOnBlur={validationEmailOnBlur}
                onClickLoginAdmin={onClickLoginAdmin}
            />
        </div>
    )
}
