import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Nav = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#2e51a2', display: 'flex' }}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="inherit" sx={{ background: 'transparent' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Anime Search App
            </Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
