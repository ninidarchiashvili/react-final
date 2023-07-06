import { Autocomplete, Box, TextField } from "@mui/material";
import { Link, Loading, Text } from "../atoms";
import React, { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { getData, data, loading, setState } = useFetchData();
  const { products } = data;
  // const {searchResults, searchProducts, clearSearchResult} = useProduct()

  useEffect(() => {
    const id = setTimeout(() => {
      if (searchValue) {
        getData(`/products/search?name=${searchValue}`);
      } else {
        setState((prev) => ({ ...prev, data: [] }));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [searchValue]);

  return (
    <Autocomplete
      freeSolo
      sx={{ width: 300 }}
      disableClearable
      loading={loading}
      loadingText={<Loading size={50} />}
      options={products || []}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { name, category, _id, price, image } = option;
        return (
          <Link to={`/products/categories/${category}/${_id}`} key={_id}>
            <Box
              style={{
                display: "flex",
                color: "#071F1F",
                borderColor: "#071F1F",
              }}
            >
              <img
                style={{ width: 50, height: 50, objectFit: "cover" }}
                src={image}
              />
              <Text>{name}</Text>
              <Text>{price}</Text>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            label="search products"
            inputProps={{
              ...params.inputProps,
              type: "search",
            }}
            sx={{
              input: { color: "#EEFAFA", borderColor: "red" },
            }}
            InputLabelProps={{
              style: { color: "#FF9900" },
            }}
          />
        );
      }}
    />
  );
};
