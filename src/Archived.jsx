import React from "react";
import './css/Archived.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Archived = () => {
    const [data, setData] = useState(null);
    const [dataSent, setDataSent] = useState(0)

    const unArchiveHandler = e => {
        e.preventDefault();
        console.log(e.target.id)
        const update = { is_archived: false }

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
        <div className="archived">
            {data ?
                <div className="calls-displayed">
                    {data.filter(call => call.is_archived).map(oneData => (
                        <Link to={`/${oneData.id}`} className="one-call" key={oneData.id}>
                            <div className="first-line" >{oneData.from} <button id={oneData.id} onClick={unArchiveHandler}>Unarchive</button></div>
                            <div>{new Date(oneData.created_at).toLocaleString('en-US')}</div>
                        </Link>
                    ))}
                </div> :
                <div>Trying to access the data...</div>
            }
        </div>
    );
}

export default Archived;