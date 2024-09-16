import { Link } from "react-router-dom";
import { useState } from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PhpIcon from '@mui/icons-material/Php';
import AppleIcon from '@mui/icons-material/Apple';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const MaterialTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/material">Material</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Tabs</li>
            </ol>
        </nav>

        <h1>Tabs</h1>

        <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab icon={<PhpIcon />} label="Menú 1" {...a11yProps(0)} />
                      <Tab icon={<AppleIcon />} label="Menú 2" {...a11yProps(1)} />
                      <Tab icon={<DesktopMacIcon />} label="Menú 3" {...a11yProps(2)} />
                  </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                  <Typography>
                  Contenido 1
                  </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                  Contenido 2
              </TabPanel>
              <TabPanel value={value} index={2}>
                  Contenido 3
              </TabPanel>
          </Box>
    </>
  )
}

export default MaterialTabs