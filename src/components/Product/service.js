class ProductService {
    static productsList = [
        {

            sno: "001",
            img: "https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg",
            name: "samsung",
            price: "1500",
            qty: "0",
        },
        {

            sno: "002",
            img: "https://rukminim1.flixcart.com/image/332/398/kpsnzww0/watch/4/0/f/men-sport-watch-high-end-silicone-strap-military-wrist-watch-led-original-imag3yesmmjkhupy.jpeg?q=50",
            name: "mi-watch",
            price: "1500",
            qty: "2",
        },
        {

            sno: "003",
            img: "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398806-sm-r865fzsainu-481079675?$730_584_PNG$",
            name: "oppo",
            price: "2500",
            qty: "4",
        },
        {

            sno: "4",
            img: "https://secureservercdn.net/160.153.138.217/gvt.827.myftpupload.com/wp-content/uploads/2022/04/92c939862e9e72039dff598bd54c8795d93a22db_original_1024x_6e0c3957-2557-40e1-89d6-2ec8ea77e279_823x-1.jpg?time=1658398459",
            name: "LG",
            price: "2000",
            qty: "30",
        },
        {

            sno: "005",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/LG%EC%A0%84%EC%9E%90%2C_%EC%84%B8%EA%B3%84_%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%9B%8C%EC%B9%98_%EC%8B%9C%EC%9E%A5_%EB%B3%B8%EA%B2%A9_%EA%B3%B5%EB%9E%B5_-_14507399524.jpg/450px-LG%EC%A0%84%EC%9E%90%2C_%EC%84%B8%EA%B3%84_%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%9B%8C%EC%B9%98_%EC%8B%9C%EC%9E%A5_%EB%B3%B8%EA%B2%A9_%EA%B3%B5%EB%9E%B5_-_14507399524.jpg",
            name: "redmi",
            price: "2800",
            qty: "25",
        },
     ]
   
    static getAllProducts(){
       return this.productsList;
    }
   }
   export default ProductService