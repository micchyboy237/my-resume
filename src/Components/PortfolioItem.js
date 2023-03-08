import React, { useState } from 'react';
import Modal from './Modal';

const PortfolioItem = ({ title, image, gif, ...props }) => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  const projectImage = 'images/portfolio/' + image;
  const projectGif = 'images/portfolio/' + gif;

  return (
    <div {...props}>
      <div className="item-wrap" onClick={handleClick}>
        <div className="img-container" style={{ textAlign: 'center' }}>
          <img alt={title} src={projectImage} />
        </div>
        <div style={{ textAlign: 'center' }}>{title}</div>
      </div>

      {showModal && (
        <Modal
          contentStyle={{
            maxWidth: 'fit-content',
            width: '100%'
          }}
          onClose={handleClose}
        >
          <div className="portfolio-content">
            <div
              style={{
                flex: 1,
                display: 'flex'
              }}
            >
              <img src={projectGif} alt="Full-size version of item" />
            </div>
            <button
              style={{
                marginBottom: 0
              }}
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PortfolioItem;
