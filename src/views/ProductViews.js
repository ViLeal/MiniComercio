import React, { useEffect, useState } from "react";
import { getProductById} from "../app/services/productServices"
export const ProductView = ({match, location, history }) => {

    const [productDetail, setProductDetal] = useState(null);

    useEffect(() => {
        const { params } = match
       getProductById(params.id)
       .then((productsFromDb) => setProductDetal(productsFromDb))
       .catch((err) => console.log(err))
    }, [match]);

    return (
        <div>
            <h1>
                {productDetail && JSON.stringify(productDetail)}
            </h1>
        </div>
    )
}