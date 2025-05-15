import { Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import type { RelationsType } from '../../@types/animeType';

type RelatedComponentProps = {
  relatedEntries: RelationsType[];
};

export const RelatedComponent = ({ relatedEntries }: RelatedComponentProps) => {
  const [expanded, setExpanded] = useState<number[]>([]);
  const toggleShowMore = (index: number) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  return (
    <Stack
      spacing={2}
      sx={{
        padding: { sm: '24px' },
        width: { xs: '100%', lg: '100%' },
        margin: '0 auto',
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Related Show
      </Typography>
      <Divider />
      <Stack spacing={1}>
        {relatedEntries.map((related, index) => {
          const isOpen = expanded.includes(index);
          return (
            <Grid container spacing={1} alignItems="flex-start" key={index}>
              <Grid size={3}>
                <Typography fontWeight="medium" variant="subtitle2">
                  {related.relation}:{' '}
                </Typography>
              </Grid>
              <Grid size={9}>
                <Stack spacing={0.5}>
                  {isOpen
                    ? related.entry.map((entry, i) => (
                        <Typography key={i} variant="subtitle2">
                          {entry.name}
                        </Typography>
                      ))
                    : related.entry.slice(0, 2).map((entry, i) => (
                        <Typography key={i} variant="subtitle2">
                          {entry.name}
                        </Typography>
                      ))}
                  {related.entry.length > 2 && (
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                      <Button onClick={() => toggleShowMore(index)}>
                        {isOpen ? 'show less' : 'show more'}
                      </Button>
                    </div>
                  )}
                </Stack>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </Stack>
  );
};
