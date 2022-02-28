import React from 'react';
import Box from '@mui/material/Box';
import CancelIcon from "@mui/icons-material/Cancel";

export default function ShowExercise(props) {
    const [anchorEl, setAnchorEl] = React.useState(true);
    const handleClose = () => {
        setAnchorEl(!anchorEl);
    };
    console.log(props)
    return (
        <div className="exerciseGif-container">
            <div className="add-close-cross">
         {anchorEl && <CancelIcon fontSize="large" onClick={handleClose} />}
        </div>
            {anchorEl && <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'column' },
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 3,
                    fontWeight: 'bold',
                }}

            >

                <Box
                    component="img"
                    sx={{
                        height: 350,
                        width: 350,
                        maxHeight: { xs: 500, md: 300 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="exercise-gif"
                    src={props.gifUrl}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'center' },
                        m: 3,
                        minWidth: { md: 350 },
                    }}
                >
                    <Box component="span" sx={{ color: 'primary.main', fontSize: 14, textTransform: 'uppercase' }}>
                        {props.name}
                    </Box>

                </Box>
            </Box>}
        </div>
    )
}