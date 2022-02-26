import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import { Typography } from '@material-ui/core';
const alanKey = '926775fff12d12eaeca57268fa55118e2e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticles] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    console.log(articles);
                    setActiveArticles(-1);
                } else if( command === 'highlight') {
                    setActiveArticles((prevActiveArticle) => prevActiveArticle + 1);
                }
            }
        })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="./images/logo.jpeg" className={classes.alanLogo} alt="Alan Logo"/>
            </div>
            <Typography color="primary" variant="h4" className={classes.title}>Click the blue button at the bottom right corner to start talking to Alan</Typography>
            <NewsCards articles = {newsArticles}  activeArticle={activeArticle} />
        </div>
    )
}

export default App;