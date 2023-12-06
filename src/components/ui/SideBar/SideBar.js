import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import sideNews from "@/assets/sideNews.png"

const SideBar = () => {
    return (
        <Box className="">
            <Card>
        <CardActionArea>
          <Image
            className="w-full"
            src={sideNews}
            alt="photo"
            width={500}
            height={500}
          ></Image>
          <CardContent className="my-2">
            <p className=" w-[100px] rounded-xl px-2 bg-red-600">
              Technology
            </p>
            <Typography gutterBottom variant="h5" className="my-2" component="Box">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            {/* <Typography className="my-2">{currentDate}</Typography> */}
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Box>
    );
};

export default SideBar;