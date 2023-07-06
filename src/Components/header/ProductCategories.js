import React from "react";
import { useProduct } from "../../hooks";
import { List, ListItem, styled } from "@mui/material";
import {  Text } from "../atoms";
import { useNavigate } from "react-router-dom";

const StyledListItems = styled(ListItem)(() => ({
  padding: "5px 0px 3px 15px",
  margin: "0px",
  width: '15%',
}));

export const ProductCategories = () => {
  const { productCategories } = useProduct();
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    navigate(`/products/categories/${name}?page=1&sort=price%2Casc`);
  };

  return (
    <List sx={{ display: "flex", width:'600px' }}>
      {productCategories.map((category) => {
        const { _id, name } = category;
        return (
          <StyledListItems key={_id} onClick={() => handleCategoryClick(name)}>
            <Text color="#FF9900">{name}</Text>
          </StyledListItems>
        );
      })}
    </List>
  );
};
