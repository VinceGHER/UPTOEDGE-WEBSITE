import React from 'react';

type Props = {
  classString?:string,
  _onChange:Function,
  current:"en"|"fr",
}

function SegmentedControl(props:Props) {
  return (
      <ul className={"nav nav-pills segmentBackground"+props.classString} id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button onClick={() =>props._onChange("fr")} className={"nav-link "+(props.current=="fr" ? "active":"")+" fw-bold "} aria-controls="pills-home" aria-selected="true">Fr</button>
            </li>
            <li className="nav-item" role="presentation">
              <button onClick={() =>props._onChange("en")} className={"nav-link "+(props.current=="en" ? "active":"")+" fw-bold"} aria-controls="pills-profile" aria-selected="false">En</button>
            </li>
        </ul>
  );
}

export default SegmentedControl;
