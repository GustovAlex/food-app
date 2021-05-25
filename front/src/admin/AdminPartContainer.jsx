import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togleIsLogin } from './redux/actions/loginAdmin'
import AdminPartView from './AdminPartView'

export default function AdminPartContainer() {
    const dispatch = useDispatch()
    const { isLogin, isLoading } = useSelector((state)=> state.data)

    
    useEffect(()=>{
        if(localStorage.getItem("Authorization")) dispatch(togleIsLogin())
    }, [])

    return <AdminPartView isLogin={isLogin} isLoading={isLoading} />
}