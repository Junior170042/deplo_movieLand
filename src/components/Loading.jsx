import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <div className="row">
            <div className="col-sm-4">

                <Skeleton height={350} />
            </div>

            <div className="col-sm-4">

                <Skeleton height={350} />
            </div>
            <div className="col-sm-4">

                <Skeleton height={350} />
            </div>
        </div>
    )
}

export default Loading
