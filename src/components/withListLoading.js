import React from 'react';

function WithListLoading(Component) {

  return function WihLoadingComponent({ isLoading, ...props }) {
    
    if (!isLoading){
      // console.log(props.repos);
      return <Component {...props} />;
    } 
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
    
  };
}

export default WithListLoading;
