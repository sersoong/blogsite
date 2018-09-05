import React, { Component } from 'react';
import { Tag, List, Icon} from "antd";

export default class ListItem extends Component {

    onGotoArticle(id){
        var href = "/blog/post/"+id
        this.props.history.push(href)
    }

    onGotoPostsTag(tag){
        var path = {
            pathname:"/blog/posts",
            query:{tag:tag}
        }
        this.props.history.push(path)
    }

    render(){
        // console.log(this.props.location.query)
        const IconText = ({ type, text }) => (
            <span style={{ marginLeft:15 }}>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
          );
        return(
            <List.Item 
            key={this.props.item.title}
            actions={[<div><IconText 
                type="eye-o" 
                text={this.props.item.reads} 
                />
            <IconText 
                type="like-o" 
                text={this.props.item.likes} 
                />
                <IconText 
                type="message" 
                text={this.props.item.comments} /></div>,
                <div>
                    {this.props.item.date}
                </div>,
                <div>
                    <IconText 
                type="tag" 
                />
                    {this.props.item.tags.map((tag,i)=>{return (<Tag key={i} color="#108ee9" onClick={this.onGotoPostsTag.bind(this,tag)}>{tag}</Tag>)})}
                </div>
                ]}
            extra={<a onClick={this.onGotoArticle.bind(this,this.props.item.id)}><img width={150} alt="logo"  src={this.props.item.thumbnail}/></a>}
            >
                <List.Item.Meta
                    title={<a onClick={this.onGotoArticle.bind(this,this.props.item.id)}>{this.props.item.title}</a>}
                    description={this.props.item.description}/>
                <div dangerouslySetInnerHTML={{__html:this.props.marked}}/>
            </List.Item>
        )
    }
}