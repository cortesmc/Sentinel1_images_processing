import Markdown from 'react-markdown'
import {useEffect, useState} from "react";
import remarkGfm from 'remark-gfm'



function FrontPage() {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('../../README.md')
            .then(response => response.text())
            .then(text => setMarkdown(text));
    }, []);

    return (
        <>
            <div>
                <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </div>
        </>
    )
}

export default FrontPage;