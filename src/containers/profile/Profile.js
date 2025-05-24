import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        const query = `
          {
            user(login: "${openSource.githubUserName}") {
              name
              bio
              avatarUrl
              location
              pinnedItems(first: 10, types: REPOSITORY) {
                totalCount
                edges {
                  node {
                    {
                      name
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }`;

        fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openSource.githubToken}`
          },
          body: JSON.stringify({query})
        })
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            // Handle HTTP errors
            return result.text().then(text => {
              throw new Error(`GitHub API Error: ${result.status} ${result.statusText} - ${text}`);
            });
          })
          .then(response => {
            if (response.errors) {
              // Handle GraphQL errors
              throw new Error(`GraphQL Error: ${JSON.stringify(response.errors)}`);
            }
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
