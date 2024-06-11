import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CardComponent } from '../components/CardComponent';
import Container from 'react-bootstrap/Container';
export const Goals = () => {
    const [goal, setGoal] = useState('');
    const [stack, setStack] = useState([]);
    const [isMod, setIsMod] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (goal.trim().length <= 1) {
            alert(`Cannot add empty goal`);
            console.error('Goal cannot be an empty string');
            console.log('currentstack');
            return;
        }
        setStack((prevStack) => [...prevStack, goal]);
        setGoal(''); // Clear the input field
    };
    const handleRemove = (itemId) => {
        console.log('item deleted', itemId);
        const index = parseInt(itemId, 10);
        setStack((prevStack) => prevStack.filter((_, i) => i !== index));
    };
    const handleMod = (itemId, updatedText) => {
        const index = parseInt(itemId, 10);
        console.log('item modifined', itemId, index, updatedText);
        setIsMod(!isMod);
        //find that element and update text value at that 
        setStack((prevStack) => prevStack.map((ele, i) => {
            if (i === index) {
                return updatedText;
            }
            else {
                return ele;
            }
        }));
    };
    return (_jsx(_Fragment, { children: _jsxs(Container, { children: [_jsxs(Form, { onSubmit: handleSubmit, children: [_jsxs(Form.Group, { className: "mb-3", children: [_jsx(Form.Label, { children: "Add your goals here:" }), _jsx(Form.Control, { type: "text", placeholder: "Running...", value: goal, onChange: (e) => setGoal(e.target.value) }), _jsx(Form.Text, { className: "text-muted", children: "Let's Go!!!" })] }), _jsx(Button, { variant: "primary", type: "submit", children: "Add" })] }), stack.length > 0 &&
                    stack.map((Goal, index) => (_jsx("div", { className: 'p-3 ', children: _jsx(CardComponent, { propId: `${index}`, propGoal: Goal, propIsMode: isMod, oneDelete: handleRemove, onMod: handleMod }, index) })))] }) }));
};
