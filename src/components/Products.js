import React,{Component} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductService from "../service/ProductService";

const SIZES = ["xs", "sm", "lg", "2x", "3x", "5x", "7x", "10x"];

export default class Products extends Component{

    /*The constructor () is invoked before the component is mounted. In the constructor, we have declared our
    state variables and bind the different methods so that they are accessible from the state inside of the render() method.
    */
    constructor(props){
        super(props)
     
        this.state={products:[]};

        this.deleteProduct=this.deleteProduct.bind(this);
        this.viewProduct=this.viewProduct.bind(this);
        this.addProduct=this.addProduct.bind(this);
        this.editProduct=this.editProduct.bind(this);
    }

    /*The componentDidMount() is called as soon as the component is mounted and ready. */
    componentDidMount(){
      ProductService.getProducts().then((response) => { //Invokes service method.
           this.setState({products:response.data});
      });  
    }
    
    deleteProduct(id){
        ProductService.deleteProduct(id).then((response) => {
            this.setState({products:this.state.products.filter(product => product.id !== id)});
       });  
    }
    
    //Click on details icon will navigate to the viewProduct page.
    viewProduct(id){
        this.props.history.push(`/viewProduct/${id}`);
    }

    addProduct(){
        this.props.history.push('/addProduct/_add');
    }

    editProduct(id){
        this.props.history.push(`/addProduct/${id}`);
    }

    /*
    The render() method is the most used lifecycle method. The render() method actually outputs 
    HTML to the DOM.
    We are using the map operator to loop over our products list and create the view
    */
     render(){
        return(
            <div>
                <h1 className = "text-center"> Products List</h1>

                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                </div>

                <br></br>
                <div className="row">
                <table className = "table table-striped table-dark">
                    <thead>
                        <tr>
                            <td> Product Id</td>
                            <td> Product Name</td>
                            <td> Brand</td>
                            <td> MadeIn</td>
                            <td> Price</td>
                            <td> Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                this.state.products.map(
                                    prod => 
                                    <tr key={prod.id}>
                                        <td> {prod.id} </td>
                                        <td> {prod.name} </td>
                                        <td> {prod.brand} </td>
                                        <td> {prod.madein} </td>
                                        <td> {prod.price} </td>
                                        <td>
                                           <button className="btn btn-success" onClick={() => this.editProduct(prod.id)}>
                                                <span>
                                                  <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                                </span>
                                           </button>

                                            &nbsp;
                                            <button className="btn btn-danger" onClick={() => this.deleteProduct(prod.id)}>
                                                <span>
                                                  <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                                </span>
                                           </button>

                                            &nbsp;
                                           <button className="btn btn-info" onClick={() => this.viewProduct(prod.id)}>
                                                <span>
                                                  <FontAwesomeIcon icon="list"></FontAwesomeIcon>
                                                </span>
                                           </button>
                                        </td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>
                </div>
            </div>
        );
     }

}