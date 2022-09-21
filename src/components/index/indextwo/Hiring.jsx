import { data } from 'jquery';
import React, { useEffect, useState } from 'react';
// import './App.css';
import List from '../../List'
import withListLoading from '../../withListLoading';

// https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/#comments-rest-api-react-fetch-axios

function Hiring({aboutRef={aboutRef}, initiativesRef={initiativesRef}, benefitsRef={benefitsRef}, contactRef={contactRef}}) {

// 	fetch('https://api.github.com/users/hacktivist123/repos')
//   .then(response => response.json())
//   .then(data => console.log(data));

	const ListLoading = withListLoading(List);

	const [appState, setAppState] = useState({
		loading: false,
		repos: null,
	});

	useEffect(() => {
		
		setAppState({ loading: true });
		
		const apiUrl = `https://apply.workable.com/api/v1/widget/accounts/loopme`;

		fetch(apiUrl)
			.then(response => response.json())
			.then((data) => {
				setAppState({ loading: false, repos: data})
			}
			
			);

	}, [setAppState]);

	

  return (

	<section className="hiring-area position-relative pt-115 pb-90">
	<div className="hiring-bg" />

		<div className="container">
		<div className="row justify-content-center">
			<div className="col-xl-6 col-lg-8">
				<div className="section-title title-style-three text-center">
					<h2 className='beneHeader'> We're Hiring </h2>
					<p className='benetxt'> Looking for your next career move? LoopMe is hiring! View our latest vacancies. </p>
				</div>
			</div>
		</div>

{/*  */}
		<div className='repo-container'>
		
        	<ListLoading isLoading={appState.loading} repos={appState.repos} />
      	</div>
{/*  */}


	</div>
  </section>


  )
}

export default Hiring