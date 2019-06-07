import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';
import FilterIcon from '@material-ui/icons/Filter';
import Typography from '@material-ui/core/Typography';
import GoogleApiWrapper from './GoogleMap/GoogleMap.js'

function TabContainer(props) {
    return (
        <Typography component="div">
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function NavTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered="true"

                >

                    <Tab label="Map" icon={<MapIcon />} />
                    <Tab label="List" icon={<ListIcon />} />
                    <Tab label="Filter" icon={<FilterIcon />} />

                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><GoogleApiWrapper/></TabContainer>}
            {value === 1 && <TabContainer>Future Iteration: List of Events will go here according to their SDGs.</TabContainer>}
            {value === 2 && <TabContainer>Future Iteration: Allow the user to filter through events</TabContainer>}
        </div>
    );
}

export default NavTab;