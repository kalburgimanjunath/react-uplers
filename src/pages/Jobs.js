import React, { useState, useEffect } from 'react';
import { Searchbox } from '../components/';
const JobList = ({ jobs }) => {
  return (
    jobs &&
    jobs.map((item) => {
      return (
        <div className="jobcard">
          <div>{item.title}</div>
          <div>{item.title}</div>
        </div>
      );
    })
  );
};
export default function Jobs() {
  const joblist = [
    { id: 1, title: 'java developer' },
    { id: 2, title: '.net developer' },
    { id: 3, title: 'c# developer' },
  ];
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('hello world');
  useEffect(() => {}, [jobs, search]);
  return (
    <main class="page-content">
      <div className="container-fluid">
        <h2>Jobs</h2>
        <hr />
        <Searchbox value={search} onChange={(e) => setSearch(e)} />
        Searched:{search}
        <div>Count: Opportunities</div>
        <JobList jobs={joblist} />
      </div>
    </main>
  );
}
