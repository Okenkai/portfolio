import React from 'react';
import { steps, listItem } from '@/app/data/steps';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useStep } from '@context/StepContext';


const CareerList = () => {

    const { activeStep } = useStep();

    if (activeStep > steps.length - 2) {
        return null;
    }

    return (
        <React.Fragment>
            <List>
                {listItem[activeStep].map((item) =>
                    <ListItem key={item.primary}>
                        <ListItemIcon>
                            <ArrowRightAltIcon sx={{ color: '#ec4e47', }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={item.primary}
                            secondary={item.secondary ? item.secondary : null}
                            primaryTypographyProps={{ color: '#fff' }}
                            secondaryTypographyProps={{ color: '#edc710' }}
                        />
                    </ListItem>,
                )}
            </List>
        </React.Fragment>
    )
}

export default CareerList;