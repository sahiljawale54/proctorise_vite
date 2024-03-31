import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { auth, app } from "../utils/firebase-config";
import "./css/Home2.css";
import TestPage from "./TestPage";

const Home2 = () => {
  const [user] = useAuthState(auth);
  const [hasStorageRef, setHasStorageRef] = useState(false);
  const [imageLink, setImageLink] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const storage = getStorage(app);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStorageRef = async () => {
      const image = user.photoURL;
      setProfilePhoto(image);
      const storageRef = ref(storage, `/images/${user.email}`);
      try {
        const imageLink = await getDownloadURL(storageRef);
        setHasStorageRef(true);
        setImageLink(imageLink);
      } catch (error) {
        setHasStorageRef(false);
      }
    };

    if (user) {
      checkStorageRef();
    }
  }, [user, storage]);

  const handleSystemCheck = () => {
    navigate("/systemcheck");
  };

  const handleDetectionCheck = () => {
    navigate("/detectioncheck");
  };

  const handleUploadPhoto = () => {
    navigate("/uploadimage");
  };

  const handleCreateTest = () => {
    navigate("/createtest");
  };

  const handleAttemptTest = () => {
    navigate("/attempttest");
  };

  const handleLogoutButton = async () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="mainCon">
      <nav className="navbar">
        <div className="logo-container">
          <img
            id="logo"
            src="https://cdn-icons-png.flaticon.com/128/8763/8763240.png"
            alt="logo"
          />
          <a className="navbar-brand">PROCTORISE</a>
        </div>
        <div className="btn-container">
  <button className="btn" onClick={handleSystemCheck}>
    System Check
  </button>
  <button className="btn" onClick={handleDetectionCheck}>
    Check Basic Detections
  </button>
  <button className="btn" onClick={handleUploadPhoto}>
    Upload Photo
  </button>
  <button className="btn" onClick={handleCreateTest}>
    Create Test
  </button>
  <button className="btn" onClick={handleAttemptTest}>
    Attempt Test
  </button>
  <button className="btn" onClick={handleLogoutButton}>
    Logout
  </button>
</div>

        <div className="user-profile">
          {profilePhoto && <img id="profPhoto" src={profilePhoto} />}
        </div>
      </nav>

      <div className="content-container">
        <div className="instruction-container">
          <h2>Instructions</h2>
          <ul className="instruction-lines">
            <li className="instructions">
              You must use a functioning webcam and microphone
            </li>
            <li className="instructions">
              No cell phones or other secondary devices in the room or test
              area
            </li>
            <li className="instructions">
              Your desk/table must be clear of any materials except your
              test-taking device
            </li>
            <li className="instructions">
              No one else can be in the room with you
            </li>
            <li className="instructions">No talking</li>
            <li className="instructions">
              The testing room must be well-lit and you must be clearly visible
            </li>
            <li className="instructions">No dual screens/monitors</li>
            <li className="instructions">Do not leave the camera</li>
          </ul>
        </div>

        <div className="image-container">
          {imageLink && (
            <img
              className="uploadedimg"
              src={imageLink}
              alt="No Photo Uploaded"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home2;
