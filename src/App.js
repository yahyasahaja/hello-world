import React, { Component } from 'react';

import Box from './components/Box';
import CustomButton from './components/CustomButton';

const fetchDataApi = number => new Promise((resolve) => {
  setTimeout(function() {
    resolve({
      data: {
        number: number + 1,
      }
    });
  }, 1000);
});

const App = ({name}) => {
  const [number, setNumber] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const fetchDataCallback = React.useCallback(() => {
    setLoading(true);
    fetchDataApi(number).then(({data}) => {
      setNumber(data.number);
    }).finally(() => {
      setLoading(false);
    });
  }, [number]);

  const boxes = [];
  for (let i = 0; i < number; i++) {
    boxes.push(<Box key={i} />);
  }

  return (
    <>
      <h1>
        Hello world, {name}
        <div />
        let's counting {number}
      </h1>
      <CustomButton onClick={fetchDataCallback}>
        Click Me!
        <strong> To increment the number</strong>
      </CustomButton>
      {loading && <div>Loading ...</div>}
      
      {boxes}
    </>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0,
//       loading: false,
//     };
//   }

//   fetchData() {
//     this.setState({loading: true});
//     fetchDataApi(this.state.number).then(({data}) => {
//       this.setNumber(data.number);
//     }).finally(() => {
//       this.setState({loading: false});
//     });
//   }
  
//   setNumber(number) {
//     this.setState({
//       number,
//     });
//   }

//   renderLoading() {
//     if (this.state.loading) return (
//       <div>Loading ...</div>
//     );
//   }

  // renderBoxes() {
  //   const boxes = [];
  //   for (let i = 0; i < this.state.number; i++) {
  //     boxes.push(<Box key={i} />);
  //   }

//     return boxes;
//   }

//   render() {
//     return (
//       <>
//         <h1>
//           Hello world, {this.props.name}
//           <div />
//           let's counting {this.state.number}
//         </h1>
//         <CustomButton onClick={this.fetchData.bind(this)}>
//           Click Me!
//           <strong> To increment the number</strong>
//         </CustomButton>
//         {this.renderLoading()}
//         {this.renderBoxes()}
//       </>
//     );
//   }
// };

export default App;