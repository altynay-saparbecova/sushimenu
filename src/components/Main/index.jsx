import React from 'react'
import css from './Main.module.css'

const Main = ({ data }) => {
    return (
        <div className={css.main}>
            <div className={css.container}>
                <div style={{ backgroundImage: `url(${data.img})` }} className={css.img}>

                </div>
                <div className={css.title}>
                    {data.title}
                </div>
                <div className={css.text}>
                    {data.text}
                </div>
                <div className={css.count}>
                    <data className="count">
                        {data.count}
                    </data>
                </div>
                <div className={css.pieces}>
                    {data.pieces}
                </div>
                <p className={css.button}>
                    {data.button}
                </p>
                <div className={css.btn}>
                    <div className={css.minus}>
                        {data.minus}
                    </div>
                    <input className={css.input} type="number" value='1'>

                    </input>
                    <div className={css.plus}>
                        {data.plus}
                    </div>
                </div>
                <button className={css.add}>
                    {data.add}
                </button>
            </div>
        </div>

    )
}
export default Main