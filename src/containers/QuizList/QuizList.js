import React, {Component} from 'react';
import classes from './QuizList.css'
import {NavLink} from "react-router-dom";

class QuizList extends Component {

    renderQuizes(){
        return [1, 2, 3].map((quiz, index)=> {
            return(
                <li
                    key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                        <h1>Test {quiz}</h1>
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;