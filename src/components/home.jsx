// import React from 'react'
// import Navbar from './navbar';
// import Footer from './footer';
// import Main from './main';



// const home = () => {
//   return (
//     <div>

//     <Navbar />
//       <Main />
//       <Footer />
    

//     </div>
//   )
// }

// export default home




import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Main from './main';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Main />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
