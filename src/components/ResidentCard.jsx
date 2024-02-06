import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const ResidentCard = ({url}) => {

    const [resident, getResident] = useFetch();

    useEffect(() => {
        getResident(url);
    }, []);

   console.log(resident)

    return (
        <articule>
            <figure>
                <img src={resident?.image} alt="resident image" />
            </figure>
        </articule>
    )
}

export default ResidentCard;