import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel();

  return (
    <div className="user-list">
      <Typography variant="h6" component="h2">
        Users
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Select a user to view their profile.
      </Typography>

      <List component="nav">
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                to={`/users/${user._id}`}
              >
                <ListItemText
                  primary={`${user.first_name} ${user.last_name}`}
                  secondary={user.occupation}
                />
              </ListItemButton>
            </ListItem>

            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;