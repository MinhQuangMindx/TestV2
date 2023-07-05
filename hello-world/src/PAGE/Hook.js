// import React, { useState } from "react";

// import React, { useState } from "react";

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

//   const inputStyle = { width: "80%" };
//   const buttonStyle = { width: "20%" };
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

//   const handleSubmit = () => {
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
// }

// export default App;
