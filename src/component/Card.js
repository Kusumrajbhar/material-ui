import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

function CardComponent() {
  return (
    <div>
      <Card elevation={12}>
        <CardHeader
          avatar={<Avatar>R</Avatar>}
          action={
            <IconButton onClick={() => alert("deleted")}>
              <DeleteOutlined />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />

        <CardMedia image="/home/webwerks/Downloads/bacha.png" />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardComponent;
