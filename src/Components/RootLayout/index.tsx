import { Outlet } from 'react-router-dom';
import Nav from '../NavBar/Nav';
import { Box } from '@mui/material';

const RootLayout = () => {
  return (
    <div>
      <Nav />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1400,
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Outlet />
        </div>
      </Box>
    </div>
  );
};

export default RootLayout;
