import React, { Fragment, useState } from 'react';

const Carousel = ( { shazamApiDetails } ) => {

    return (
        <Fragment>
            <div className="container">
                <div className="carouselImages">
                    {carouselImages}
                </div>
            </div>
        </Fragment>
    )
}

export default Carousel;