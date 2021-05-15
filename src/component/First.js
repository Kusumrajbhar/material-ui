import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
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
    fontSize: 10,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
  },
});

const First = () => {
  const classes = useStyles();

  return (
    <Container>
      <form noValidate autoComplete="off">
        <TextField
          className={classes.field}
          variant="outlined"
          color="secondary"
          label="name"
          fullWidth
          required
        />

        <TextField
          className={classes.field}
          variant="outlined"
          color="secondary"
          label="details"
          multiline
          row={5}
          fullWidth
          required
        />


        <FormControl className={classes.field}> 
        <FormLabel>Details</FormLabel>
        <RadioGroup>
          <FormControlLabel value='name' control={<Radio />} label='name'/>
          <FormControlLabel value='age' control={<Radio />} label='age'/>
          <FormControlLabel value='number' control={<Radio />} label='number'/>
          <FormControlLabel value='city' control={<Radio />} label='city'/>
        </RadioGroup>
        </FormControl>  

        <Button
          className={classes.btn}
          fontWeightBold="700"
          type="submit"
          borderRadius="4"
          color="textSecondary"
          variant="contained"
          startIcon={<SendSharpIcon />}
          endIcon={<KeyboardArrowRightSharpIcon />}
        >
          Submit
        </Button>
      </form>
      <br />
      <br />
      <Button variant="outlined" color="textSecondary">
        Home1
      </Button>
      <Button variant="contained" color="secondary">
        Home2
      </Button>
      <Button variant="contained" color="primary">
        theme
      </Button>{" "}
      <br />
      <br />
      <br />
      <ButtonGroup>
        <Button color="secondary">Home</Button>
        <Button variant="contained" color="secondary">
          Home
        </Button>
        <Button variant="contained" color="primary">
          Home3
        </Button>
      </ButtonGroup>
      <Button variant="contained">
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

//radigroup to select only one
//in textfield multiline for multiple row
