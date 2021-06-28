import { useState } from "react"
import useStyles from "./switchStyles"
import { withStyles } from "@material-ui/core/styles"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import Icon from "../icons/Icon"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

const PurpleSwitch = withStyles({
    switchBase: {
        color: "red",
        "&$checked": {
            color: "green",
        },
        "&$checked + $track": {
            backgroundColor: "green",
        },
    },
    checked: {},
    track: {},
})(Switch)

export default function CustomizedSwitches({ title, isMarker, onChange }) {
    const classes = useStyles()
    // const [state, setState] = useState(false)

    // const handleChange = (event) => {
    //     setState(event.target.checked)
    // }

    // console.log("state", state)
    return (
        <FormGroup>
            <div className={classes.switch}>
                <Icon
                    icon={faTimesCircle}
                    color={!isMarker ? "red" : "#A8A8A8"}
                />
                <div>
                    <FormControlLabel
                        control={
                            <PurpleSwitch
                                checked={isMarker}
                                onChange={onChange}
                                size='small'
                            />
                        }
                        value='top'
                        label={title}
                        labelPlacement='top'
                    />
                </div>

                <Icon
                    icon={faCheckCircle}
                    color={isMarker ? "green" : "#A8A8A8"}
                />
            </div>
        </FormGroup>
    )
}
