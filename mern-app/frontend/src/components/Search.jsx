import styled from 'styled-components'
import React, { useEffect, useState } from 'react';
import { getData } from '../api/apiSearch';

const Container = styled.div`
display:flex;
gap:20px;
padding:10px;
`;

const Card = styled.div`
width:200px;
height:100px;
background-color:#fffdd0;
border-radius:10px;
padding:10px;
text-align:center;
`;
const Title = styled.p`
font-size:16px;
font-weight:600;
`;
const Description = styled.p`
font-size:16px;
font-weight:500;
`;
const Author = styled.p`
font-size:14px;
font-weight:500;
`;

const Search = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData();
                setData(response.data);
                console.log(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container>
            {data.map((item, index) => (
                <Card key={index}>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Author>{item.author}</Author>
                </Card>
            ))}
        </Container>
    )
}

export default Search