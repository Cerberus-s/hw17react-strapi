import React from 'react';
import PetForm from "../../container/form";
import {useParams} from "react-router";

const EditPage = () => {
    const {id} = useParams()
    return (
        <div>
            <PetForm/>
        </div>
    );
};

export default EditPage;