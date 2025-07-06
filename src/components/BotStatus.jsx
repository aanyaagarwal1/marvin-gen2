import { Button, Divider, Box } from "@mui/material";

function BotStatus() {
  return (
    <Box sx={{ width: 300, mx: "auto", mt: 4 }}>
      <Button fullWidth variant="contained">Sign in with Google</Button>
      <Divider sx={{ my: 2 }}>OR</Divider>
      <Button fullWidth variant="outlined">Sign in with Email</Button>
    </Box>
  );
}
export default BotStatus;