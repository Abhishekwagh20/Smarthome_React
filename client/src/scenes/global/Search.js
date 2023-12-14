import React from 'react';
import {useLocation} from 'react-router-dom'
import useFetch from '../home/useFetch';
import Item from '../../components/Item';
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Search = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      `http://localhost:1337/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); 
  console.log(searchTerm);

  // const {data} = useFetch(`./items?populate=*&fiters[name][$contains]=${searchTerm}`)
  // console.log(data);
  return <div>
    <Box width="80%" m="80px auto">
    <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Searched Products
        </Typography>
        
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
        >
          {items.slice(14, 16).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
          
        </Box>
      </Box>
      </Box>
  </div>;
};

export default Search;