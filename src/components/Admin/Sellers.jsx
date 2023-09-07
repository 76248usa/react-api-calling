import React, {useEffect, useState} from "react";
import Loader from "../common/Loader";
import axios from 'axios'

const Sellers = () => {
    const [name, setName] = useState(" ")
    const [sellers, setSellers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState("")

    useEffect(() => {
    //fetchSellers();
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
    setSellers(res.data);
    setIsLoading(false);
    })
    .catch(err => {
        setIsLoading(false);
        setErrors(err.message)
    })
       
}, []);

/*const fetchSellers = async () => {

    setIsLoading(true)
    try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {setSellers(res.data);
    setIsLoading(false)}
    )       
    } catch (err) {
        setIsLoading(false);
        setErrors(err.message)  
    }
 
}*/

const addSeller = () => {
    const newSeller = {
        name: name,
        id: sellers.length + 1
    }
    setSellers([newSeller, ...sellers]);
    axios.post('https://jsonplaceholder.typicode.com/users', newSeller)
    .then(res => setSellers([res.data, ...sellers]))
    .catch(err => {
        setErrors(err.message)
        setSellers(sellers)
    })
}

const deleteSeller = id => {
setSellers(sellers.filter((seller) => id !== seller.id))
axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).catch
 (err => {
        setErrors(err.message);
        setSellers(sellers);

})
}

const updateSeller = (seller) => {
    const updatedSeller = {
        ...seller, name:seller.name + " updated"
    }
    setSellers(sellers.map(s => s.id === seller.id ? updatedSeller : s))
    
    axios.patch(`https://jsonplaceholder.typicode.com/users/${seller.id}`, updatedSeller)
    .catch(
        (err) => {
        setErrors(err.message);
        setSellers(sellers);

})
    
}

    return (
   <div>

            <h3>Admin Sellers Page</h3>
            <input type='text' onChange={(e) => setName(e.target.value)} /> 
            <button onClick={addSeller}>Add Seller</button>
            <div>
                {isLoading && <Loader />}
            </div>
            
            {errors && <em>{errors}</em>}
            <table>
                <tbody>
                    {sellers.map((seller) => 
                    <tr key={seller.id}>
                    <td>{seller.name}</td>
                    <td><button onClick={()=>updateSeller(seller)}>Update</button></td>
                    <td><button onClick={()=>deleteSeller(seller.id)}>Delete</button></td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
    
    </div>
    )
   
}



export default Sellers;
