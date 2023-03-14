import React from 'react'
import banner from './banner.png'
import style from './Banner.module.scss'

export default function Banner() {
  return (
    <div className={style.banner}>
        <h1 font-family = "GandhiSansBold">A galeria Mais Completa do Espaço</h1>
        <img src={banner} alt="Imagem da terra vista do espaço" />
    </div>
  )
}