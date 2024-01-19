const App = () => (
    <div>
        <Tweet
            name={<b>"Luna Tuna"</b>}
            username="fancyfeast!"
            date={new Date().toDateString()}
            message="Fancy feast is my fav!"
         />
        

        <Tweet
            name={<b>"Spring Bock"</b>}
            username="kibblez!"
            date={new Date().toDateString()}
            message="Food food food!"
         />
             
        
    </div>

)
  

  ReactDOM.render(<App/>, document.getElementById("root"))

