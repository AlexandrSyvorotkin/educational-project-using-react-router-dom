import React from 'react';
import {Route, useParams} from "react-router-dom";
import Comments from "../comments/Comments";

const QouteDetail = () => {

    const params = useParams()

    return (
        <>
            <h1>
                Qoute Detail Page
            </h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </>
    );
};

export default QouteDetail;