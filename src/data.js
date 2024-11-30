import yahoo_logo from "./asset/yahoo_logo.png"
import qct_logo from "./asset/qct_logo.png"
import retailingdata_logo from "./asset/retailingdata_logo.webp"
import linkedin_logo from "./asset/linkedin_icon.webp"
import github_logo from "./asset/github_icon.png"
import gmail_logo from "./asset/gmail_icon.png"
import resume_logo from "./asset/resume_icon.jpg"
import aics_logo from './asset/aics_logo.png'

const experience = [
    { src: aics_logo, title: "AICS Software Engineer", description: "Construct automation-test pipelines and develop front-end features.", time:"2023/09~now"},
    { src: yahoo_logo, title: "Search & Ads Intern", description: "Build a hot spot extraction system.", time:"2022/07~2022/08" },
    { src: qct_logo, title: "5G Jump Intern", description: "Construct an AI platform.", time:"2021/07~2021/11" },
    { src: retailingdata_logo, title: "Computer Vision Intern", description: "Refactor a smart selling system.", time:"2021/04~2021/09" }
]
const intro = "Po-Hsun Lin is a passionate software developer in ASUS AICS who has finished his EECS master program in NTU. In past summer vacation, he had joined Yahoo! and made contributions to the search team. He mainly focused on hot spot recommendation in the search result page. He applied nature language processing skills to analyze articles and extract popular spots. This saves time for the team who used to manually maintain hot spots every month. In other interns, Po-Hsun Lin gained the experience of running web application, including network configuration and data storage. Besides interns, he also enjoys competitions. He joined a contest hold by Deep01 about skull fracture detection in January 2022. He co-worked with his teammates well to test and analyze many machine learning algorithms.  Finally, their team won the first prize for their perseverance. Po-Hsun Lin is ready for any opportunity to make the world a better place."
const education = [
    ["Master", "Electrical Engineering, National Taiwan University", "2021~2023"],
    ["Bachelor", "Materials Science and Engineering, National Taiwan University", "2017~2021"]
]
const info = [
    [linkedin_logo, "https://www.linkedin.com/in/po-hsun-stanley-lin-02a312158/"],
    [github_logo, "https://github.com/tsukiyashirokisaki"],
    [gmail_logo, "mailto:bokuwa08201230@gmail.com"],
    [resume_logo, "https://drive.google.com/file/d/1d0XoDa4Qf72WzC6lpY1Prad8t1TL-OP4/view?usp=sharing"]
]

export { experience, intro, education, info};