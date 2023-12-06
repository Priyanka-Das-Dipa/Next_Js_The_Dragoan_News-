import LastedNews from "@/components/ui/LastedNews/LastedNews";
import News from "@/components/ui/LastedNews/News";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} className="w-full my-5">
          <LastedNews></LastedNews>
          <Grid
            className="mt-3"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <News></News>
            </Grid>
            <Grid item xs={6}>
              <News></News>
            </Grid>
            <Grid item xs={6}>
              <News></News>
            </Grid>
            <Grid item xs={6}>
              <News></News>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} className="w-full my-5">
          <SideBar/>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;


// the-dragon-news
// PEF8Vr5f4F7PdOW2