import React from "react";
import Modal from "react-modal/lib/components/Modal";
import classes from "./ArtItemDetailed.module.css";

function ArtItemDetailed({
  name,
  creditLine,
  displayBio,
  medium,
  department,
  repository,
}) {
  return (
    <div className={classes.artItemDetailedPage}>
      <Modal
        isOpen={true}
        ariaHideApp={false}
        className={classes.artItemModalBck}
        style={{
          overlay: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(28, 28, 28, 0.9)",
          },
        }}
      >
        <img
          src="/images/close.svg"
          alt=""
          height="28px"
          width="28px"
          className={classes.closeImg}
        ></img>

        <div className={classes.artItemPage}>
          <img
            src="/images/smokingSkull.PNG"
            alt=""
            className={classes.artItemPic}
          />
          <div className={classes.artItemDetails}>
            <div className={classes.artItemitle}>
              <p>{name || "Name of the painting"}</p>
            </div>
            <div className={classes.creditLine}>
              <p>{"Credit Line"}</p>
              <span>{name || "Gift or Mr. and Ms..."}</span>
            </div>
            <div className={classes.displayBio}>
              {" "}
              <p>{""}</p>
              <span>
                {displayBio || "Dutch, Zundert 1853–1890 Auvers-sur-Oise"}
              </span>
            </div>
            <div className={classes.medium}>
              <p>{"Medium"}</p>
              <span>{medium || "Oil on canvas"}</span>
            </div>
            <div className={classes.department}>
              {" "}
              <p>{"Department"}</p>
              <span>{department || "European Paintings"}</span>
            </div>
            <div className={classes.repository}>
              {" "}
              <p>{"Repository"}</p>
              <span>
                {repository || "Metropolitan Museun of Art, New Yourk, NY"}
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ArtItemDetailed;
