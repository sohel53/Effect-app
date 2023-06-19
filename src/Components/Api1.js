import React, {useState, useEffect} from "react";
import axios from 'axios';

const Api1 = () => {
    let [products, setProducts] = useState("");
    //     title: "Samsung Galaxy",
    //     price: 100000,
    //     description: "Android Galaxy Product",
    //     category: "Electronics"
    // })

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => setProducts(response.data))
        .catch(err => console.log(err))
    }, [])

    function addProduct() {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "Hitting API Server",
            body: "Data from API Server is available"
        })
        .then(response => setProducts(response.data))
        // .catch(err => console.log(err))
    }

    function deleteProduct() {
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then(() => {
            alert("Product deleted");
            setProducts("")
        })
    }

    return (
        <div>
            <h1>{products.title}</h1>
            <p>{products.body}</p>
            <button onClick={addProduct}>Add</button>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default Api1;