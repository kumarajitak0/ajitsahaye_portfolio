import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#BFC9CA", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2025 - Present"
            dateClassName="colzdatecolor"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              MSC Cybersecurity
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Washington University of Science and Technology
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#BFC9CA", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2018-2022"
            dateClassName="twelvedatecolor"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BTECH-CSE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Jawaharlal Nehru Technological University, India
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
