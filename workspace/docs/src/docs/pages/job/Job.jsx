import React, {useContext} from 'react';
import {useSearchParams} from "react-router-dom";
import {MyRouteContext} from "../../context/RouteContext";

const Job = () => {

  const [searchParams] = useSearchParams()
  const title = searchParams.get("job");
  
  const jobSkills = useContext(MyRouteContext)
  console.log(jobSkills[title]);

  const skillList = title && jobSkills[title].skills.map((skill, i) =>
    (
      <li key={i}>{skill}</li>
    )
  )

  // console.log( searchParams.get("job"));

  return (
    <div>
      <p>{title} 소개 페이지</p>
      <div>
        <ul>
          {skillList}
        </ul>
      </div>
    </div>
  );
};

export default Job;