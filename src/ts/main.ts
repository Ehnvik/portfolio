import axios from "axios";
import { IRepo } from "./models/IRepo";
import { Repo } from "./models/Repo";

axios.get("https://api.github.com/users/ehnvik/repos").then((response) => {
  let newRepoList: Repo[] = response.data.map((repos: IRepo) => {
    return new Repo(
      repos.name,
      repos.clone_url,
      repos.language,
      repos.created_at
    );
  });
  printRepos(newRepoList);
});

let repoList: Repo[] = [];

function printRepos(repo: Repo[]): void {
  repoList.push(repo[1]);
  repoList.push(repo[7]);
  repoList.push(repo[20]);
  repoList.push(repo[22]);

  let container = document.getElementById("container") as HTMLDivElement;
  container.classList.add("container");

  repoList.forEach((myRepo: Repo) => {
    console.log(myRepo);
    let repoBox: HTMLDivElement = document.createElement("div");
    let repoName: HTMLHeadingElement = document.createElement("h3");
    let repoDate: HTMLParagraphElement = document.createElement("p");
    let repoLanguage: HTMLParagraphElement = document.createElement("p");
    let repoGithubLink: HTMLAnchorElement = document.createElement("a");

    repoName.innerHTML = myRepo.repoName;
    repoDate.innerHTML = myRepo.repoDate;
    repoLanguage.innerHTML = myRepo.repoLanguage;
    repoGithubLink.href = myRepo.repoLink;
    repoGithubLink.innerHTML = `Länk till Projekt: ${myRepo.repoName}`;

    repoBox.classList.add("container__repo-box");
    repoName.classList.add("container__repo-box__title");

    container?.appendChild(repoBox);
    repoBox.appendChild(repoName);
    repoBox.appendChild(repoDate);
    repoBox.appendChild(repoLanguage);
    repoBox.appendChild(repoGithubLink);
  });
}
