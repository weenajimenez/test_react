import React from 'react';
import constant from './appConstants';

class SidebarMenu extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div ui-view="menu" className="menu ">
            <div id="mySidenav" 
              className={this.props.isMenuOpen ? 'sidenav noCollapse': 'sidenav collapse'}>
              <div className="imgLogoPosition" >
                <a target="_blank" href="https://www.ricoh.es/index.html">
                  <img src="resources/images/ricoh-hd_logo.png" 
                  className={this.props.isMenuOpen ? 'fullLogo': 'fullLogo hide'} alt="Full ricoh logo" />
                  <img src="resources/images/Ricoh-logo-min.png" 
                  className={this.props.isMenuOpen ? 'minLogo hide': 'minLogo'}
                  alt="Min rico logo" />
                </a>
              </div>

              <div id="menuItems" className="menuItems">
                <ul className={this.props.isMenuOpen ? 'menuOpenUl': 'menuOpenUl hide'}>
                  <li>{this.props.langData.WELCOME}</li>
                  <li>{this.props.langData.INFO}</li>
                  <li>{this.props.langData.FORM}</li>
                  <li>{this.props.langData.TABLE}</li>
                  <li>{this.props.langData.SUMMARY}</li>
                </ul>


                <ul className={this.props.isMenuOpen ? 'menuCloseUl hide': 'menuCloseUl'}>
                  <li data-toggle="tooltip" data-placement="right" title={this.props.langData.WELCOME}>
                  <i class="fas fa-home"></i>
                </li>
                <li data-toggle="tooltip" data-placement="right" title={this.props.langData.INFO}>
                  <i class="fas fa-trophy"></i>
                </li>
                <li data-toggle="tooltip" data-placement="right" title={this.props.langData.FORM}>
                  <i class="fab fa-wpforms"></i>
                </li>
                <li data-toggle="tooltip" data-placement="right" title={this.props.langData.TABLE}>
                  <i class="fas fa-table"></i>
                </li>
                <li data-toggle="tooltip" data-placement="right" title={this.props.langData.SUMMARY}>
                  <i class="fas fa-chart-bar"></i>
                </li>
              </ul>
              </div>
            </div>
        </div>
      );
    }
  }

export default SidebarMenu;