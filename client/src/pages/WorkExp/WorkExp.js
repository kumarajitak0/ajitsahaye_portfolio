import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiPaloaltosoftware } from "react-icons/si";
import { GrCloudSoftware } from "react-icons/gr";

const WorkExp = () => {
  return (
    <>
      <div className="work">
        <div className=" contaner work-exp" id="workexp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#BFC9CA", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Oct/2022 - Apr/2023"
              dateClassName="work1datecolor"
              iconStyle={{ background: "#138782", color: "#fff" }}
              icon={<SiPaloaltosoftware />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Maruti suzuki,gurgaon,India
              </h4>
              <p>
                Worked as software
                engineer,bug-fixing,troubleshooting,documentation.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#BFC9CA", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="May/2023- Dec/2024"
              dateClassName="work2datecolor"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrCloudSoftware />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Braincast Neurotechnology
              </h4>
              <p>
                Developed a nextcloud app using AWS,nginx, ubuntu. Also hosted
                and deployed fullstack reactapp to AWS cloud.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
