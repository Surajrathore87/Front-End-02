import React from 'react';
import { Pannellum } from '@karianpour/pannellum-react';
import '@karianpour/pannellum-react/es/pannellum/css/pannellum.css';
import '@karianpour/pannellum-react/es/pannellum/css/style-textInfo.css';

function Image360(props) {
  const { images, projectImagePath } = props;
  return (
    <>
      <div className="row">
        {images &&
          images.map((item, key) => (
            <div className="col-lg-4" key={key}>
              <Pannellum
                width="100%"
                height="400px"
                // image={projectImagePath + item.image}
                image={item.img}
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
              ></Pannellum>
            </div>
          ))}
      </div>
    </>
  );
}

export default Image360;
