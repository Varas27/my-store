import { CardComponent } from "../CardComponent";

export const ItemComponent = ({product}) => {
    return (
        <CardComponent title={product.title} price={product.price} image={product.pictureUrl} team={product.team}/>
    )
}

