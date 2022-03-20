import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./imagecard.scss"

export default function ActionAreaCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }} className='imageCard'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    width="150"
                    image={props.thumbnailUrl}
                    alt={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
