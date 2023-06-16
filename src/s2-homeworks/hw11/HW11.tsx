import React, { ChangeEvent, useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, 
    // чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value', 0))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value1', [0, 100]))

    const change1 = (event: Event, value: number | number[]) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        setValue1(value as number);
        setValue2([value1, value2[1]])
    }

    const minDistance = 1;
    const change2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue2([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
        } else {
            setValue2([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
        }
    };

    return (
        <div id={'hw11'} className={s.main_container}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <div className={s.slider}>
                            <SuperRange
                                id={'hw11-single-slider'}
                                // сделать так чтоб value1 изменялось // пишет студент
                                onChange={change1}
                                value={value1}
                            />
                        </div>
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value2[0]}</span>
                        <div className={s.slider}>
                            <SuperRange
                                id={'hw11-double-slider'}
                                // сделать так чтоб value1/2 изменялось // пишет студент
                                onChange={change2}
                                value={value2}
                            />
                        </div>

                        <span id={'hw11-value-2'} className={s.number}>{value2[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
