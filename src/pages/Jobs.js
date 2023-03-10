import React, { useState, useEffect } from 'react';
import { Searchbox } from '../components/';
import { JOBLIST } from '../data/jobs';
const JobList = ({ jobs }) => {
  return (
    jobs &&
    jobs.map((item, index) => {
      return (
        <div className="jobcard" key={key}>
          <div>{item.title}</div>
          <div className="row">
            <div className="col-md-5">
              <h4>Roles & Responsibilities</h4>
              <div>{item.responsibility}</div>
            </div>
            <div className="col-md-5">
              <div>About The Company</div>
            </div>
          </div>
        </div>
      );
    })
  );
};
export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('hello world');
  useEffect(() => {}, [jobs, search]);
  return (
    <main className="page-content">
      <div className="container-fluid">
        <h2>Jobs</h2>
        <hr />
        <Searchbox value={search} onChange={(e) => setSearch(e)} />
        Searched:{search}
        <div>Count: Opportunities</div>
        <JobList jobs={JOBLIST} />
      </div>
    </main>
  );
}
