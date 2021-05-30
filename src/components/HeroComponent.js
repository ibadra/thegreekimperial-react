import React from 'react';
import { Carousel } from 'reactstrap';

function Hero ({heroContent}) {
    return(
        <div className="heroBlock">
            Hero Component Goes Here
            {/* <Carousel>
                {heroContent.map((item) => {
                    return (
                        <div key={item.id} style={{ backgroundImage: `URL(${item.media})` }} className="container-fluid">
                            Hello
                        </div>
                    );
                })}
            </Carousel> */}
        </div>
    );

}

export default Hero;