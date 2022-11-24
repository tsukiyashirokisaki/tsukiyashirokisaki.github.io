import React, { useEffect, useState } from "react";
import { equalTo, onValue, orderByChild, query, ref as dbRef, getDatabase } from "firebase/database";
import { getDownloadURL, getStorage, ref as sRef } from "firebase/storage"
import app from "../FirebaseDatabase";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
const CodeBlock = {
    // eslint-disable-next-line
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
function Page(props) {
    const [metaData, setMetaData] = useState([]);
    const [contents, setContents] = useState([]);
    const storage = getStorage(app);
    const db = getDatabase(app);
    console.log(setContents)
    useEffect(() => {
        const dataRef = (props.curPage === "Articles") ? 
        query(dbRef(db, 'markdowns'), orderByChild("time"))
        : query(dbRef(db, 'markdowns'), orderByChild("type"), equalTo(props.curPage))
        onValue(dataRef, (snapshot) => setMetaData(snapshot.val() !== null|undefined ? snapshot.val() : []
        ))
    }, [props.curPage])
    useEffect(() => {
        Promise.all(
                metaData.map(data =>
                    getDownloadURL(sRef(storage, data.path)).then(url => fetch(url)).then(res => res.text())
                    )
        ).then( res =>
            setContents(res)            
        )
            
    }, [metaData])
    console.log(contents)
    return <div style={{marginLeft:"20px"}}>{contents.map(data =>
        <ReactMarkdown className="markdown_color" rehypePlugins={[rehypeRaw]}
        components={CodeBlock}
        // eslint-disable-next-line
        key={data} children={data} />)}  </div>
}
export default Page;