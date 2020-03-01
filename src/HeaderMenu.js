import React from 'react';
import constant from './appConstants';

class HeaderMenu extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isLangMenuOpen:false,
        isEvaluatorMenuOpen:false,
      }
    }
  
    handleClick(isOpen){
      this.props.isMenuOpen=isOpen;
    }
  
    handleLanguageClick(isLangOpen)
    {
      this.setState({isLangMenuOpen:isLangOpen});
      if(isLangOpen){
        this.setState({isEvaluatorMenuOpen:false});
      }
    }
  
    handleEvaluatorClick(isEvalOpen)
    {
      this.setState({isEvaluatorMenuOpen:isEvalOpen});
      if(isEvalOpen){
        this.setState({isLangMenuOpen:false});
      }
    }
  
    render(){
      return(
        <div ui-view="header" className="header ">
          <div id="headerContainer" 
              className={this.props.isMenuOpen ? 'headerContainer noCollapse':'headerContainer collapse'}>
            <span 
              className={this.props.isMenuOpen ? 'collapsibleMenuIconBurger invisible':'collapsibleMenuIconBurger visible'}
              onClick={(event)=>{this.props.colapseMenu(true,event)}}
            >&#9776;</span>
            <span 
              className={this.props.isMenuOpen ? 'collapsibleMenuIconCross visible':'collapsibleMenuIconCross invisible'}
              onClick={(event)=>{this.props.colapseMenu(false,event)}}>&times;</span>
            <span className="contactWithEvaluator">
              <button type="button" className="btn btn-primary" onClick={()=>{this.handleEvaluatorClick(!this.state.isEvaluatorMenuOpen)}}>
              {this.props.langData.CONTACT_WITH_EVALUATOR}
              </button>
            </span>
            <span className="languageButton" onClick={()=>{this.handleLanguageClick(!this.state.isLangMenuOpen)}} >
              { constant.Languages.map(lang =>this.props.lang == lang.id ? <img src={lang.imageUrl} />:'')}
            </span>
          </div>
  
          <div id="evaluatorInfo" className={this.state.isEvaluatorMenuOpen ? 'cover contactEvaluator':'cover contactEvaluator hide fadeIn' }>
            <span className="hideContactEvaluatorCross" onClick={()=>{this.handleEvaluatorClick(false)}}>{constant.Close}</span>
                  <p className="pContactEvaluator">
                  {this.props.langData.DOUBTS_PARAGRAPH} 
                  </p>	
                  <div className="imgFotoPosition">
                    <img className="imageEvaluator" src="resources/images/fotoSergio.PNG" alt="Evaluator photo" />
                  </div>
            <div className="evaluatorMail">{constant.EvaluatorEmail}</div>
          </div>
  
          <div id="selectLanguageContent" 
              className={this.state.isLangMenuOpen ? 'cover selectLanguage':'cover selectLanguage hide fadeIn'}>
            <span className="hideContactEvaluatorCross" onClick={()=>{this.handleLanguageClick(false)}}>{constant.Close}</span>
            <div className="col col-sm-12">
                <h5 className="languageTittle">{this.props.langData.SELECT_YOUR_LANGUAGE}</h5>
                 {constant.Languages.map(lang   =>
                <div className="col col-sm-6 languageFlagcontainer" >
                  <img 
                    src={lang.imageUrl} 
                    className={this.props.lang == lang.id ? 'selected': ''}
                    onClick={(event)=>{this.props.selectingLang(lang.id, event)}}
                  />
                </div>)  
                }
            </div>
          </div>
        </div>
      );
    }
  }


export default HeaderMenu;