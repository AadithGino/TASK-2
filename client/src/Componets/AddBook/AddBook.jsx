import axios from "axios";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import  { useNavigate } from 'react-router-dom'
import TopBar from "../TopBar/TopBar";


function AddBook() {
  const navigate = useNavigate()
  const [image, setImage] = useState(false);
  const [fileName, setFileName] = useState();
  const [typeerror, settypeerror] = useState(false);
  const [size, setSize] = useState();
  const [type, setType] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const upload = () => {
    if(image){
      setLoading(true);
    console.log("HI");
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "noteapp");
    data.append("cloud_name", "dhajqatgt");
    fetch("https://api.cloudinary.com/v1_1/dhajqatgt/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImage(data.url);

        axios
          .post("http://localhost:5000/add-book", {
            image: data.url,
            type,
            size,
            fileName,
          })
          .then((data) => {
            console.log(data);
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
              setImage(false)
            }, 3000);
          })
          .catch((err) => {
            setLoading(false);
            setUploadError(err.response.data);
            setTimeout(() => {
              setUploadError(false);
              setImage(false)
            }, 3000);
          });
      });
    }
  };
  return (
    <div className="">
<TopBar/>
<h1>ADD BOOK</h1>
<br />
      <button >ADD BOOK</button>
      <br />
      <br />
      <button onClick={()=>navigate('/add-journal')}>ADD JOURNAL</button>
      <br />
      <br />
      {typeerror ? (
        <Alert key={"danger"} variant={"danger"}>
          Only Upload PNG/JPG
        </Alert>
      ) : (
        ""
      )}



{image ? (
        ''
      ) : (
        <Alert key={"warning"} variant={"warning"}>
       select image
      </Alert>
      )}

      

      {success ? (
        <Alert key={"success"} variant={"success"}>
          Book added successFully
        </Alert>
      ) : (
        ""
      )}

{uploadError ? (
        <Alert key={"danger"} variant={"danger"}>
          {uploadError}
        </Alert>
      ) : (
        ""
      )}
      <input
        onChange={(e) => {
          console.log(e.target.files[0].type);
          setType(e.target.files[0].type);
          if (
            e.target.files[0].type == "image/jpeg" ||
            e.target.files[0].type == "image/png"
          ) {
            setImage(e.target.files[0]);
            console.log("PK");
            setFileName(e.target.files[0].name);
            setSize(e.target.files[0].size);
            settypeerror(false);
          } else {
            settypeerror(true);
            setImage(false)
            console.log("ERROr");
          }
        }}
        type="file"
        name=""
        id=""
      />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
       image?<button  onClick={() => upload()}>UPLOAD</button>:<button disabled>UPLOAD</button>
      )}
    </div>
  );
}

export default AddBook;
