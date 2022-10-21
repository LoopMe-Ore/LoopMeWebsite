// import React from 'react';
import React, { useEffect, useState } from 'react';
import HiringDropdown from './HiringDropdown';
import BtnDropdown from './index/indextwo/BtnDropdown';
import $ from 'jquery'


const List = (props) => {
  

  const { repos } = props;
  let TempRepos = [];


  // Search
  // Set search query to empty string
  const [q, setQ] = useState("");


  // See More Stuff
  if (repos){
    // console.log(repos);
    // console.log(repos.jobs[1]);

    for (let i = 0; i < repos.jobs.length; i++) {
      // TempRepos[i] = repos.jobs[i]
      // console.log(repos.jobs)

    }
  
    // console.log(TempRepos[0])
  }

  
  
  // Set search parameters

  // const [searchParam] = useState(["title",
  //                                 "employment_type",
  //                                 "department",
  //                                 "country",
  //                                 "city",
  //                                 "state",
  //                                 "experience",
  //                                 "function",
  //                                 "industry"]);

  const [searchParam] = useState(["title",
                        "employment_type",
                        "department",
                        "country",
                        "city",
                        "state",
                        "experience"
                      ]);



  const search = (items)  => {

      // console.log("Hiring Searching");

      // Loading Screen
      // setTimeout(loadingScreen, 1000);

      return items.filter((item) => {
          return searchParam.some((newItem) => {
            // console.log(item[newItem])
              return (
                  item[newItem]
                      .toString()
                      .toLowerCase()
                      .indexOf(q.toLowerCase()) > -1 
              );
          });
      });

    };


  const toggleCountrySelect = (e) => {

    // console.log("country toggle")

    let countryOptions = document.getElementById("filter_country_img").children;

    for(let i = 0; i < countryOptions.length; i++){

      countryOptions[i].style.filter = "brightness(100%)"

    }

  //   // If already selected, unselect(Brightness 100) and search empty
    if (q === e.target.name){
      setQ("")
      e.currentTarget.style.filter = "brightness(100%)"

  //   // // If new one is selected untoggle everything (brihghtnesss 100) and then toggle new one and set search bar
    } else {

      setQ(e.target.name)
      e.currentTarget.style.filter = "brightness(150%)"

    }

  }



  // if no Jobs Available....
  if (!repos || repos.length === 0) return <p> No Jobs Available, Check Back Later </p>;

    // // initialy show the first five
  let currList = [];

  if (!(!repos || repos.length === 0)){

    

    for (let i = 0; i < 6; i++) {
      // console.log(repos.jobs[i])
      currList[i] = repos.jobs[i];
    }

    // console.log(currList[0])
    // setCurrentShown(currList)

  }

  return (
    
    <ul id="myUL">

      <div className='hiring_container'>
      {/* <BtnDropdown Repos={repos} purpose={"department"} passData = {setQ}></BtnDropdown> */}
        <div className='hiring_search_filter_container'>

          <div className='search'>
            <img alt="search" id='inputSearch_img' loading="eager" src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/search_icon.png"/>
            <input 
              type="search" 
              name="search-form" 
              id="inputSearch_hiring" 
              className="search-input"
              placeholder="Search For..."
              value={q}
              /*
              // set the value of our useState q
              //  anytime the user types in the search box
              */
              onChange={(e) => setQ(e.target.value)}>
            </input>
          </div>

{/* Line 2 */}

          <div className='filter'>

            <img alt="filter" id='filter_loc_img'  src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/location_logo.png"/>

            


            {/* Filter By Countries */}
{/* WORKS */}
            {/* <select className="select" onChange={(e) => setQ(e.target.value)}>
              <option value="All">000</option>
              <option value="UK">UK</option>
            </select> */}
            
            {/* https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs */}

            {/* Filter By Countries */}
             <div id='filter_country_img' className='filter_country_img'>
              <img alt="filter" name="United Kingdom" src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/Flag-UK.png" onClick={(e)  => toggleCountrySelect(e)}/>
              <img alt="filter" name="Ukraine" src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/Flags-Ukraine.png" onClick={(e) => toggleCountrySelect(e)}/>
              <img alt="filter" name="Poland" src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/Flags-Poland.png" onClick={(e) => toggleCountrySelect(e)}/>
              <img alt="filter" name="United States" src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/Flags-Us.png" onClick={(e) => toggleCountrySelect(e)}/>
              <img alt="filter" name="Singapore" src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/Flags-Singapore.png" onClick={(e) => toggleCountrySelect(e)}/>
            </div>

            {/* Dropdown Department */}
            {/* <HiringDropdown Repos={repos} purpose={"department"} passData = {setQ}/> */}
              <BtnDropdown Repos={repos} purpose={"department"} passData = {setQ}></BtnDropdown>
              {/* <BtnDropdown Repos={repos} purpose={"department"} passData = {setQ}></BtnDropdown> */}
              {/* <BtnDropdown Repos={repos} purpose={"department"} passData = {setQ}></BtnDropdown> */}
              
  
            {/* Dropdown Work Type */}
            {/* <div className="Dropdown_container"> */}
               {/* <HiringDropdown Repos={repos} purpose={"worktype"} passData = {setQ}/>  */}
            {/* </div>  */}

            {/* Checkbox Remote Work Filter */}
            {/* <label className="cb_container">
              <p>Remote</p>
              <input type="checkbox"></input>
              <div className="cb_checkmark"></div>  
            </label> */}

          </div>

        </div>
        
        <div className='allJobs' id='idAllJobs'>
      
        {/* SHOW MORE - https://codepen.io/dmorda/pen/AqVEXr */}

          {search(repos.jobs).map((repo,i) => {
            
            return (
              
              <div key={i} data-name={i} className='list_hiring' onClick={event => window.open(repo.shortlink, '_blank').focus()}>

                    <div className='repo-title hiringSec'>
                      {/* <img alt="a pic" className="repo_tlt_pic" loading="eager" src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/RectangleTitle.png"/> */}
                      <div className='repo_tlt_pic'>  </div>

                      <div>{repo.title}</div>
                    </div>

                    <div className='repo-city-state hiringSec'> {repo.city} {repo.state} </div>
                    <img alt="border" className="seperation_border" loading="eager" src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/Vector12.png"/>
                    <div className='repo-department hiringSec'> {repo.department}, {repo.function} </div>
                    <img alt="border" className="seperation_border" loading="eager" src="https://i.loopme.me/gwd/test/LP_website/img/images/Hiring/Vector12.png"/>
                    <div className='repo-employ-type hiringSec'> {repo.employment_type} </div>
              </div>
              

            );

          })}

      </div>

        {/* SEE MORE BUTTON */}

        <div className='seeMore'>
          <div id ="hiringSeeMore">
          </div>
        </div>

      </div>
      
    </ul>
  );
};
export default List;

