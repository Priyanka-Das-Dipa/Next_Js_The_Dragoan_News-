import { Box, Button, Container, IconButton, Typography } from "@mui/material";
// mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "Page",
      pathName: "/page",
    },
    {
      route: "News",
      pathName: "/news",
    },
    {
      route: "Category",
      pathName: "/category",
    },
    {
      route: "About",
      pathName: "/about",
    },
    {
      route: "Contact",
      pathName: "/contact",
    },
  ];
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{ "& svg": { color: "white" } }}
        >
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <TwitterIcon></TwitterIcon>
          </IconButton>
          <IconButton>
            <YouTubeIcon></YouTubeIcon>
          </IconButton>
          <IconButton>
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathName}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography color="gray" variant="body2" textAlign="center">
          @2023 The Dragon News. Developed By Priyanka Das Dipa.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
