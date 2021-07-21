import { Card } from "../Card";

export const Item = ({product}) => {
    return (
        <Card title={product.title} price={product.price} image={product.pictureUrl} team={product.team} idDB={product.idDB}/>
    )
}

