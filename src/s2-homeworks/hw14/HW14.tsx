import React, { useEffect, useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import { useSearchParams } from 'react-router-dom'
import { log } from 'console'

/*
* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
* 2 - дописать функцию sendQuery в HW14
* 3 - дописать функцию onChangeText в HW14
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW14 в HW5/pages/JuniorPlus
* */

const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test2',
            { params: { find } }
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])

    const sendQuery = (value: string) => {
        setLoading(true)
        getTechs(value)
            .then((res) => {
                // делает студент
                setLoading(false);
                if (res) {
                    setTechs(res.data.techs)
                }
                // сохранить пришедшие данные

                //
            })
    }

    const onChangeText = (value: string) => {
        setFind(value)
        // делает студент

        // добавить/заменить значение в квери урла
        // setSearchParams(

        //
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery(params.find || '')
        setFind(params.find || '')
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'} className={s.main_container}>
            <div className={`${s2.hwTitle} ${s.title}`}>Homework #14</div>

            <div className={`${s2.hw} ${s.secondary_container}`}>
                <SuperDebouncedInput
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                />
                <div className={s.response_cpntainer}>
                    <div className={s.list}>
                        {mappedTechs}
                    </div>
                    <div id={'hw14-loading'} className={s.loading}>
                        {isLoading ? '...ищем' : <br />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW14