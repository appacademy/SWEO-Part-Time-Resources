//!!START SILENT
import { useState, useEffect, useRef } from 'react';
//!!END
//!!ADD
// import React from 'react';
//!!END_ADD
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//!!START SILENT
function AutoComplete({ names }) {
  const [inputVal, setInputVal] = useState('');
  const [showList, setShowList] = useState(false);
  const inputRef = useRef(null);
//!!END
//!!ADD
// class AutoComplete extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = {
      // inputVal: '',
      // showList: false
    // };
    // this.inputRef = React.createRef();
  // }
//!!END_ADD

  //!!START SILENT
  useEffect (()=> {
    if (showList) 
      document.addEventListener('click', handleOutsideClick);
    // The clean-up function returned below makes this else-clause redundant
    // else {
    //   console.log("Removing Autocomplete listener on update!");
    //   document.removeEventListener('click', handleOutsideClick);
    // }
      
    return (() => {
      console.log("Cleaning up event listener from Autocomplete!");
      document.removeEventListener('click', handleOutsideClick)
    });
  }, [showList]);
  //!!END
  //!!ADD
  // componentDidUpdate() {
    // if (this.state.showList) {
      // document.addEventListener('click', this.handleOutsideClick);
    // } else {
      // console.log("Removing Autocomplete listener on update!");
      // document.removeEventListener('click', this.handleOutsideClick);
    // }
  // }

  // componentWillUnmount () {
    // console.log("Cleaning up event listener from Autocomplete!");
    // document.removeEventListener('click', this.handleOutsideClick);
  // }
  //!!END_ADD

  //!!START SILENT
  const handleInput = (e) => {
    setInputVal(e.target.value);
  //!!END
  //!!ADD
  // handleInput = (e) => {
    // this.setState({ inputVal: e.target.value });
  //!!END_ADD
  }

  //!!START SILENT
  const selectName = ({ target: { innerText: name }}) => {
    setInputVal(name);
    setShowList(false);
  //!!END
  //!!ADD
  // selectName = ({ target:  { innerText: name }}) => {
    // this.setState({ inputVal: name, showList: false });
  //!!END_ADD
  }

  // Set focus to input field if user clicks anywhere inside the Autocomplete
  // section (unless they have selected a name from the dropdown list)
  //!!START SILENT
  const handleAutocompleteSectionClick = ({ target }) => {
  //!!END
  //!!ADD
  // handleAutocompleteSectionClick = ({ target }) => {
  //!!END_ADD
    if (!target.classList.contains("nameLi")) {
      //!!START SILENT
      inputRef.current.focus();
      //!!END
      //!!ADD
      // this.inputRef.current.focus();
      //!!END_ADD
    }
  }

  //!!START SILENT
  const handleOutsideClick = () => {
  //!!END
  //!!ADD
  // handleOutsideClick = () => {
  //!!END_ADD
    // Leave dropdown visible as long as input is focused
    //!!START SILENT
    if (document.activeElement === inputRef.current) return;
    //!!END
    //!!ADD
    // if (document.activeElement === this.inputRef.current) return;
    //!!END_ADD
    //!!START SILENT
    else setShowList(false);
    //!!END
    //!!ADD
    // else this.setState({ showList: false });
    //!!END_ADD
  }

  //!!START SILENT
  const matches = () => {
  //!!END
  //!!ADD
  // matches = () => {
    // const { inputVal } = this.state;
    // const { names } = this.props;
  //!!END_ADD
    const inputLength = inputVal.length;
    const matches = [];

    if (inputLength === 0) return names;

    names.forEach(name => {
      const nameSegment = name.slice(0, inputLength);
      if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) matches.push('No matches');

    return matches;
  }

  //!!START SILENT
  const results = matches().map((result) => (
    <TransitionItem key={result} result={result} selectName={selectName} />
  ));
  //!!END
  //!!ADD
  // render() {
    // const results = this.matches().map((result) => {
      // const nodeRef = React.createRef();
      // return (
        // <CSSTransition
          // nodeRef={nodeRef}
          // key={result}
          // classNames="result"
          // timeout={{ enter: 500, exit: 300 }}
        // >
          // <li ref={nodeRef} className="nameLi" onClick={this.selectName}>
            // {result}
          // </li>
        // </CSSTransition>
      // )
    // });
  //!!END_ADD 

    return (
      <section 
        className="autocomplete-section" 
        //!!START SILENT
        onClick={handleAutocompleteSectionClick}
        //!!END
        //!!ADD
        // onClick={this.handleAutocompleteSectionClick}
        //!!END_ADD
      >
        <h1>Autocomplete</h1>
        <div className="auto">
          <input
            placeholder="Search..."
            //!!START SILENT
            ref={inputRef}
            onChange={handleInput}
            value={inputVal}
            onFocus={() => setShowList(true)}
            //!!END
            //!!ADD
            // ref={this.inputRef}
            // onChange={this.handleInput}
            // value={this.state.inputVal}
            // onFocus={() => this.setState({ showList: true })}
            //!!END_ADD
          />
          {/*!!ADD */}
          {/* {this.state.showList && ( */}
          {/*!!END_ADD */}
          {/*!!START SILENT */}
          {showList && (
          //!!END
            <ul className="auto-dropdown">
              <TransitionGroup>
                {results}
              </TransitionGroup>
            </ul>
          )}
        </div>
      </section>
    );
  //!!ADD
  // }
  //!!END_ADD
}
//!!START SILENT

const TransitionItem = ({ result, selectName, ...props }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames="result"
      timeout={{ enter: 500, exit: 300 }}
      {...props}
    >
      <li ref={nodeRef} className="nameLi" onClick={selectName}>{result}</li>
    </CSSTransition>
  );
}
//!!END

export default AutoComplete;
