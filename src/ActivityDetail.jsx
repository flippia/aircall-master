import './css/ActivityDetail.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const ActivityDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://aircall-job.herokuapp.com/activities/' + id)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, []);


    return (
        <div className="activity-detail">
            {data ?
                <div>
                    <h2>From {data.from}</h2>
                    <h2>To {data.to}</h2>
                    <p>via {data.via}</p>
                    <p>at {data.created_at}</p>
                    <p><span>{data.call_type}</span></p>                    
                </div>
                : <div>Trying to access the data...</div>
            }
        </div>
    );
}

export default ActivityDetail;