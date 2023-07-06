import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { UserIcon } from "./UserIcon";
import { ProductCategories } from "./ProductCategories";
import { Button, Link } from "../atoms";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { SearchBar } from "./SearchBar";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#045050",
  padding: "10px 25px  0 10px",
  margin: "0 0 100px",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  paddingTop: 8,
  paddingBottom: 5,
}));

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Box>
      <StyledAppBar>
        <StyledToolBar>
          <Link to="/"> Home </Link>

          <SearchBar />
          <Box sx={{ display: "flex" }}>
            <Button onClick={() => setIsCartOpen(true)}>
              <BsFillCartCheckFill size={35} color="#D6FAFA" />
            </Button>
            <Box sx={{ display: "flex" }}>
              <UserIcon />
            </Box>
          </Box>
        </StyledToolBar>
        <ProductCategories />
      </StyledAppBar>
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </Box>
  );
};
