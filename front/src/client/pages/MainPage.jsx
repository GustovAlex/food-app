import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import MainContainer from "../components/main/MainContainer"
import { getCategories } from "../redux/actions/index"

export default function MainPage() {
    return <MainContainer />
}
