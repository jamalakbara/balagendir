import React from 'react'

function Home(props) {
    const {gambar} = props
    return (
        <div className="container">
            <main className="content">
                <div className="home-content">
                    <h1 className="home-content__head">welcome to my personal website</h1>
                    <p className="home-content__body">Eiusmod voluptate adipisicing labore Lorem proident tempor nostrud fugiat culpa deserunt.</p>
                    <button className="btn btn-hover">more about me</button>
                </div>
                <div className="img-home">
                    <img src={gambar} alt="" />
                </div>
            </main>
        </div>
    )
}

export default Home
