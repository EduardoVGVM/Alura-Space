import React from 'react'
import favorito from './favorito.png'
import open from './open.png'

export default function Cards({itens, styles}) {
  return (
    <ul className={styles.galeria__cards}>
          {itens.map((item) => {
            return(
              <li key={item.id} className={styles.galeria__card}>
                <img
                className={styles.galeria__imagem}
                src={item.imagem}
                alt={item.titulo}
                />
                <p className={styles.galeria__descricao}>{item.titulo}</p>
                <div>
                  <p>{item.creditos}</p>
                  <span>
                    <img src={favorito} alt='Ícone "Coração de Curti"'></img>
                    <img src={open} alt='Ícone de Estrela'></img>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
  )
}
