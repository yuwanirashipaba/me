import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const profile = {"data":{"user":{"name":"Yuwani Rashipaba ","bio":"I'm University Student","avatarUrl":"https://avatars.githubusercontent.com/u/134301383?u=1ed8809d372af26d92112558e3782bb721d6e552&v=4","location":null,"pinnedItems":{"totalCount":4,"edges":[{"node":{"name":"PAF-Frontend","description":null,"forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/yuwanirashipaba/PAF-Frontend","id":"R_kgDOOsJ1aw","diskUsage":5254,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a"}}},{"node":{"name":"ITPM-Group-Project","description":null,"forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/yuwanirashipaba/ITPM-Group-Project","id":"R_kgDOOvqqWQ","diskUsage":9011,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a"}}},{"node":{"name":"taskmanger_app","description":null,"forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/yuwanirashipaba/taskmanger_app","id":"R_kgDOL6YIkg","diskUsage":103,"primaryLanguage":{"name":"Kotlin","color":"#A97BFF"}}},{"node":{"name":"FarmLink","description":"ITP Project ","forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/yuwanirashipaba/FarmLink","id":"R_kgDOOvuz4w","diskUsage":39709,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a"}}}]}}}}

  const [repo, setrepo] = useState(profile.data.user.pinnedItems.edges);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);
  
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
