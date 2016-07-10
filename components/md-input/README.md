# MD-INPUT

"Form-friendly" material design input elements.


## Installation

``` bash

bower install md-input --save

```

## Usage

``` html
<link rel="import" href="bower_components/sass-md-components/sass-md-components.html">
<link rel="import" href="bower_components/md-icons/md-icons.html">
<link rel="import" href="bower_components/md-input/md-input-all.html">

<form>
  <md-input data-id="input1" data-name="input1" label="Your Name"></md-input>
  <md-textarea label="Message" disable-resize="true" data-id="text1"></md-textarea>
  <md-radio-list>
     <md-radio label="Orange" css-class="concentric" data-name="fruits" data-value="Orange" data-id="Orange" data-checked="true"></md-radio>
     <md-radio label="Apple" data-name="fruits" data-value="Apple" data-id="Apple"></md-radio>
     <md-radio label="Banana" data-name="fruits" data-value="Banana" data-id="Banana"></md-radio>
  </md-radio-list>
  <md-checkbox data-id="check1" data-name="chkName" label="Save Entry" data-checked=true readonly="true"></md-checkbox>
  <md-switch data-id="switch1" data-name="switch" data-checked="true"></md-switch>
  <md-range data-id="range1" data-name="range" data-value="20"></md-range>
  <md-select data-id="select1" data-name="select1">
         <select>
            <option>Select Name</option>
            <option>Bob</option>
            <option>Steve</option>
            <option>Lisa</option>
         </select>
   </md-select>
</form>

```

## Individual Component References

``` html
<link rel="import" href="bower_components/md-input/md-input.html">
<link rel="import" href="bower_components/md-input/md-radio.html">
<link rel="import" href="bower_components/md-input/md-checkbox.html">
<link rel="import" href="bower_components/md-input/md-switch.html">
<link rel="import" href="bower_components/md-input/md-range.html">
<link rel="import" href="bower_components/md-input/md-select.html">
<link rel="import" href="bower_components/md-input/md-textarea.html">
<link rel="import" href="bower_components/md-input/md-input-icon-button.html">

```


## Demo

http://EllipticalElements.github.io/md-input

