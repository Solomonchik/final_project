import React, {Component} from 'react';
import classes from './QuizCreator.css'
import Button from '../../components/UI/Button/Button'
import {createControl} from '../../Form/FormFrameWork'
import Input from '../../components/UI/Input/Input'

function createOptionControl(number) {
    return createControl({
        label: `Variable ${number}`,
        errorMessage: 'Variable can\'t be empty',
        id: number
    }, {required: true})
}

function createFormControl() {
    return {
        question: createControl({
            label: 'enter question',
            errorMessage: 'Question can\'t be empty'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }

}

class QuizCreator extends Component {
    state = {
        quiz: [],
        formControls: createFormControl()
    };

    submitHandler = event => {
        event.preventDefault()
    };

    addQuestionHandler = () => {

    };

    creatQuiyHandler = () => {

    };

    changeHandler = (value, controlName) => {

    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];

            return (
                <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Create Test</h1>

                    <form onSubmit={this.submitHandler}>

                        {this.renderInputs()}

                        <select></select>
                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}>
                            Add Question</Button>
                        <Button
                            type="success"
                            onClick={this.creatQuiyHandler}>
                            Create Test</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default QuizCreator;