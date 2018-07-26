import React, { Component } from 'react'
import './ChartsCard.css'
import dropdown from '../../assets/dropdown.svg'
import graph from '../../assets/graph.svg'
// import MenuItem from 'material-ui/MenuItem'
// import Popover from 'material-ui/Popover';
// import Menu from 'material-ui/Menu';
// import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing.unit * 2,
    },
});

export default class ChartsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          open: false,
          anchorOrigin: {
              horizontal:"right",
              vertical:"bottom"
            },
          targetOrigin: {
              horizontal:"right",
              vertical:"top"
            },
          anchorEl: undefined,
        }
    }    
    handleToggle = () => {
        this.setState(state => ({ open: !state.open }))
    }    
    handleClose = (event) => {
        // if (this.anchorEl.contains(event.target)) {
        //   return
        // }    
        this.setState({ open: false })
    }
    render() {
        const chartsImages = {
            "Sales Data Analystics": graph,
            "Departmental Reports": graph,
            "Consumer Analytics": graph
        }
        const items = {
            "Sales Data Analystics": ["chart11","chart12","chart13"],
            "Departmental Reports": ["chart21","chart22","chart23"],
            "Consumer Analytics": ["chart31","chart32","chart33"]
        }
        const {charttype} = this.props
        const {open} = this.state
        console.log(this.state.open)
        return (
            <div>
            <div className="eachChartCard">
                <div className="chartLabel">
                    <img src ={chartsImages[charttype.label]} alt={chartsImages[charttype.label]} width="30px" height="30px"/>
                    <span>{charttype.label}</span>
                    <Button
                    buttonRef={node => {
                        this.anchorEl = node;
                      }}
                      aria-owns={open ? 'menu-list-grow' : null}
                      aria-haspopup="true"
                      onClick={this.handleToggle}
                      style={{height:"20px"}}
                    ><img className="downArrow" src = {dropdown} alt={dropdown}/>
                </Button>
                </div>
                <div className="chartsCount">
                   <span>{charttype.chartscount} Graphs</span>
                </div>
            </div>
            <div>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' , width:"270px", marginTop:"40px", marginLeft:"-200px", borderRadius:"0px"}}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      {items[charttype.label].map((chartnumber,i)=>
                      <MenuItem key={i} onClick={this.handleClose}>{chartnumber}</MenuItem>
                    )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
            </div>

        )
    }
}