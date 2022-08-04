import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

//Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  //request and loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  //error functionality
  const [error, setError] = useState({
    show: false,
    msg: '',
  });
  //check rate
  const checkRequests = () => {
    axios
      .get(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, 'sorry you have exceeded yur hourly rate!!!');
        }
      })
      .catch((err) => console.error(err));
  };

  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }
  const searchGithubUser = async (username) => {
    //toggleError to false for every new query
    //default value for the toggleError function will be implemented since no value is passed
    toggleError();
    //setIsLoading to true
    setIsLoading(true);
    const response = await axios
      .get(`${rootUrl}/users/${username}`)
      .catch((error) => console.log(error));
    if (response) {
      setGithubUser(response.data);
      const { repos_url, followers_url } = response.data;
      await Promise.allSettled([
        axios.get(`${repos_url}?per_page=100`),
        axios.get(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          const [repos, followers] = results;
          const status = 'fulfilled';
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      //toggle error if no user with the username exists
      toggleError(true, 'no user exists with that username');
    }
    //check number of request after everytime a user searches
    checkRequests();
    //setIsLoading to false after the user finishes searching
    setIsLoading(false);
  };
  //useEffect checks the first number of requests avaiable to the user
  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
