import axios from 'axios'; // For API calls, we will be using Axios - npm install axios

const PRODUCTS_REST_API_URL='http://localhost:8085/ims/api/products';

class ProductService {
         
      getProducts(){
        return axios.get(PRODUCTS_REST_API_URL);
      }

      deleteProduct(productId){
        return axios.delete(PRODUCTS_REST_API_URL+'/'+productId);
      }

      getProductById(productId){
        return axios.get(PRODUCTS_REST_API_URL+'/'+productId);
      }

      createProduct(product){
        return axios.post(PRODUCTS_REST_API_URL, product);
       }
    
       updateProduct(product, productId){
        return axios.put(PRODUCTS_REST_API_URL + '/' + productId, product);
       }
}
//create an object of ProductService
export default new ProductService();