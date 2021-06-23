import { useState, useEffect } from "react"
import useStyles from "./selectStyles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

export default function ControlledOpenSelect({
    options,
    onClickSetCategoryId,
}) {
    const classes = useStyles()
    const [optionId, setOptionId] = useState(options[0]._id)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        onClickSetCategoryId(optionId)
    }, [optionId])
    const handleChange = (event) => {
        setOptionId(event.target.value)
    }

    const handleOpenClose = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.select}>
            <h3>Select category</h3>
            <FormControl className={classes.formControl}>
                <Select
                    defaultValue='select sategory'
                    id='demo-controlled-open-select'
                    open={open}
                    onClose={handleOpenClose}
                    onOpen={handleOpenClose}
                    value={optionId}
                    onChange={handleChange}>
                    {options.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
