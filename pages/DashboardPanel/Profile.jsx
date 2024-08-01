import React, { useState } from "react";
import '../../src/dashboard.css'
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  IconButton,
  Box,
  MenuItem,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/system";

const Root = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  textAlign: "center",
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

const StyledAvatar = styled(Avatar)({
  width: 100,
  height: 100,
  margin: "0 auto",
  marginBottom: "16px",
});

const Input = styled("input")({
  display: "none",
});

const StyledButton = styled(Button)({
  marginTop: "16px",
});

const Profile = () => {
  const [image, setImage] = useState(null);
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    email: "",
    bio: "",
    dob: "",
    gender: "",
    address: "",
    mobile: "",
  });

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleCancel = () => {
    setProfileInfo({
      name: "",
      email: "",
      bio: "",
      dob: "",
      gender: "",
      address: "",
      mobile: "",
    });
    setImage(null);
  };

  const handleSaveChanges = () => {
    console.log("Profile Information Saved", profileInfo);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Submitted", profileInfo);
  };

  return (
    <Container>
      <Root>
        <Typography variant="h4">PERSONAL INFORMATION</Typography>
        <Input
          accept="image/*"
          id="icon-button-file"
          type="file"
          onChange={handleImageChange}
        />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" component="span">
            <StyledAvatar src={image}>
              <PhotoCamera />
            </StyledAvatar>
          </IconButton>
        </label>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => document.getElementById("icon-button-file").click()}
          >
            Change Image
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRemoveImage}
            style={{ marginLeft: "8px" }}
          >
            Remove Image
          </Button>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={profileInfo.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={profileInfo.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="dob"
                label="Date of Birth"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={profileInfo.dob}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="gender"
                label="Gender"
                select
                variant="outlined"
                fullWidth
                value={profileInfo.gender}
                onChange={handleInputChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                label="Address"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                value={profileInfo.address}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="mobile"
                label="Mobile Number"
                variant="outlined"
                fullWidth
                value={profileInfo.mobile}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={3}>
              <StyledButton
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleCancel}
              >
                Cancel
              </StyledButton>
            </Grid>

            <Grid item xs={3}>
              <StyledButton
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Submit
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </Root>
    </Container>
  );
};

export default Profile;