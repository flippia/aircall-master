import './css/ActivityFeed.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ActivityFeed = () => {
    const [data, setData] = useState(null);
    const [dataSent, setDataSent] = useState(0)

    const archiveHandler = e => {
        e.preventDefault();
        console.log(e.target.id)
        const update = { is_archived: true }

        fetch(`https://aircall-job.herokuapp.com/activities/${e.target.id}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(update)
        }).then(() => setDataSent(sent => sent + 1))
    }

    useEffect(() => {
        fetch('https://aircall-job.herokuapp.com/activities')
            .then(res => {
                return res.json();
            })
            .then(datas => {
                setData(datas);
            })
    }, [])

    useEffect(() => {
        fetch('https://aircall-job.herokuapp.com/activities')
            .then(res => {
                return res.json();
            })
            .then(datas => {
                setData(datas);
            })
    }, [dataSent])

    return (
        <div className="activity-feed">
            {data ?
                <div className="calls-displayed">
                    {data.filter(call => !call.is_archived).map(oneData => (
                        <Link to={`/${oneData.id}`} className="one-call" key={oneData.id}>
                            <div className="first-line" >From: {oneData.from} <button id={oneData.id} onClick={archiveHandler}>Archive</button></div>
                            <div>{new Date(oneData.created_at).toLocaleString('en-US')}</div>
                        </Link>
                    ))}
                </div> :
                <div>Trying to access the data...</div>
            }
        </div>
    );
}

export default ActivityFeed;
