import React from "react";
import axios from "axios";
import Modal from "react-modal/lib/components/Modal";
import classes from "./ArtItemDetailed.module.css";
import useHttp from "../Hooks/useHttp";
import { useNavigate, useParams } from "react-router-dom";

function ArtItemDetailed() {
  const params = useParams();
  const navigate = useNavigate();

  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${params.artItemID}`;
  console.log(params.artItemID);
  const { artItem } = useHttp(axios.get(url));

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
          onClick={() => navigate("/discover")}
        ></img>

        <div className={classes.artItemPage}>
          <img
            src={artItem.primaryImage}
            alt=""
            className={classes.artItemPic}
          />
          <div className={classes.artItemDetails}>
            <div className={classes.artItemitle}>
              <p>{artItem.title}</p>
            </div>
            <div className={classes.creditLine}>
              <p>{"Credit Line"}</p>
              <span>{artItem.creditLine}</span>
            </div>
            <div className={classes.displayBio}>
              {" "}
              <p>Display Bio</p>
              <span>{artItem.artistDisplayBio}</span>
            </div>
            <div className={classes.medium}>
              <p>{"Medium"}</p>
              <span>{artItem.medium}</span>
            </div>
            <div className={classes.department}>
              {" "}
              <p>{"Department"}</p>
              <span>{artItem.department}</span>
            </div>
            <div className={classes.repository}>
              {" "}
              <p>{"Repository"}</p>
              <span>{artItem.repository}</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ArtItemDetailed;
