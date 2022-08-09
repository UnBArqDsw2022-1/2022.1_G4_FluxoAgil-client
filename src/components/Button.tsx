import MuiButton from "@mui/material/Button";

export default function Button(props) {
  return (
    <MuiButton color="secondary" sx={{ textTransform: "none" }} {...props}>
      {props.children}
    </MuiButton>
  );
}
