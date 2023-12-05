import React from "react";
import headingImage from "@/assets/The Dragon News.png";
import { Box, Container, Typography } from "@mui/material";
import { getCurrentDate } from "@/utiles/getCurrentDate";
import Image from "next/image";
const Header = () => {
  const currentDate = getCurrentDate();

  return (
    <Box className="w-full my-5">
      <Container className="space-y-2">
        <Image
          src={headingImage}
          width={500}
          height={500}
          alt="logo"
          className="mx-auto"
        ></Image>
        <Typography color="gray" variant="h5" textAlign="center">
          Journalism Without Fear or Favour
        </Typography>
        <Typography className="text-xl" textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
