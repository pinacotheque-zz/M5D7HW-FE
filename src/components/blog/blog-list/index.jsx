import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";


const {REACT_APP_BACKEND_URL} =process.env;
export default class BlogList extends Component {
  state={
    loading:true,
    blogs:[]
  }


  fetchAuthors = async () => {
    try {
      const res = await fetch(REACT_APP_BACKEND_URL+"/blogs")
      if(res.ok){
        const data = await res.json()
        this.setState({blogs:data})
      }
    } catch (error) {
      console.log(error)
    }
    finally{
      this.setState({loading:false})   
    }
  }
  componentDidMount(){
this.fetchAuthors()
  }
  render() {

    const {loading,blogs} = this.state;
    return (
      <Row>

        {blogs.map((blog) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={blog.title} {...blog} />
          </Col>
        ))}
      </Row>
    );
  }
}
