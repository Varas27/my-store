import { Item } from './../Item/';

export const ItemList = ({products}) => {
    return (
        <div className="container">
            <div className="row col-md-11 mx-auto justify-content-around">
            {products.map(product => {
                return (
                    <Item product={product} key={product.id}/>
                )
            })
            }
            </div>
        </div>
    )
}