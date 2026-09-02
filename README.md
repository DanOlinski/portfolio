## About
### This app is a static web page, meant to showcase a product or a portfolio. 

- Features
    - User friendly and intuitive front end
    - Visually appealing in any device
    - Well commented code for easy customization
    - User can send e-mails to the admin of the website
    - Easy to deploy. Check below for instructions on how to deploy website for free from a github account 

## Deploy to github
- If there is a site already deployed on your github, go to settings/pages and remove the deployed website (for a free github user, you are only allowed to have 1 website deployed)(you can skip this step and deploy a site erasing the existing one). 
- For your app to work on github, the react project must be in the root directory of the repository folder
- Go into your `package.json` file 
    - At the very top add the following: "homepage": "http://<github username>.github.io/<reporitory name>"
    - Here is an example: "homepage": "http://DanOlinski.github.io/portfolio"
    - The link above will be the domain where your website can be viewed 
- Install the gh-pages dependency: `npm install gh-pages`
- Go into your `package.json` file, under the "scripts" section place the command below
    - "predeploy": "npm run build",
    - "deploy": "gh-pages -d build"

- The next steps will be different if you are deploying the website from WLS or Linux machine:
    - for Linux machiene;
        - Make sure you are on master branch (make sure master branch) 
        - Push all of your code to the GitHub repository
        - From the terminal run the command `npm run deploy`

    - For WSL machine:
        -I'm not sure but I think the process below is for when you are working on gh-pages branch
        - npm run deploy doesn't work here
        - make sure you are on gh-pages branch (run; `git branch` to check)
        - make sure that you repo is deploying the website from gh-pages branch (go to gitHub website / your repository / settings / pages. There you can set the branch from where your website will be deployed)
        - run the command `npm run build`
        - coppy build files to your online repo; `Copy-Item -Path build/* -Destination . -Recurse -Force`
        - upload the branch changes to your repo; `git add . --ignore-errors` then `git commit -m "Update site"` then `git push origin gh-pages --force`
        - these steps are automated in the file `deploy.ps1` to run this file run the code; `.\deploy.ps1`
after the command runs, wait a bit for the changes to be applied to github and subsequently to view your live website.


## Available Scripts

In the project directory, you can run:

### `npm start`
- If you are using WLS it is advised to run any react app using the shell terminal, otherwise you may run into some serious lag while running the react app. Also whenever you change a feature in you app the changes may not be able to visualize in your localhost unless you add some extra code to your `package.json` file or restar the react server at every change.
- Make sure you are using Node version 16
- Open [http://localhost:3000] to view the app in your browser.

...
