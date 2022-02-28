import * as React from 'react';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Stack >
      <div className='left-arrow' onClick={() => navigate(-1)}><ArrowBackIosIcon /></div>
    </Stack>
  );
}