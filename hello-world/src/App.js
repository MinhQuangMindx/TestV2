import Header from "./PAGE/header";
import logo from "./logo.svg";
import Navigate from "./components/navigate";

function App() {
  return (
    <div className="wrapper">
      <Navigate />
    </div>
  );
}

export default App;
// import logo from "./logo.svg";
// import "./App.css";
// import CustomInput from "./components/input";
// import Button from "./components/button";

// import React, { useState } from "react";
// import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";

// const MyForm = () => {
//   const [inputText, setInputText] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setResults((prevResults) => [...prevResults, inputText]);
//     setInputText("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Box display="block" alignItems="center" padding-left="300">
//         <TextField
//           label="Enter text"
//           variant="outlined"
//           size="small"
//           type="text"
//           value={inputText}
//           onChange={(event) => setInputText(event.target.value)}
//         />
//         <Box marginLeft={1}>
//           <button type="submit">Submit</button>
//         </Box>
//       </Box>
//       <Box marginTop={1}>
//         {results.map((result, index) => (
//           <FormControlLabel
//             key={index}
//             control={<Checkbox checked={true} />}
//             label={result}
//           />
//         ))}
//       </Box>
//     </form>
//   );
// };

// export default MyForm;

//
// function InputComponent(props) {
//   const [value, setValue] = useState("");
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.onSubmit(value);
//     setValue("");
//   };

//   const handleCheck = (event) => {
//     setIsChecked(event.target.checked);
//   };
//   const text = isChecked ? <del>{value}</del> : value;

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={value} onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </form>
//       <br />
//       <input type="checkbox" checked={isChecked} onChange={handleCheck} />
//       <br />
//       <span>{text}</span>
//     </div>
//   );
// }

// function App() {
//   const [values, setValues] = useState([]);

//   const handleSubmit = (value) => {
//     setValues([...values, value]);
//   };

//   return (
//     <div>
//       <InputComponent onSubmit={handleSubmit} />
//       {values.map((value, index) => (
//         <div key={index}>{value}</div>
//       ))}
//     </div>
//   );

//   // return (
//   //   <div className="Main">
//   //     <header className="App-header">
//   //       <p>#todo</p>
//   //       <form action="">
//   //         <CustomInput></CustomInput>
//   //         <Button></Button>
//   //       </form>
//   //     </header>
//   //   </div>
//   // );
// }

// export default App;
//
