import react, { Component } from 'react';
import Burger from '../../component/Burger';
class BurgerBuilder extends Component{
    render(){
        return(
            <div>
                <Burger/>
                <div>Орцын удирдлага</div>
            </div>
        )
    }
}

export default BurgerBuilder;