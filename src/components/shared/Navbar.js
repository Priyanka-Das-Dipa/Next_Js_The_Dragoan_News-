"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";

// mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Header from "./Header";

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

function Navbar() {
  return (
    <>
      <Header></Header>

      <AppBar position="static" className="bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box>
              <Image src={logo} width={100} height={100} alt="logo"></Image>
            </Box>
            <Box className="w-full text-center">
              {navItems.map((item) => (
                <Link key={item} href={item.pathName}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack
                direction="row"
                spacing={2}
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
