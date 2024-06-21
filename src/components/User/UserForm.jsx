import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../../styles/User.module.css'

import UserSignUpForm from './UserSignUpForm'
import { toggleForm, toggleFormType } from '../../features/user/userSlice'
import UserLogin from './UserLogin'

const UserForm = () => {
    const dispatch = useDispatch()
    const { showForm, formType } = useSelector(({ user }) => user)

    const closeForm = () => dispatch(toggleForm(false))
    const toggleCurrentFormType  = (type) => dispatch(toggleFormType(false))
    
    return <>
        {showForm
            ? <>
                <div
                    className={styles.overlay}
                    onClick={closeForm} />
                {formType === 'signup'
                    ? <UserSignUpForm
                        toggleCurrentFormType={toggleCurrentFormType}
                        closeForm={closeForm} />
                    : <UserLogin closeForm={closeForm} />
                }
            </>
            : <></>}
    </>
}

export default UserForm
