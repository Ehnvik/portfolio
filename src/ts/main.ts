import axios from "axios";
import { IRepo } from "./models/IRepo";
import { Repo } from "./models/Repo";

axios
  .get<IRepo[]>("https://api.github.com/users/ehnvik/repos")
  .then((response) => {
    let newRepoList: Repo[] = response.data.map((repos: IRepo) => {
      return new Repo(
        repos.name,
        repos.clone_url,
        repos.description,
        repos.created_at,
        repos.topics
      );
    });
    printRepos(newRepoList);
  });

function printRepos(repoList: Repo[]): void {
  let container = document.getElementById("container") as HTMLDivElement;
  container.classList.add("container");
  repoList.forEach((myRepo: Repo) => {
    if (myRepo.repoDescription != null) {
      let newDate = new Date(myRepo.repoDate);
      let newRepoDate = newDate.toLocaleDateString();
      let repoBox: HTMLDivElement = document.createElement("div");
      let repoName: HTMLHeadingElement = document.createElement("h3");
      let repoDate: HTMLParagraphElement = document.createElement("p");
      let repoDescription: HTMLParagraphElement = document.createElement("p");
      let repoTopics: HTMLHeadingElement = document.createElement("h4");
      let repoGithubLink: HTMLAnchorElement = document.createElement("a");

      repoName.innerHTML = myRepo.repoName;
      repoDate.innerHTML = newRepoDate;
      repoDescription.innerHTML = myRepo.repoDescription;
      repoGithubLink.href = myRepo.repoLink;
      repoGithubLink.innerHTML = `<i class="fa-brands fa-github"></i> Hämta projekt`;
      repoGithubLink.setAttribute("target", "blank");

      repoBox.classList.add("container__repo-box");
      repoName.classList.add("container__repo-box__title");
      repoDate.classList.add("container__repo-box__date");
      repoDescription.classList.add("container__repo-box__description");
      repoTopics.classList.add("container__repo-box__topics");
      repoGithubLink.classList.add("container__repo-box__link");

      myRepo.repoTopics.forEach((topic: string) => {
        repoTopics.innerHTML += " " + topic;
      });

      container?.appendChild(repoBox);
      repoBox.appendChild(repoName);
      repoBox.appendChild(repoDate);
      repoBox.appendChild(repoDescription);
      repoBox.appendChild(repoTopics);
      repoBox.appendChild(repoGithubLink);
    }
  });
}
