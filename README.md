
<p align="center">
    <img src="http://code-resume.herokuapp.com/icons/icon.png" width="200">
</p>

**🔥Build your own codefolio in seconds.**

# code-resume

> Create your own offline-first resume by using code-resume.

## Demo

https://techiezee.netlify.app/

## Features

* **Offline-first**

* **Theme support Dark & Light mode**

* **Export PDF**
  
* **Easy Customization**

* **Responsive for all devices**


## Preview 

**Iphone-**
<p align="center">
    <img aligh="left" src="http://code-resume.herokuapp.com/preview/iphone-dark.png" alt="iphone-dark"/>
    <img aligh="right" src="http://code-resume.herokuapp.com/preview/iphone-light.png" alt="iphone-dark"/>
</p>

**Ipad-**
<p align="center">
    <img src="http://code-resume.herokuapp.com/preview/ipad-dark.png" alt="ipad-dark"/>
</p>
<p align="center">
    <img src="http://code-resume.herokuapp.com/preview/ipad-light.png" alt="ipad-light"/>
 </p>   

**PWA-**

<p align="center">
    <img aligh="left" src="http://code-resume.herokuapp.com/preview/pwa-app.png" alt="pwa-preview"/>
</p>
 

## Quick start

**Clone This repo using:**

<pre>git clone --depth=1 https://github.com/zaidizeeshan/codefolio.git <YOUR_PROJECT_NAME></pre>

Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.

**Install:**

<pre>yarn install</pre>

**Run:**

<pre>yarn start-dev</pre>

**Build:**

<pre>yarn build</pre>

## Customization

For Adding your resume details:-

<pre>cd data</pre>

Then open **index.js** & change details

**Title**

```
export const Title = 'Zeeshan Zaidi ~ DevOps Engineer';
```
**Resume Details**

```
export const Resume = {
    intoduction: `{
        Add your intoduction
    }`,

    experience: `{
        Add your experience
    }`,

    skills: `{
        Add your skills
    }`

}
```

**Social Links**

```
    resume: '/resume.pdf',
    linkedin: 'https://www.linkedin.com/in/zaidizeeshan/',
    twitter: 'https://twitter.com/techie_zeeshan',
    github: 'https://github.com/zaidizeeshan'
```

**Deploy:**

```
<pre>login to netlify.com</pre>
<pre>click on "New site from Git"</pre>
<pre>authorize to github account</pre>
<pre>select the repo and branch</pre>
<pre>publish directory should be "build/"</pre>
```
**Update:**

```
<pre>update your info in files and save</pre>
<pre>yarn build<</pre>
<pre>git add .</pre>
<pre>git commit -m "commit info"</pre>
<pre>git push</pre>
<pre>enter git credential</pre>
```

Ref: 'https://github.com/amitmishrg/code-resume',
Note: Netlify does not support ci/cd for webpack applications till the date',


## License

This project is licensed under the [MIT](LICENSE) license.


