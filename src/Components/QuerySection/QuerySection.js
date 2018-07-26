import React, { Component } from 'react'
import './QuerySection.css'
import dropdown from '../../assets/dropdown.svg'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import QueryEditor from '../QueryEditor/QueryEditor'

export default class QuerySection extends Component {
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
        const {open} = this.state
        const {onClickCharts} = this.props
        const items = {
            "Sales Data Analystics": ["chart11","chart12","chart13"],
            "Departmental Reports": ["chart21","chart22","chart23"],
            "Consumer Analytics": ["chart31","chart32","chart33"]
        }
          return(
              <div className="QueryResult">
              <div className="chartHeaderContainer">
                <div className="chartDetailsSection">
                    <span>Charts > Consumer Analytics > Chart 1</span>
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
                <div className="chartFunctions">
                        
                </div>
              </div>
              <div className="querySection">
                <QueryEditor/>
              </div>
              {/* <div className="resultSection">
                 
              </div> */}
              <div>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      {items["Sales Data Analystics"].map((chartnumber,i)=>
                      <MenuItem key={i} onClick={onClickCharts}>{chartnumber}</MenuItem>
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