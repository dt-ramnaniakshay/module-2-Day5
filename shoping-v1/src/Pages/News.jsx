import React from 'react'
import CustomButton from '../components/CustomButton'

function News() {
    const newsArticle = {
        title : 'A theft',
        author: 'Author name',
        date: '22nd October 2024',
        time: '4:00 PM',
        description: 'this was a dummy description '
    }
    const name = "Akshay"
    //{} to print it
  return (
    <div>
        <h1>This is news page</h1>
        <CustomButton />
        <p>{newsArticle.title}</p>
        <p>{newsArticle.time}</p>
    </div>
  )
}

export default News