import React from "react"
import Paper from "@material-ui/core/Paper"
import useStyles from "./loginAdminStyles"
import Button from "../common/button/Button"
import Input from "../common/input/Input"

export default function LoginAdmin({
    onChangeEmailHandler,
    onChangePasswordHandler,
    validationEmailOnBlur,
    onClickLoginAdmin,
}) {
    const classes = useStyles()

    return (
        <div className={classes.loginForm}>
            <Paper elevation={3}>
                <h2 className={classes.loginFormTitle}>Login</h2>
                <div className={classes.loginFormInputWrap}>
                    <div className={classes.inputItem}>
                        <Input
                            lable='email'
                            onChange={onChangeEmailHandler}
                            onBlur={validationEmailOnBlur}
                        />
                    </div>
                    <div className={classes.inputItem}>
                        <Input
                            lable='password'
                            onChange={onChangePasswordHandler}
                        />
                    </div>
                    <Button text='login' onClick={onClickLoginAdmin} />
                </div>
            </Paper>
        </div>
    )
}
