import React from 'react';
import "./segmentedControl.scss";
type Props = {
  classString?:string,
  _onChange:Function;
}

function SegmentedControl(props:Props={classString:"",_onChange:()=>{}}) {
  return (
      <ul className={"nav nav-pills segmentBackground"+props.classString} id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button onClick={() =>props._onChange("fr")} className="nav-link active " data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Fr</button>
            </li>
            <li className="nav-item" role="presentation">
              <button onClick={() =>props._onChange("en")} className="nav-link"data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">En</button>
            </li>
        </ul>
  );
}

export default SegmentedControl;
