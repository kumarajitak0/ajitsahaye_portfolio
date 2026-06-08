// import React from "react";
// import "./WorkExp.css";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { SiPaloaltosoftware } from "react-icons/si";
// import { GrCloudSoftware } from "react-icons/gr";

// const WorkExp = () => {
//   return (
//     <>
//       <div className="work">
//         <div className=" contaner work-exp" id="workexp">
//           <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
//             Work Experience
//           </h2>
//           <hr />
//           <VerticalTimeline lineColor="#1e1e2c">
//             <VerticalTimelineElement
//               className="vertical-timeline-element--work"
//               contentStyle={{ background: "#BFC9CA", color: "#1e1e2c" }}
//               contentArrowStyle={{ borderRight: "7px solid  white" }}
//               date="Oct/2022 - Apr/2023"
//               dateClassName="work1datecolor"
//               iconStyle={{ background: "#138782", color: "#fff" }}
//               icon={<SiPaloaltosoftware />}
//             >
//               <h3 className="vertical-timeline-element-title">
//                 Software Engineer
//               </h3>
//               <h4 className="vertical-timeline-element-subtitle">
//                 Maruti suzuki,gurgaon,India
//               </h4>
//               <p>
//                 Worked as software
//                 engineer,bug-fixing,troubleshooting,documentation.
//               </p>
//             </VerticalTimelineElement>

//             <VerticalTimelineElement
//               className="vertical-timeline-element--work"
//               contentStyle={{ background: "#BFC9CA", color: "#1e1e2c" }}
//               contentArrowStyle={{ borderRight: "7px solid  white" }}
//               date="May/2023- Dec/2024"
//               dateClassName="work2datecolor"
//               iconStyle={{ background: "#138781", color: "#fff" }}
//               icon={<GrCloudSoftware />}
//             >
//               <h3 className="vertical-timeline-element-title">
//                 Software Engineer
//               </h3>
//               <h4 className="vertical-timeline-element-subtitle">
//                 Braincast Neurotechnology
//               </h4>
//               <p>
//                 Developed a nextcloud app using AWS,nginx, ubuntu. Also hosted
//                 and deployed fullstack reactapp to AWS cloud.
//               </p>
//             </VerticalTimelineElement>
//           </VerticalTimeline>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorkExp;

import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdSecurity } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { SiPaloaltosoftware } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      {" "}
      <div className="work">
        {" "}
        <div className="container work-exp" id="workexp">
          {" "}
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Professional Experience{" "}
          </h2>{" "}
          <hr />
          ```
          <VerticalTimeline lineColor="#1e1e2c">
            {/* Payment Security & Fraud Ops */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#BFC9CA", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="Oct 2023 - Dec 2024"
              dateClassName="work1datecolor"
              iconStyle={{ background: "#138782", color: "#fff" }}
              icon={<MdSecurity />}
            >
              <h3 className="vertical-timeline-element-title">
                Production Support Analyst – Payment Security & Fraud Operations
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                WIT (Remote)
              </h4>

              <li>
                Monitored IBM Safer Payments platforms using Splunk Enterprise
                and Grafana dashboards supporting high-volume transaction
                processing.
              </li>

              <li>
                Investigated production incidents including authorizer timeouts,
                application disconnects, latency spikes, and platform
                performance issues.
              </li>

              <li>
                Analyzed logs, system metrics, and security events to identify
                service degradation and operational risks.
              </li>

              <li>
                Supported go-live activities, platform monitoring, failover
                validation, and incident response across high-availability
                environments.
              </li>

              <li>
                Created troubleshooting runbooks, operational procedures, and
                monitoring documentation to improve response consistency.
              </li>
            </VerticalTimelineElement>

            {/* Cloud Security */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#BFC9CA", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="May 2023 - Sep 2023"
              dateClassName="work2datecolor"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrCloudSoftware />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer – Cloud Security
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                Braincast Neurotechnology
              </h4>

              <li>
                Managed AWS IAM, EC2, VPC, CloudTrail, and CloudWatch services
                across cloud environments.
              </li>

              <li>
                Implemented least-privilege access controls, security
                monitoring, and cloud security best practices.
              </li>

              <li>
                Built Python automation for log analysis, anomaly detection, and
                operational monitoring.
              </li>
            </VerticalTimelineElement>

            {/* Secure SDLC */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#BFC9CA", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="Oct 2022 - Apr 2023"
              dateClassName="work3datecolor"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<SiPaloaltosoftware />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer – Secure SDLC
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                Maruti Suzuki India Limited | Gurgaon, India
              </h4>

              <li>
                Implemented RBAC, input validation, and secure data handling
                controls within internal applications.
              </li>

              <li>
                Supported application security reviews, secure coding practices,
                and CI/CD testing activities.
              </li>

              <li>
                Developed audit and compliance workflows while maintaining
                technical documentation and security procedures.
              </li>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
