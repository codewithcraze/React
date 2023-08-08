// Components and Props. 
// This is a function Component.

// IN a component folder their is too file in first file we learn about function component component and in second we learn about learn class component.


import First from './components/first'; // Function Component.
import Second from './components/second'; // Class Component.


const App = () => {
<<<<<<< Updated upstream
 
    return (
        // everything written inside return is not html but it's JSX 
        <div>
            <h3>Hello World</h3>
        </div>
    );
=======
    

    function handleClick(){
        window.alert("Clicked");
    }

    return(
        <>
            <div>
                <h3>Welcome To Code</h3>
                
                <First name="Deepak Chaudhary" /> 
                {/* This is how we can import function and passed props into it.  */}

                <Second name="Ritika Mahur" handleClick={handleClick} />

            </div>
        </>
    )
>>>>>>> Stashed changes

}

export default App;