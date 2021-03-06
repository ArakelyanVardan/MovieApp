import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const useStyles = makeStyles(() => {
  return {
    root: {
      justifyContent: "space-between",
      width: "100%",
      height: "50",
      margin: "auto",
      padding: "30px",
      paddingTop: "40px !important",
      color: "grey",
      "&:hover": {
        color: "white",
        cursor: "pointer",
      },
    },
    button: {
      fontSize: "16px",
      background: "none",
      border: "none",
      margin: 15,
      padding: 0,
      paddingBottom: 15,
      color: "grey",
      "&:hover": {
        color: "white",
        cursor: "pointer",
      },
    },
    href: {
      fontSize: "16px",
      background: "#323332",
      border: "none",
      margin: 15,
      padding: 10,
      paddingBottom: 15,
      color: "grey",
      "&:hover": {
        color: "white",
        cursor: "pointer",
      },
    },
  };
});

function Footer() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#222222" }}>
      <Grid>
        <FacebookIcon className={classes.root} />
        <InstagramIcon className={classes.root} />
        <GoogleIcon className={classes.root} />
        <TwitterIcon className={classes.root} />
        <YouTubeIcon className={classes.root} />
      </Grid>
      <br />
      <Box>
        <button className={classes.button}>Vacancies</button>
        <button className={classes.button}>Advertising</button>
        <button className={classes.button}>Agreement</button>
        <button className={classes.button}>Reference</button>
        <button className={classes.button}>Blog</button>
        <button className={classes.button}>Participation in research</button>
        <button className={classes.button}>Offers</button>
        <button className={classes.button}>Support</button>
        {/* <a href="https://www.freepik.com/vectors/border">Border vector created by upklyak - www.freepik.com</a> */}
      </Box>
      <Grid>
        <Link href="https://www.apple.com/">
          <button className={classes.href} variant="contained">
            App Store
          </button>
        </Link>
        <Link href="https://play.google.com/">
          <button className={classes.href} variant="contained">
            Google PLay
          </button>
        </Link>
        <Link href="https://appgallery.huawei.com/">
          <button className={classes.href} variant="contained">
            AppGallary
          </button>
        </Link>
      </Grid>
    </div>
  );
}

export default Footer;
