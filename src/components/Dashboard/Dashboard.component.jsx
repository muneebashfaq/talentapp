import './Dashboard.styles.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import {Outlet} from 'react-router'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloudOffRoundedIcon from '@mui/icons-material/CloudOffRounded';
import AlarmOnRoundedIcon from '@mui/icons-material/AlarmOnRounded';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import EnhancedTable from './Table';

const Dashboard=()=>{
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

    return(<>
       <Outlet/>
       <div className='dashboard_body'>
<div className="row">
    <div className="col-xl-3 col-lg-6 col-md-6">
    <div className="card" style={{backgroundColor:"rgb(92, 142, 165)"}}>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center",color:"white"}}><PeopleAltIcon style={{fontSize:"40px"}}/></h5>
<h1 className='card_number'>100</h1>
<h6 className='card_number_caption' >Total Requisitions </h6>
  </div>
</div>
<div>
    
</div>
  </div>
   

    <div className="col-xl-3 col-lg-6 col-md-6">

    <div className="card" style={{backgroundColor:"rgb(237, 196, 196)"}}>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center",color:"white"}}><SearchRoundedIcon style={{fontSize:"40px"}}/></h5>
<h1 className='card_number'>50</h1>
<h6 className='card_number_caption' >Requisition Compare </h6>
  </div>
</div>
    </div>

    <div className="col-xl-3 col-lg-6 col-md-6">
    <div className="card" style={{backgroundColor:"rgb(72, 118, 135)"}}>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center",color:"white"}}><CloudOffRoundedIcon style={{fontSize:"40px"}}/></h5>
<h1 className='card_number'>10</h1>
<h6 className='card_number_caption' >Requisition Shortlisted</h6>
  </div>
</div>

    </div>

   
    <div className="col-xl-3 col-lg-6 col-md-6">
    <div className="card" style={{backgroundColor:"rgb(33, 150, 243)"}}>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center",color:"white"}}><AlarmOnRoundedIcon style={{fontSize:"40px"}}/></h5>
<h1 className='card_number'>4</h1>
<h6 className='card_number_caption' >Requisition Closed</h6>
  </div>
</div>
    </div>
</div>
</div>

<div className='row'>
  <div className='col-xl-2 col-lg-3 col-md-3 col-sm-12'>
<h4 style={{marginTop:"22px"}}>Requisitions</h4>
  </div>
  <div className='col-xl-7 col-lg-6 col-md-4 col-sm-12'>
  <Box sx={{ '& > :not(style)': { m: 1 } }}>
      
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5,width:50 }} />
        <TextField id="input-with-sx" label="Search..." variant="standard" />
      </Box>
    </Box>
  </div>

  <div className='col-xl-3 col-lg-2 col-md-2 col-sm-12' >
  <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
     <Link to="/CreateRequistion" className="dashboard" style={{marginTop:"18px"}}><AddIcon/></Link>
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Create User</Typography>
      </Popover>
    </div>
</div>


</div>
<div className='row' style={{marginTop:"20px"}}>
  <div className='col-12'>

</div>
</div>
<div className="container">

<EnhancedTable/>
</div>
    </>)
}
export default Dashboard