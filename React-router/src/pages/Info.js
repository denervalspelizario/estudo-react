import { useParams } from "react-router-dom";

const Info = () => {
    // 6 - rota dinamica
    const { id } = useParams()  // 6 recebendo parametro de id  - obs ta recendo o id porque la aoo.js a route é products/id

  return (
    <div>
        <h1>Mais informações sobre o produto: {id}</h1>
    </div>
  )
}

export default Info