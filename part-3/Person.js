//using destructuring

// const Person = ({ age, hobbies, name }) => {
//     const voteText = age >= 18
//         ? "Go vote!"
//         : "Go study!";
  
//     // your browser will issue a stern warning about this; we'll learn how to fix
//     // that later.
//     const hobbiesMap = hobbies.map(hobby => <li>{hobby}</li>);
  
//     return (
//       <div>
//         <p>Learn some information about this person:</p>
//         <ul>
//           <li>Name: {name}</li>
//           <li>Age: {age}</li>
//           <ul>Hobbies: {hobbiesMap}</ul>
         
//         </ul>
//         <h3>{voteText}</h3>
//       </div>
//     );
//   }

//Version without destructuring:
  const Person = (props) => {
    const voteText = props.age >= 18
        ? "Go vote!"
        : "Go study!";
  
  
    const hobbiesMap = props.hobbies.map(hobby => <li>{hobby}</li>);
  
    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {props.name}</li>
          <li>Age: {props.age}</li>
          <ul>Hobbies: {hobbiesMap}</ul>
         
        </ul>
        <h3>{voteText}</h3>
      </div>
    );
  }


