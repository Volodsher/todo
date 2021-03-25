import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CFooter extends Component {

  render() {
    const {
      jobs,
      handleJobsToShow,
      jobsToShow,
      deleteAllCompleted
    } = this.props;
    const lengthOfJobs = () => [...jobs].filter(
      todo => todo.complete === false
    ).length;

    return (
      <footer className="footer" style={{ display: 'block' }}>
  
        <span className="todo-count">
          {`${lengthOfJobs()} items left`}
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => handleJobsToShow('all')}
              style={{
                borderColor:
                  jobsToShow === 'all'
                  ? 'rgba(175, 47, 47, 0.2)'
                  : '',
              }}
            >
              All
            </a>
          </li>
  
          <li>
            <a
              href="#/active"
              onClick={() => handleJobsToShow('active')}
              style={{
                borderColor:
                  jobsToShow === 'active'
                  ? 'rgba(175, 47, 47, 0.2)'
                  : '',
              }}
            >
              Active
            </a>
          </li>
  
          <li>
            <a
              href="#/completed"
              onClick={() => handleJobsToShow('complete')}
              style={{
                borderColor:
                  jobsToShow === 'complete'
                  ? 'rgba(175, 47, 47, 0.2)'
                  : '',
              }}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="clear-completed"
          style={{ display: 'block' }}
          onClick={() => deleteAllCompleted()}
        >
          Clear all completed
        </button>
      </footer>
    );
  }
}

CFooter.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  handleJobsToShow: PropTypes.func.isRequired,
  jobsToShow: PropTypes.string.isRequired,
  deleteAllCompleted: PropTypes.func.isRequired,
};
