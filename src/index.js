import React from "react";
import ReactDOM from "react-dom";
import GenerateArray from "./generate-array";
import GetPair from "./get-pair";
import GenerateWorkedTogether from "./generate-worked-together";

let fileReader;
let res = [];

const handleFileRead = () => {
  var content = fileReader.result;
  res = GenerateArray(content);
  res = GenerateWorkedTogether(res);
  var mostTimeWorkedTogether = GetPair(res);

  ReactDOM.render(
    <div>
      <table>
        <thead>
          <tr>
            <th>Employee ID #1</th>
            <th>Employee ID #2</th>
            <th>Project ID</th>
            <th>Days worked</th>
          </tr>
        </thead>
        <tbody>
        {res.map((current, index) => (
          <React.Fragment>
            <tr>
              <td>{current[0]}</td>
              <td>{current[1]}</td>
              <td>{current[2]}</td>
              <td>{current[3]}</td>
            </tr>
          </React.Fragment>
        ))}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <p>Employees {mostTimeWorkedTogether[0]} and {mostTimeWorkedTogether[1]} have worked together the most with a total of {mostTimeWorkedTogether[2]} days.</p>
    </div>
    , document.getElementById("root"));
};

const handleFileChosen = (file) => {
  fileReader = new FileReader();
  fileReader.onloadend = handleFileRead;
  fileReader.readAsText(file);
};

ReactDOM.render(
  <div>
    <input type='file' id='file' accept='.txt' onChange={e => handleFileChosen(e.target.files[0])} />
  </div>
  , document.getElementById("root"));
