import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import TopBar from "../TopBar/TopBar";

function ViewBooks() {
  const [books, setBooks] = useState([]);
  const [journals, setJournals] = useState([]);
  const [view, setView] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/get-books").then((data) => {
      console.log(data);
      setBooks(data.data);
    });

    axios.get("http://localhost:5000/get-journals").then((data) => {
      console.log(data);
      setJournals(data.data);
    });
  }, []);
  return (
    <div>
      <TopBar/>
      <button onClick={() => setView(false)}>Book</button>
      <br />
      <br />
      <button onClick={() => setView(true)}>Journal</button>

      <h2>{view?'JOURANL DATA':'BOOK DATA'}</h2>
      {view ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Name</th>
              <th>Size</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {journals
              ? journals.map((data, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <img
                          src={data.journal}
                          className="avatar"
                          style={{ height: "100px", width: "100px" }}
                          alt=""
                        />
                      </td>
                      <td>{data.name}</td>
                      <td>{data.size}</td>
                      <td>{data.type}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Name</th>
              <th>Size</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {books
              ? books.map((data, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <img
                          src={data.book}
                          className="avatar"
                          style={{ height: "100px", width: "100px" }}
                          alt=""
                        />
                      </td>
                      <td>{data.name}</td>
                      <td>{data.size}</td>
                      <td>{data.type}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default ViewBooks;
