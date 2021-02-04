import React, {useState, useEffect} from 'react';
import Editor from './Editor';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Start from './Start';
import Footer from './Footer';

function App() {
 

  return (
    <Router>
    <div>
       {/* A <Switch> looks through its children <Route>s and
      //     renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/Edit">
          <Edit />
        </Route>
        <Route path="/">
        <Home/>
        </Route>
      </Switch>
    </div>

  </Router>
  )
}

function Home() {
  return (
    <div className="Home">
      <Start />
      <Footer />
    </div>
  )
}

function Edit(){

  const [html, setHtml] = useLocalStorage('html','')
  const [css, setCss] = useLocalStorage('css','')
  const [javascript, setJavascript] = useLocalStorage('javascript','')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(()=> {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
    `)
    }, 400)

    return () =>clearTimeout(timeout)
  }, [html,css,javascript])

  return (
     //wrap everything in <> ... </> fragment
     <>
     <div className="pane editTitle"><a href="/" >Codedit <i className="edicon fas fa-code"></i></a></div>
     <div className="pane top">
     
       <Editor 
         language="xml"
         displayName="HTML"
         value={html}
         onChange={setHtml}
       />      
       <Editor 
         language="css"
         displayName="CSS"
         value={css}
         onChange={setCss}
       />
       <Editor 
         language="javascript"
         displayName="JAVASCRIPT"
         value={javascript}
         onChange={setJavascript}
       />
     </div>
 
     <div className="pane bottom">
       <iframe
         srcDoc={srcDoc}
         title="output"
         sandbox="allow-scripts"
         frameBorder="0"
         width="100%"
         height="100%"
       />
     </div>
     </>
     
  );
}

export default App;
