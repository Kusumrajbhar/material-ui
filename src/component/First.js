import { Button } from "@material-ui/core";
import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccessibilitySharpIcon from "@material-ui/icons/AccessibilitySharp";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import KeyboardArrowRightSharpIcon from "@material-ui/icons/KeyboardArrowRightSharp";
import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
});

const First = () => {
  const classes = useStyles();

  return (
    <Container>
      <Button
        className={classes.btn}
        fontWeightBold = '700'
        type="submit"
        borderRadius='4'
        color="textSecondary"
        variant="contained"
        startIcon={<SendSharpIcon />}
        endIcon={<KeyboardArrowRightSharpIcon />}
      >
        Submit
      </Button>

      <Button variant='outlined'  color='textSecondary'>Home1</Button> 
           <Button variant='contained' color='secondary'>Home2</Button>
           <Button variant='contained' color='primary'>theme</Button>  <br/><br/><br/>
            <ButtonGroup>
           <Button  color='secondary'>Home</Button> 
           <Button variant='contained' color='secondary'>Home</Button> 
           <Button variant='contained' color='primary'>Home3</Button>  
           </ButtonGroup>
           <Button variant='contained'>
           <AddShoppingCartIcon></AddShoppingCartIcon>
           </Button>

      {/* <AccessibilitySharpIcon color='secondary' fontSize='large'></AccessibilitySharpIcon><br/>
           <AccessibilitySharpIcon color='action' fontSize='large'></AccessibilitySharpIcon><br/>
           <AccessibilitySharpIcon color='error' fontSize='large'></AccessibilitySharpIcon><br/>
           <AccessibilitySharpIcon color='disabled' fontSize='large'></AccessibilitySharpIcon><br/>
           */}
    </Container>
  );
};

export default First;
