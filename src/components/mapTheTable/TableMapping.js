import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const TableMapping = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [sortValue, setSortValue] = useState('')

    const sortOptions = ["id", "name", "email", "address.street", "address.city", "website"]

    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(response.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        return await axios
            .get(`https://jsonplaceholder.typicode.com/users?q=${value}`)
            .then((response) => {
                setData(response.data);
                setValue("");
            })
            .catch((err) => console.log(err))

    }
    const handleReset = () => {
        fetchData();
    }

    const handleSort = async (e) => {
        let value = e.target.value;
        setSortValue(value);
        return await axios
            .get(`https://jsonplaceholder.typicode.com/users?_sort=${value}&_order=asc`)
            .then((response) => {
                setData(response.data);

            })
            .catch((err) => console.log(err))
    }
    const handleFilter = async (e) => {
        return await axios
            .get(`https://jsonplaceholder.typicode.com/users?website=${value}`)
            .then((response) => {
                setData(response.data);

            })
            .catch((err) => console.log(err))
    }
    
    return (
        <div className='container'>
            <nav className='navbar navbar-dark bg-warning navbar-expand-sm '>
                <a href="#" className='navbar-brand'>React with Conditional & list Rendering</a>
            </nav>
            <div>
                <h2 style={{ color: 'green' }}>User List</h2>
                <p>Specifies the identifier for the table to describe. If the identifier contains spaces or special characters, the entire string must be enclosed in double quotes. Identifiers enclosed in double quotes are also case-sensitive.</p>
                <div className='mb-4'>
                    <input type="text" name='search' placeholder='search' value={value} onChange={(e) => setValue(e.target.value)} />
                    <button type='submit' onClick={handleSubmit}>Search</button>
                    <button onClick={handleReset}>Reset</button>
                </div>

                <Table striped bordered hover style={{ textAlign: 'center' }}>
                    <thead variant="dark" >
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>STREET</th>
                            <th>CITY</th>
                            <th>WEBSITE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data &&
                            data.map((each, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{each.id}</td>
                                        <td>{each.name}</td>
                                        <td>{each.email}</td>
                                        <td>{each.address.street}</td>
                                        <td>{each.address.city}</td>
                                        <td>{each.website}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <div className='row'>
                    <div className='col-8'>
                        <h5> Sort By:</h5>
                        <select style={{ width: "50%", borderRadius: "2px", height: "35px" }} onChange={handleSort} value={sortValue}>
                            <option >Please Select Value</option>
                            {
                                sortOptions.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                        </select>

                    </div>
                    <div className='col-4'>
                        <h5> Filter By Status:</h5>
                        <button className='btn-success' onClick={()=>handleFilter("Active")}>Active</button>
                        <button className='btn-danger' onClick={()=>handleFilter("Inactive")}>InActive</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableMapping