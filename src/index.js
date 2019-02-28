import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Bootstrap, Grid, Row, Col } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>RKA's Notice Board</h1>
        <h2>A revolutionary Sticky Notes Web Application</h2>
      </div>
    );
  }
}

class EditDelButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  makeEditable() {
    document.getElementById("text").readOnly = false;
    document.getElementById("title").readOnly = false;
  }
  clear() {
    var note = document.getElementById("note");
    var SEDbuttons = document.getElementById("SEDbuttons");
    note.remove();
    SEDbuttons.remove();
  }

  render() {
    return (
      <div>
        <button type="button" id="EditButton" onClick={this.makeEditable}>
          Edit
        </button>
        <button type="button" id="DelButton" onClick={this.clear}>
          Delete
        </button>
      </div>
    );
  }
}

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange() {
    document.getElementById("text").readOnly = true;
    document.getElementById("title").readOnly = true;
    ReactDOM.render(<EditDelButtons />, document.getElementById("SEDbuttons"));
  }

  render() {
    return (
      <button type="button" id="SaveButton" onClick={this.handleChange}>
        Save
      </button>
    );
  }
}

class NoteArea extends React.Component {
  constructor(props) {
    super(props);
  }

  showSave() {
    ReactDOM.render(<SaveButton />, document.getElementById("SEDbuttons"));
  }

  render() {
    return (
      <div>
        <textarea id="title" defaultValue="Title" onChange={this.showSave} />
        <br />
        <textarea
          id="text"
          defaultValue="Enter text here..."
          onChange={this.showSave}
        />
      </div>
    );
  }
}
class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  createNote() {
    ReactDOM.render(<NoteArea />, document.getElementById("note"));
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.createNote}>
          {this.props.display}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Title />, document.getElementById("heading"));
ReactDOM.render(
  <Buttons display="Create New Note" />,
  document.getElementById("leftBlock")
);
