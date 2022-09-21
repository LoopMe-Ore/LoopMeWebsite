import React, {useState,useEffect} from 'react';


class BtnDropdown extends React.Component {


  constructor(props) {  

    super(props);

    this.dropdownTitle = React.createRef();
    this.dropdownList = React.createRef();
    this.mainButton = React.createRef();
    this.root = document.documentElement;

    this.repos = props.Repos;
    this.purpose = props.purpose;

    // this.focusTextInput = this.focusTextInput.bind(this);

// Departments
  // 1. All department to array
  const departments = this.repos.jobs.map(x => x.department);
  // console.log(departments);
    
  // 2. Filtering Departments so only unique dept are in dropdown

  // Step 1
  const uniqueDept = new Set(departments);

  // Step 2
  const uniqueDeptArray = [...uniqueDept];
  // console.log(uniqueDeptArray);

  this.listItems = []
  this.listItems.push("")

  this.listItems = Array.from(uniqueDeptArray.values());


    // this.listItems = ["0", "1", "2", "3", "4"];


    this.state = { text: null,
                   clickedText:"Department"};
  }

  

  componentWillMount() {
    
    // this.clickMe = this.clickMe.bind(this);

    this.renderListItems = this.renderListItems.bind(this);
    this.listItemTemplate= this.listItemTemplate.bind(this);
    this.setDropdownProps = this.setDropdownProps.bind(this);
    this.mainButtonClick = this.mainButtonClick.bind(this);

    this.renderListItems();
}


  

  dropdownListclick = (e) => {
    const clickedItemText = e.target.innerText.toLowerCase().trim();
    // console.log(clickedItemText)
    // this.dropdownTitle.innerHTML = clickedItemText;

    this.setState({ clickedText: clickedItemText}, () => {
      // console.log(this.state.clickedText, 'Clicked text');
    }); 

    this.setDropdownProps(0, 0, 0);
    
    this.handleChange(clickedItemText)
  };

  mainButtonClick = () => {
    const listWrapperSizes = 3.5; // margins, paddings & borders
    const dropdownOpenHeight = 4.6 * this.listItems.length + listWrapperSizes;
    const currDropdownHeight =
      this.root.style.getPropertyValue("--dropdown-height") || "0";
  
    currDropdownHeight === "0"
      ? this.setDropdownProps(180, dropdownOpenHeight, 1)
      : this.setDropdownProps(0, 0, 0);
  };


  renderListItems = () => {

    
      
    let lddwo =  this.listItems.map((item, index) => {
      return this.listItemTemplate(item, 100 * index);
    })
    .join("")

    // console.log(type(lddwo))

    this.setState({ text: lddwo}, () => {
      // console.log(this.state.text, 'text');
    }); 

    
  };



  listItemTemplate = (text, translateValue) => {
    return `
      <li class="dropdown-list-item">
        <button class="dropdown-button list-button" data-translate-value="${translateValue}%">
          <span class="text-truncate">${text}</span>
        </button>
      </li>
    `;
  };


  setDropdownProps = (deg, ht, opacity) => {
    this.root.style.setProperty("--rotate-arrow", deg !== 0 ? deg + "deg" : 0);
    this.root.style.setProperty("--dropdown-height", ht !== 0 ? ht + "rem" : 0);
    this.root.style.setProperty("--list-opacity", opacity);
  };

  
  handleChange = event => {

      // console.log(event.target.value);

      // this.setSelected(event);

      this.props.passData(event)
      
    };




      render() {
        return(

        <div className="dropdown-container">
        <button className="dropdown-button main-button" ref={this.mainButton} onClick = {this.mainButtonClick}>
          <span className="dropdown-tite text-truncate" ref={this.dropdownTitle} dangerouslySetInnerHTML={{__html:this.state.clickedText}}></span>
          <span className="dropdown-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </span>
        </button>
        <div className="dropdown-list-container">
          <div className="dropdown-list-wrapper">
            <ul className="dropdown-list" ref={this.dropdownList} onClick = {this.dropdownListclick} dangerouslySetInnerHTML={{__html:this.state.text}}></ul>
          </div>
        </div>
      </div>
        );
      }
    }
  
  export default BtnDropdown;