import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SignUp.css";

const SignUp = () => {
  const performSignup = () => {
    if (!values.username) {
      toast.warning("Favor preencher o login");
      return;
    }

    if (!values.password) {
      toast.warning("Favor preencher a senha");
      return;
    }

    toast.success("Cadastrado!");

    setTimeout(() => {
      window.location.href = "/home";
    }, 500);
  };

  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      className="box"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box className="divSignup">
        <img
          alt="company logo"
          className="img"
          src="http://www.neki-it.com.br/brand/assets/images/logo-neki-oficial-1596x452.png"
        />
        <TextField
          id="login"
          label="Login"
          onChange={handleChange("username")}
        />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="senha"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
        </FormControl>
        <Grid className="loginButton" item xs={12} zeroMinWidth>
          <Button
            variant="contained"
            onClick={() => {
              performSignup();
            }}
          >
            Cadastrar
          </Button>
        </Grid>
        <Grid className="newHereGrid" item>
          <Link className="newHereText" to="/">
            Já possui conta? Acesse
          </Link>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUp;
