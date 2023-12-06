import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Rectangle_9 from "@/assets/Rectangle 9.png"
import { getCurrentDate } from "@/utiles/getCurrentDate";

const News = () => {
    const currentDate = getCurrentDate();
  return (
    <Box>
      <Card>
        <CardActionArea>
          <Image
            className="w-full"
            src={Rectangle_9}
            alt="photo"
            width={500}
            height={500}
          ></Image>
          <CardContent>
            <Typography gutterBottom >
            EU’s New Sanctions Aim to Cut Russia Off From World Bank
            </Typography>
            <Typography className="my-2">{currentDate}</Typography>
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

export default News;
