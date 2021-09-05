import React, { createFactory, useEffect, useState } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ImageListItem from "@material-ui/core/ImageListItem";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { TextField, Dialog, ThemeProvider } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function AdminCategories() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [hasErrors, setErrors] = useState(false);
  const [open, setOpen] = useState([false, false]);
  const [currentCat, setCurrentCat] = useState();
  const [editCat, setEditCat] = useState({"id": "", "name": ""});

  const [onDelete, setOnDelete] = useState(false);
  const [onAdd, setOnAdd] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const openDialog = (id) => {
    const open = [false, false];
    open[id] = true;
    setOpen(open);
  };

  const openEditModal = (category) => {
    openDialog(1);
    setEditCat(category);
  }


  const handleAddCat = () => {
    try {
      axios
        .post(`https://ecommerce-backend-0001.herokuapp.com/admin/category`, { name: currentCat })
        .then(async (res) => {
          alert(res.data.msg);
          setOnAdd(true);
        })
        .catch((err) => {
          setErrors(true);
        });
      setOpen(false);
      setOnAdd(false);
    } catch {}
  };

  const handleDeleteCat = (category) => {
    try {
      axios
        .delete(`https://ecommerce-backend-0001.herokuapp.com/admin/category/${category}`)
        .then(async (res) => {
          alert(res.data.msg);
          setOnDelete(true);
        })
        .catch((err) => {
          setErrors(true);
        });
      setOnDelete(false);
    } catch {}
  };

  const handleEditCat = (category) => {

  };

  const mainTheme = createTheme({
    palette: {
      primary: {
        main: "#388e3c",
        light: "#e33c05",
      },
      secondary: {
        main: "#d32f2f",
      },
    },
  });

  async function fetchData() {
    try {
      axios
        .get("https://ecommerce-backend-0001.herokuapp.com/admin/category")
        .then(async (res) => {
          setCategories(res.data);

        })
        .catch((err) => {
          setErrors(true);
        });
    } catch (err) {
      setErrors(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, [open, onAdd, onDelete]);

  return (
    <div className={classes.root}>
      {hasErrors && (
        <Paper className={classes.paper}>
          <Typography component="p">
            An error has occurred, please try reloading the page.
          </Typography>
        </Paper>
      )}
      {!hasErrors && (
        <Paper style={{ width: "100%" }} elevation={0}>
          <Paper
            style={{ textAlign: "right", marginBottom: "0.75%" }}
            elevation={0}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => openDialog(0)}
            >
              Add new category
            </Button>
            <Dialog
              open={open[0]}
              onClose={handleClose}
              BackdropProps={{
                style: { backgroundColor: "transparent" },
              }}
            >
              <form style={{ padding: "20px 60px 20px 60px" }}>
                <TextField
                  fullWidth
                  name="new-category"
                  label="New Category"
                  onChange={(val) => {
                    setCurrentCat(val.target.value);
                  }}
                />
                <ThemeProvider theme={mainTheme}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: "10px" }}
                    onClick={handleAddCat}
                  >
                    Add new
                  </Button>
                </ThemeProvider>
              </form>
            </Dialog>
          </Paper>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "20px" }}>#ID</TableCell>
                  <TableCell>Tên thể loại</TableCell>
                  <TableCell style={{ width: "50px" }}></TableCell>
                  <TableCell style={{ width: "50px" }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={categories.indexOf(category.name)}>
                    <TableCell align="right">
                      {categories.indexOf(category)}
                    </TableCell>
                    <TableCell align="left">{category.name}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDeleteCat(category.name)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => openEditModal(category)}
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Dialog
            open={open[1]}
            onClose={handleClose}
            BackdropProps={{
              style: { backgroundColor: "transparent" },
            }}
          >
            <form style={{ padding: "20px 60px 20px 60px" }}>
              <TextField
                fullWidth
                name="edit-category"
                label="Edit category"
                required
                value={editCat.name}
                onChange={(val) => {
                  setEditCat(val.target.value);
                }}
              />
              <ThemeProvider theme={mainTheme}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "10px" }}
                  onClick={() => handleEditCat(editCat)}
                  disabled={editCat == ""}
                >
                  Save
                </Button>
              </ThemeProvider>
            </form>
          </Dialog>
        </Paper>
      )}
    </div>
  );
}
