import styled from 'styled-components'
import React, { useEffect, useState } from 'react';
import { getData } from '../api/apiSearch';

const Search = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getData();
                console.log(res);
                
                setData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h1>Search</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Search