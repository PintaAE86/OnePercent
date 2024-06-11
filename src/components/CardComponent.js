import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
export const CardComponent = ({ propGoal, propId, oneDelete, onMod }) => {
    const [modifiedText, setModifiedText] = useState(propGoal);
    const [isModifying, setIsModifying] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        onMod(propId, modifiedText);
        setIsModifying(false);
    };
    const handleModifyClick = () => {
        setIsModifying((prevIsModifying) => !prevIsModifying);
    };
    return (_jsx(_Fragment, { children: _jsx(Card, { className: "border-bottom shadow p-3 mb-5 bg-white rounded", id: propId, style: { width: '18rem' }, children: _jsxs(Card.Body, { children: [_jsx(Card.Title, { children: propGoal }), isModifying && (_jsxs(Form, { onSubmit: handleSubmit, children: [_jsxs(Form.Group, { className: "mb-3", controlId: "exampleForm.ControlInput1", children: [_jsx(Form.Label, { children: "Modify the goal:" }), _jsx(Form.Control, { type: "text", placeholder: "Weight lifting", value: modifiedText, onChange: (e) => setModifiedText(e.target.value) })] }), _jsx(Button, { variant: "primary", type: "submit", children: "Save" })] })), _jsx(Card.Text, { children: "Here is some progress so far" }), _jsx(Button, { className: 'm-2', variant: "danger", onClick: () => oneDelete(propId), children: "Delete" }), _jsx(Button, { variant: "secondary", onClick: handleModifyClick, children: "Modify" })] }) }) }));
};
