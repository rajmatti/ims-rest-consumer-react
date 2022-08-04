import React,{Component} from "react";

import ProductService from "../service/ProductService";

export default class CreateProduct extends Component{
       
    constructor(props) {
        super(props)
 
        this.state = {
            // step 2 - We retrive productId from the route and store it in id variable. 
            id: this.props.match.params.id,
            name: '',
            brand: '',
            madein:'',
            price: ''
        }

        this.saveOrUpdateProduct=this.saveOrUpdateProduct.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeBrandHandler=this.changeBrandHandler.bind(this);
        this.changeMadeinHandler=this.changeMadeinHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);
 
    }

    // step 3 
    /*
        The componentDidMount() is executed when the component is mounted for the first time.
        In componentDidMount() method, if the id is _add then we don't do anything,
        else we retrieve Product by id using ProductService.getProductById() method:
    */
    componentDidMount(){
 
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.id).then( (response) =>{
                let product = response.data;
                this.setState({name: product.name,
                    brand: product.brand,
                    madein : product.madein,
                    price:product.price
                });
            });
        }        
    }
    
    /*
     In the saveOrUpdateEmployee () method, we check if the id is _add then we call ProductService.createProduct() method,
     which internally makes a REST API call to store product data into MySQL database.
     If id is any positive number then we call ProductService.updateProduct() method,
     which internally makes a REST API call to store updated product data into MySQL database.
    */
    saveOrUpdateProduct = (p) => {
        p.preventDefault();
        let product = {name: this.state.name, brand: this.state.brand,madein:this.state.madein, price: this.state.price};
        console.log('product => ' + JSON.stringify(product));
 
        // step 5
        if(this.state.id === '_add'){
            ProductService.createProduct(product).then(response =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( response => {
                this.props.history.push('/products');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
 
    changeBrandHandler= (event) => {
        this.setState({brand: event.target.value});
    }
 
    changeMadeinHandler= (event) => {
        this.setState({madein: event.target.value});
    }
 
    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }
 
    cancel(){
        this.props.history.push('/products');
    }
    
    //We are using a getTitle() method to get the title for Add/Update Employee page based on id:
    getTitle(){
        if(this.state.id === '_add'){
            return <h1 className="text-center">Add Product</h1>
        }else{
            return <h1 className="text-center">Update Product</h1>
        }
    }

    render(){

        return(

            <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Product Name" name="nameame" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Brand: </label>
                                            <input placeholder="Product Brand" name="brand" className="form-control" 
                                                value={this.state.brand} onChange={this.changeBrandHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Made In: </label>
                                            <input placeholder="Made In" name="madein" className="form-control" 
                                                value={this.state.madein} onChange={this.changeMadeinHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
 
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
 
                   </div>
            </div>

        );
    }

}