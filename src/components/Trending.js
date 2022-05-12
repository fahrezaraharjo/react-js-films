import { useEffect, useState } from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"
import axios from "axios"

const Trending = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (<Col md={4} className="movieWrapper" id="trending">
              <Card className="movieImage">
                <Image src={duneImage} alt="Dune Movies" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">DUNE</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with natural lead-in to additional
                      content
                    </Card.Text>
                    <Card.Text className="text-left">
                      Last updated 3 mins ago
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>)
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Trending
