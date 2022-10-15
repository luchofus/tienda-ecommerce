import React from 'react'
import { productos } from '../../helpers/itemsDisponibles';
import Item from './Item';

const ItemList = ({productos}) => {
return (
        <div className='row container-fluid' style={{display:'flex', justifyContent:'center'}}>
            {productos.map( prod =>  <Item key={prod.id} prod={prod} />  )}
        </div>
    )
}
export default ItemList