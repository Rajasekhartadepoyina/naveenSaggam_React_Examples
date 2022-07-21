import React, { useState } from "react";
import ProductService from "./service";
// import {Container,Col,Row } from 'react-bootstrap';
// import {Container,Row,Col} from 'react-bootstrap'



function List() {


    const [state, setState] = useState({

        products: ProductService.getAllProducts()
            
        
    })
    let { products } = state;



    return (


        <React.Fragment>


            <div className="container mt-3">
                <div className="row">

                    <div className="col">
                        <p className="h3 text-success">product cart</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">


                        {

                            products.map((product) => {


                                return (
                                    <div key={product.sno} className="card shadow-lg mt-2">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img src={product.img} alt="no img"  width="200" height={200}/>
                                                </div>
                                                <div className="col-md-6">

                                                    <b> <h2 className="display-4">{product.name}</h2></b>
                                                    <h6 className="display-6">&#8377;{product.price}</h6>
                                                    <h6 className="display-6">

                                                        {
                                                            product.qty >= 10 && <span className="text-success">available</span>
                                                        }
                                                        {
                                                            product.qty <= 10 && product.qty >= 1 && <span className="text-warning">almost out of stock</span>
                                                        }

                                                        {
                                                            product.qty == 0 && <span className="text-danger">out of stock </span>
                                                        }
                                                    </h6>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )

                            })



                        }

                    </div>
                </div>
            </div>




        </React.Fragment >

    )

}
export default List;