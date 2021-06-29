import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state={
    loading:true,
    blogs:[]
  }


  fetchAuthors = async () => {
    try {
      const res = await fetch("http://localhost:3001/blogs")
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
