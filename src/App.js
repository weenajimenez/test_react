import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import constant from './appConstants';
import HeaderMenu from './HeaderMenu';
import SidebarMenu from './SidebarMenu';

function Footer(props) {
   return(
    <div ui-view="footer" className="footer ">
      <div className={props.isMenuOpen ? 'noCollapse': 'collapse'}>
          <p className="footerInfo">{props.langData.FOOTER}</p>
      </div>
    </div>
   );
}

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        isMenuOpen:true,
        lang:1,
        langData: [],
      }

      this.changeLang = this.changeLang.bind(this);
      this.colapseMenu = this.colapseMenu.bind(this);
  }

  componentDidMount(){
    this.chargeTetxs(this.state.lang);
  }

  async chargeTetxs(langId)
  {
    let urlData = null;
    constant.Languages.forEach(lang =>{
    if(langId == lang.id)
      {
        urlData = lang.dataUrl;
      }
    });
    
    let dataJson = await fetch(urlData);
    let json = await dataJson.json();
    this.setState({langData: json});
  }

  changeLang(idLang, event) 
  {
    this.setState({lang:idLang});
    this.chargeTetxs(idLang);
  }

  colapseMenu(isOpen, event)
  {
    this.setState({isMenuOpen:isOpen})
  }

  render(){
    return(
      <div className="container">
         <HeaderMenu  
         lang={this.state.lang} 
         langData={this.state.langData} 
         selectingLang={this.changeLang}
         isMenuOpen={this.state.isMenuOpen}
         colapseMenu={this.colapseMenu}/>
         <SidebarMenu 
         isMenuOpen={this.state.isMenuOpen}
         langData={this.state.langData} />
         <div ui-view="content" className="content ">
           TODO
         </div>
         <Footer
         isMenuOpen={this.state.isMenuOpen}
         langData={this.state.langData} />
       </div>
    );
  }
}

export default App;
