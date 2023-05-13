import styled from "@emotion/styled"

const Texto=styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Parrafo=styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio=styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Imagen=styled.img`
    display: block;
    width: 120px;
`

const Resultado = ({resultado}) => {
  
  const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=resultado
    return (
    <Texto>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="imagen cripto"/>
        <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
       <Parrafo>El precio más alto del día: <span>{HIGHDAY}</span></Parrafo>
       <Parrafo>El precio más bajo del día: <span>{LOWDAY}</span></Parrafo>
       <Parrafo>Variación útimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Parrafo>
       <Parrafo>Última actualización: <span>{LASTUPDATE}</span></Parrafo>
        </div>
    </Texto>
  )
}

export default Resultado