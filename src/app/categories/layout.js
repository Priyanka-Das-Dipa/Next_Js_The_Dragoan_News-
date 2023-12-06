import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Container, Grid } from "@mui/material";


const CategoriesLayout = ({children}) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3} className="w-full my-5">
            <CategoryList></CategoryList>
          </Grid>
          <Grid item xs={9} className="w-full my-5">
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
