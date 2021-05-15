import { Drawer, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import List from '@material-ui/core/List'
import { AddCircleOutline, SubjectOutlined } from "@material-ui/icons";
import {useLocation} from 'react-router-dom'

function DrawerComponent() {
  const useStyle = makeStyles({
    drawer: {
      width: 200,
    },
    drawerPaper: {
        width: 200,
      },
      active: {
          background: '#f4f4f4'
      }
  });

  const classes = useStyle();
//   const location = useLocation()

const menuItem = [
    {
        text: 'my notes',
        icon: <SubjectOutlined color='secondary'/>,

    },
    {
        text: 'Create notes',
        icon: <AddCircleOutline color='secondary'/>,
        
    }
]

  return (
    <div>
      <Drawer 
      className={classes.drawer} 
      variant="permanent" 
      anchor="left"
      classes={{paper: classes.drawerPaper}}
      >
        <div>
          <Typography variant="h4">mail</Typography>
        </div>

        {/* list items */}
        <List>
            {menuItem.map(data=>(
                <ListItem 
                button 
                key={data.text} 
                onClick={()=> alert('hii')}
                className={classes.active}
                >
                <ListItemIcon>
                    {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.text} />
                </ListItem>
            ))}
        </List>

       {/* <ListItem>
           <ListItemText primary='hello'/>
       </ListItem>

       <ListItem>
           <ListItemText primary='hello'/>
       </ListItem> */}

         
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
