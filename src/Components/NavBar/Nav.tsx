import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Stack,
} from '@mui/material';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { useState, useRef, useEffect } from 'react';
import useDebounce from '../../@utils/useDebounce';
import useGetAnimeByName from '../../query/getAnimeByName';

const Nav = () => {
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchResult = useRef<HTMLDivElement>(null);
  const debouncedInputValue = useDebounce(search, 250);
  const { data: animeName, isFetching } =
    useGetAnimeByName(debouncedInputValue);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowDropdown(true);
  };
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        searchResult.current &&
        !searchResult.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [searchResult, inputRef]);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#2e51a2', display: 'flex' }}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="inherit">
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Anime Search App
            </Typography>
          </Button>
        </Link>
        <div style={{ position: 'relative' }}>
          <TextField
            inputRef={inputRef}
            onChange={handleInputChange}
            type="text"
            sx={{ background: 'white', borderRadius: '10px' }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SavedSearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          {showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'white',
                border: '1px solid #ccc',
                borderTop: 'none',
                maxHeight: '300px',
                overflowY: 'auto',
                zIndex: 99,
              }}
              ref={searchResult}
            >
              {!isFetching &&
                debouncedInputValue &&
                animeName?.data?.length === 0 && (
                  <div
                    style={{
                      height: '200px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ color: 'black' }}>no show found</p>
                  </div>
                )}
              {isFetching && (
                <Stack
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography style={{ color: 'black' }}>loading</Typography>
                </Stack>
              )}
              {!isFetching &&
                animeName &&
                animeName?.data.map((anime) => (
                  <Link
                    key={anime.mal_id}
                    to={`/anime/${anime.mal_id}`}
                    style={{
                      display: 'block',
                      padding: '10px',
                      textDecoration: 'none',
                      color: 'black',
                      borderBottom: '1px solid #eee',
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {anime.title}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
