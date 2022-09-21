import React, {useState, useCallback } from 'react';

function HiringDropdown(props) {
  // https://codepen.io/raubaca/pen/VejpQP
  
   let repos = props.Repos;
   let purpose = props.purpose;

  //  console.log(purpose);


// Departments
    // 1. All department to array
    const departments = repos.jobs.map(x => x.department);
    // console.log(departments);
      
    // 2. Filtering Departments so only unique dept are in dropdown

    // Step 1
    const uniqueDept = new Set(departments);

    // Step 2
    const uniqueDeptArray = [...uniqueDept];
    // console.log(uniqueDeptArray);


  // Work Type
    // 1. All work type to array
    const workType = repos.jobs.map(x => x.employment_type);
    console.log(departments);
      
    // 2. Filtering Departments so only unique dept are in dropdown

    // Step 1
    const uniqueWorkType = new Set(workType);

    // Step 2
    const uniqueWorkTypeArray = [...uniqueWorkType];
    // console.log(uniq   ueDeptArray);



  // Handle Dropedown change

  const [selected, setSelected] = useState("All");


  const handleChange = event => {

    // console.log(event.target.value);

    setSelected(event.target.value);

    props.passData(event.target.value)
    
  };



  if(purpose === "department"){

    return(
      <>
        {/* //  Find unique text [dept] */}
          <select className="select" value={selected} onChange={handleChange}>
            <option value=""> Departments </option>
            {uniqueDeptArray.map((dept,i) => {
                return (<option key={i} value={dept}>{dept}</option>);
              })}
          </select>
      </>

    );

  }
  else{
  // //   // Return work type
    return(
      <>
        {/* Find unique text [dept] */}
          <select className="" value={selected} onChange={handleChange}>
            <option value="">Work Type</option>
            {uniqueWorkTypeArray.map((wType,i) => {
              return (<option key={i} value={wType} >{wType}</option>);
          })}
          </select>
       </>
     );
   }
}
    export default HiringDropdown;