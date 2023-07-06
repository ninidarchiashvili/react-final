import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GridContainer, LoadingWrapper } from "../../atoms";
import { Box, styled } from "@mui/material";
import { ProductCard } from "../ProductCard";
import { useQueryParams } from "../../../hooks";
import { Paginate } from "./Paginate";
import { useFetchData } from "../../../hooks/useFetchData";
import { Sort } from "./Sort";


const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
}));



export const CategoryProductsList = () => {
  const { categoryName } = useParams();
  const { value: page, changeQuery: changePage } = useQueryParams("page");
  const { value: sort, changeQuery: changeSort } = useQueryParams("sort");
  const { getData, loading, data } = useFetchData();
  const { products, totalPages } = data;

  const navigate = useNavigate();

  const fetchCategoryProducts = () => {
    getData(
      `products/categories/${categoryName}?size=1&sort=${sort}&page=${page}`
    );
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [categoryName, sort, page]);

  const handlePageChange = (newPage) => {
    changePage("page", newPage);
    navigate(`/products/categories/${categoryName}?page=${newPage}&sort=${sort}`);
  };

  const handleSortChange = (newSort) => {
    changeSort("sort", newSort);
    navigate(`/products/categories/${categoryName}?page=${page}&sort=${newSort}`);
  };

  return (
    <LoadingWrapper isLoading={loading}>
      <Container>
        <Sort sort={sort} changeSort={handleSortChange} />
        <GridContainer>
          {products?.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </GridContainer>
        <Paginate total={totalPages} page={page} changePage={handlePageChange} />
      </Container>
    </LoadingWrapper>
  );
};