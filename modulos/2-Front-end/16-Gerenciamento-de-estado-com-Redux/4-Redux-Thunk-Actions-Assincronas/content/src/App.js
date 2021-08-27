import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './Redux/Actions';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.dogDB.imagePath,
  isFetching: state.dogDB.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

export default connect(mapStateToProps, mapDispatchToProps)(App);





// import React from 'react';
// import { connect } from 'react-redux';
// import { failedRequest, getImage, requestDog } from './Redux/Actions';

// function App({ isFetching, src, requestDog, getImage, failedRequest }) {

//   const getNextDog = async () => {
//     requestDog();
//     try {
//       const res = await fetch('https://dog.ceo/api/breeds/image/random');
//       if(!res.ok) {throw new Error('fetch failed')}
//       const data = await res.json();
//       getImage(data);
//     } catch (error) {
//       failedRequest(error.message)
//     }
//   }

//   return (
//     isFetching ? <p>Loading</p>
//       : (
//         <div style={{ width: 500 }}>
//           <button
//             style={{ display: 'block' }}
//             onClick={getNextDog}
//             type="button"
//           >
//             Novo Doguinho
//           </button>
//           <img style={{ width: '100%' }} src={src} alt="dog" />
//         </div>
//       )
//   );
// }

// const mapStateToProps = (state) => ({
//   src: state.reducer.imagePath,
//   isFetching: state.reducer.isFetching,
// });

// const mapDispatchToProps = (dispatch) => ({
//   requestDog: () => dispatch(requestDog()),
//   getImage: (payload) => dispatch(getImage(payload)),
//   failedRequest: (payload) => dispatch(failedRequest(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
