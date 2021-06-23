import { ItemComponent } from './../Item/';

export const ItemListComponent = ({products}) => {
    return (
        <div className="container">
            <div className="row col-md-11 mx-auto justify-content-around">
            {products.map(product => {
                return (
                            <ItemComponent product={product} key={product.id}/>
                )
            })
            }
            </div>
        </div>
    )
}