import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const profile = {"data":{"user":{"name":"Yuwani Rashipaba ","bio":"I'm University Student","avatarUrl":"https://avatars.githubusercontent.com/u/134301383?u=1ed8809d372af26d92112558e3782bb721d6e552&v=4","location":null,"pinnedItems":{"totalCount":4,"edges":[{"node":{"name":"PAF-Frontend","description":null,"forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/yuwanirashipaba/PAF-Frontend","id":"R_kgDOOsJ1aw","diskUsage":5254,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a"}}},{"node":{"name":"ITPM-Group-Project","description":null,"forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/yuwanirashipaba/ITPM-Group-Project","id":"R_kgDOOvqqWQ","diskUsage":9011,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a"}}},{"node":{"name":"taskmanger_app","description":null,"forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/yuwanirashipaba/taskmanger_app","id":"R_kgDOL6YIkg","diskUsage":103,"primaryLanguage":{"name":"Kotlin","color":"#A97BFF"}}},{"node":{"name":"FarmLink","description":"ITP Project ","forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/yuwanirashipaba/FarmLink","id":"R_kgDOOvuz4w","diskUsage":39709,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a"}}}]}}}}
  const [prof, setrepo] = useState(profile.data.user);
  
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