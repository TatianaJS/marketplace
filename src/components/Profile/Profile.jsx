import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../../styles/Profile.module.css'
import { updateUser } from '../../features/user/userSlice'

const Profile = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(({ user }) => user)
    
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        avatar: ''
    })

    useEffect(() => {
        if (!currentUser) return
        setValues(currentUser)
    }, [currentUser])

    const handleChange = ({target: {value, name}}) => {
        setValues({ ...value, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isEmpty = Object.values(values).some(val => !val)

        if (isEmpty) return
        
        dispatch(updateUser(values))
    }

    return <>
        <section className={styles.profile}>
            {currentUser ? <span>Необходима авторизация</span> : <form
                    className={styles.form}
                    onSubmit={handleSubmit}>
                    <div className={styles.group}>
                        <input
                            type='email'
                            placeholder='Your E-mail'
                            name='email'
                            value={values.email}
                            autoComplete='off'
                            onChange={handleChange}
                            required />
                    </div>

                    <div className={styles.group}>
                        <input
                            type='name'
                            placeholder='Your name'
                            name='name'
                            value={values.name}
                            autoComplete='off'
                            onChange={handleChange}
                            required />
                    </div>

                    <div className={styles.group}>
                        <input
                            type='password'
                            placeholder='Your password'
                            name='password'
                            value={values.password}
                            autoComplete='off'
                            onChange={handleChange}
                            required />
                    </div>

                    <div className={styles.group}>
                        <input
                            type='avatar'
                            placeholder='Your avatar'
                            name='avatar'
                            value={values.avatar}
                            autoComplete='off'
                            onChange={handleChange}
                            required />
                    </div>
                    <button
                        type='submit'
                        className={styles.submit}>
                        Обновить
                    </button>
                </form>
            }
        </section>
    </>
}

export default Profile
