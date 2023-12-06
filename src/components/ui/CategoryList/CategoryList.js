import { getAllCategories } from "@/utiles/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();
  console.log(allCategories);
  return (
    <Box className="space-y-3 bg-slate-200 px-5 py-2 rounded">
      <Typography variant="h6">Category List</Typography>
      <Divider></Divider>
      <Stack rowGap={1} sx={{mt: '2.5'}}>
        {allCategories.map((category) => (
          <Button variant="outlined" key={category._id}>
            <Link href={category.title}>
            {category.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
