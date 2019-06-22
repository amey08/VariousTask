import React, { Component } from "react";

class PyramidComponent extends Component {
  constructor() {
    super();
    this.value = 5;
    this.updatedArray = [];
    this.upmiddleValues = [];
    this.middlePosition = Math.round((this.value * 2) / 2 - 1);
  }
  componentWillMount() {
    let up = new Promise((resolve, reject) => {
      console.log("inside Promise");
      resolve("Success!");
    })
      .then(() => {
        this.middleValue();
      })
      .then(() => {
        this.setInitialData();
      })
      .then(() => {
        this.updateTree();
      })
      .catch(() => {
        console.log("inside catch");
      });
  }
  setInitialData() {
    for (var i = 0; i < this.value; i++) {
      let updateVar = [];
      for (var j = 0; j < this.value * 2 - 1; j++) {
        if (this.middlePosition === j) {
          updateVar.push(this.upmiddleValues[i]);
        } else updateVar.push("");
      }
      this.updatedArray.push(updateVar);
    }
  }
  middleValue() {
    for (var i = 0; i < this.value * 2; i++) {
      if (i % 2 !== 0) {
        this.upmiddleValues.push(i);
      }
    }
  }
  updateTree() {
    // this.updateOddNumber();
    console.log(this.middlePosition);
    for (var i = 0; i < this.updatedArray.length; i++) {
      // row
      this.updateOddNumber(this.updatedArray[i], i);
      console.log(this.updatedArray[i].join(" "));
    }
    console.log(this.updatedArray);
  }
  updateOddNumber(_arrData, row) {
    for (var j = 0; j <= _arrData.length; j++) {
      //column
      for (
        var k = this.middlePosition + 1;
        k <= this.middlePosition + row;
        k++
      ) {
        _arrData[k] = _arrData[k - 1] - 1;
        _arrData[this.middlePosition - (k - this.middlePosition)] =
          _arrData[k - 1] - 1;
      }

      // for (
      //   var m = this.middlePosition - 1;
      //   m >= this.middlePosition - row;
      //   m--
      // ) {
      //   _arrData[m] = _arrData[m + 1] - 1;
      // }
    }
  }
  render() {
    return (
      <div>
        <h1>From Pyramid Component</h1>
      </div>
    );
  }
}
export default PyramidComponent;
