import React from 'react';
import './App.css';
import jsImage from './img/js.png';
import MyDiv from './components/MyDiv';
import Card from './components/Card';
import NavBar from './components/NavBar'


//Class components are used for interactive elements (clicks/input/hovers etc.)
//Functional componenets are used for statc data

class App extends React.Component {
    
    render() {
        
        return (
            <div>
                <NavBar 
                link1 = "Home"
                link2 = "About"
                link3 = "Pages"
                number = {3}

                />
                <Card name= "John" city = "Newcastle" pic= "toilet"/>
                <Card name= "Laura" city = "Leeds" pic= "mill"/>
                <Card name= "Ella" city = "Manchester" pic = "city"/>
                <Card name= "Matt" city = "Bradford" pic = "meow"/>
                <Card name= "Isabelle" city = "London" pic = "west"/>
            </div>
        );
    }
   
}
    


export default App;