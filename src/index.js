import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" time="Today at 5:00 PM" comment="bla as" avatar={faker.image.people()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" time="Today at 9:00 PM" comment="bla qwea aa" avatar={faker.image.people()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" time="Today at 2:00 PM" comment="blasadasda" avatar={faker.image.people()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
