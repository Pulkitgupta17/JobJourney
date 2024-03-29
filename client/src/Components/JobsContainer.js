import { useAppContext } from "../Context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    getAllJobs,
    jobs,
    isLoading,
    page,
    numOfPages,
    totalJobs,
    search,
    searchCompany,
    searchStatus,
    searchType,
    sort,
  } = useAppContext();
  useEffect(() => {
    getAllJobs();
    // eslint-disable-next-line
  }, [page, search, searchCompany, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center="center" />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
