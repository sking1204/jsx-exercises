const App = () => (
    <div>
        <Person
            name="Jimmys Johnz"
            age={52}
            hobbies = {["eating sandwiches", "making bread"]}             
         />         
    
        
    </div>

)
  

  ReactDOM.render(<App/>, document.getElementById("root"))

