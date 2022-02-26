import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles.js'
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
  { color: '#1C0A00', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#361500', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#603601', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#CC9544', title: 'News by Sources', info: 'ABC News, Wired, BBC News, Time, IGN, Buzzfeed ...', text: 'Give me the news from ABC News' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if(!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {infoCards.map((infoCard) => (
            <Grid className={classes.infoCard} item xs={12} sm={6} md={4} lg={3}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}> 
                <Typography variant="h5">{infoCard.title}</Typography>
                { infoCard.info ? 
                  (<Typography variant="h6"> 
                    <strong>
                      {infoCard.title.split(' ')[2]} :
                    </strong>
                    <br /> {infoCard.info}
                  </Typography>) : null
                  }
                  <Typography variant="h6"> Try saying : <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
        ))}
        </Grid>
      </Grow>
    )
  }
  
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard article={article} i ={i} activeArticle={activeArticle} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards