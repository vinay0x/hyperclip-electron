<p align="center"><img width=50.5% src="https://i.ibb.co/f4Yk797/Group-1.png"></p>

<div align="center">
  Helps your <code>Electron</code> apps take off quickly 🚀
  <br />
  <br />
  <p align="center">
    <img src="https://img.shields.io/badge/Electron-4.0.0.-74b1be.svg" />
    <img src="https://img.shields.io/badge/React-16.7.0-61dafb.svg" />
    <img src="https://img.shields.io/badge/Redux-4.0.1-7643c0.svg" />
    <img src="https://img.shields.io/badge/ReduxPersist-5.10.0-e74c3c.svg" />
    <img src="https://img.shields.io/badge/ReactRouter-4.3.1-d40000.svg" />
    <img src="https://img.shields.io/badge/Webpack-4.28.2-1670b4.svg" />
    <img src="https://img.shields.io/badge/Babel-7.2.2-f5da55.svg" />
  </p>
</div>
<br />

<h2>What is this thing?</h2>
ElectroJet is a set of easy-to-use, ready-to-go boilerplates for Electron!
  
<h2>Why do you need a boilerplate in the first place?</h2>
Everytime I was struck with an app idea, the thought of setting up frameworks and tooling made me feel very lazy. And I ended up procrastinating. A lot! So, ElectroJet. Electrojet gets my project up and running within one or two minutes!
                            
<h2>Why can't you be smart and choose from 100s of other boilerplates?</h2>
 Flexibility! I wanted to choose between the technologies I wanted. There are lots of boilerplates which pack a crazy ton of shit. Sometimes I wanted more than a boilerplate had to offer, sometimes less. Messing around to add/remove something was even crazier since most boilerplates are of different patterns.

<h2>How is this different?</h2>
Electrojet is not one but a set of boilerplates. It provides combinations which lets you choose what technologies you want bundled in your boilerplate.

<h2>So, what all stuff are there?</h2>

<a href="https://electronjs.org">Electron</a> and <a href="http://reactjs.org">React</a> are available by default in all boilerplates.<br>
<h4>Along with them, you can have: <br></h4>
<ul>
<li><a href="https://redux.js.org">Redux</a><br></li>
<li><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a><br></li>
<li><a href="https://github.com/supasate/connected-react-router">Connected React Router</a><br></li>
<li><a href="https://github.com/rt2zz/redux-persist">Redux Persist</a><br></li>
<li><a href="https://github.com/sindresorhus/electron-store">Electron Store</a><br></li>
</ul>

<h4>Build tools:<br></h4>
<ul>
<li><a href="https://webpack.js.org/">Webpack</a><br></li>
<li><a href="https://babeljs.io/">Babel</a><br></li>
</ul>

<h4>Other stuff<br></h4>
<ul>
<li><a href="https://eslint.org/">ESlint</a> based on <a href="https://standardjs.com/">Standard JS</a><br></li>
<li><a href="https://reactjs.org/docs/typechecking-with-proptypes.html">React PropTypes</a><br></li>
<li>Auto reloading main process with <a href="https://github.com/paulmillr/chokidar">Chokidar</a><br>
<li>Support for <a href="https://babeljs.io/docs/en/next/babel-plugin-proposal-decorators.html">Decorators</a></li>
</ul>

<h3>Alright. How do I use this?</h3>
<ul>
  <li>Refer the table below to figure out which branch you want.<br></li>
  <li>Clone the corresponding branch with git clone <br><code>git clone --single-branch --branch &lt;branchName&gt; https://github.com/vinaychandranvs/electrojet &lt;yourProjectName&gt;</code></li>
  <li>Change directory to &lt;yourProjectName&gt;</li>
  <li>Install dependencies by running <code>npm install</code></li>
  <li>Start development server by runnining <code>npm start</code></li>
  <li>Package using <code>npm run build</code></li>
</ul>
<center>
<table>
  <th>Branch Name</th>
  <th><pre>React</pre></th>
  <th><pre>Redux</pre></th>
  <th><pre>Redux Persist w/
  Electron Store</pre></th>
  <th><pre>Connected
  React Router</pre></th>
  <tr>
    <td><code>master</code></td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr
  <tr>
    <td><code>base</code></td>
    <td align="center">✅</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
  </tr
  <tr>
    <td><code>redux</code></td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
  </tr>
  <tr>
    <td><code>redux-persist</code></td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">❌</td>
  </tr>
  <tr>
    <td><code>react-redux-router</code></td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">❌</td>
    <td align="center">✅</td>
  </tr>
</table>
</center>
