import { useEffect, useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { getData } from "../../redux/actions/index"

const StyledCotainer = styled.div`
    padding: 0;
    margin: 0 auto;
    color: ${(props) => props.inputColor || "#184653"};
    max-width: 1200px;
`

export default function Main() {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getData())
    // })

    return (
        <div>
            <StyledCotainer>MAIN PAGE CONMPONENT</StyledCotainer>
        </div>
    )
}
