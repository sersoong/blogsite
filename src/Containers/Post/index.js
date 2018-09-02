import React, { Component } from 'react';
import { Row, Col,Card, Avatar, Tag, Icon,Button} from "antd";
import marked from "marked";
///style

///subcomponents


class Post extends Component{
    // componentWillMount(){
    //     this.props.articleList()
    // }
    onBack(){
        this.props.history.push("/posts")
    }

    render(){
        console.log(this.props)
        const content = {
            "title":"Test title",
            "date":"2018/09/02 08:37",
            "tags":["test","foo","bar"],
            "avatar":"/static/avatar.jpg",
            "author":"sersoong",
            "words":"1200",
            "reads":"35",
            "comments":"69",
            "likes":"35",
            "content":`
            She had been shopping with her Mom in Wal-Mart. 
            She must have been 6 years old, this beautiful brown haired, freckle-faced image of innocence. 
            It was pouring outside. 
            The kind of rain that gushes over the top of rain gutters, 
            so much in a hurry to hit the Earth, 
            it has no time to flow down the spout.
            We all stood there under the awning and just inside the door of the Wal-Mart. 
            We all waited, some patiently, 
            others irritated, because nature messed up their hurried day. 
            I am always mesmerized by rainfall. 
            I get lost in the sound and sight of the heavens washing away the dirt and dust of the world. 
            Memories of running, splashing so carefree as a child come pouring in as a welcome reprieve from the worries of my day.
            Her voice was so sweet as it broke the hypnotic trance we were all caught in, 
            “Mom, let's run through the rain." she said.         
            What? Mom asked.
            Let's run through the rain! She repeated.
            No, honey. 
            We'll wait until it slows down a bit.
            Mom replied.
            This young child waited about another minute and repeated: "Mom, let's run through the rain."
            We'll get soaked if we do. 
            Mom said.
            No, we won't, Mom. 
            That's not what you said this morning, 
            the young girl said as she tugged at her Mom's arm."
            This morning? 
            When did I say we could run through the rain and not get wet?
            Don't you remember? 
            When you were talking to Daddy about his cancer, 
            you said, 
            If God can get us through this, 
            he can get us through anything!
            The entire crowd stopped dead silent. 
            I swear you couldn't hear anything but the rain. 
            We all stood silently. 
            No one came or left in the next few minutes. 
            Mom paused and thought for a moment about what she would say.
            Now some would laugh it off and scold her for being silly. 
            Some might even ignore what was said. 
            But this was a moment of affirmation in a young child's life. 
            Time when innocent trust can be nurtured so that it will bloom into faith. 
            "Honey, you are absolutely right. 
            Let's run through the rain. 
            If get wet, well maybe we just needed washing." 
            Mom said. Then off they ran.
            We all stood watching, 
            smiling and laughing as they darted past the cars and. 
            They held their shopping bags over their heads just in case. 
            They got soaked. 
            But they were followed by a few who screamed and laughed like children all the way to their cars. 
            And yes, I did. I ran. I got wet. 
            I needed washing.Circumstances or people can take away your material possessions, 
            they can take away your money, and they can take away your health. 
            But no one can ever take away your precious memories. 
            So, don't forget to make time and take the opportunities to make memories every day!
            To everything there is a season and a time to every purpose under heaven. 
            I hope you still take the time to run through the rain.
            `
        }

        return(
            <div>
            
                <Row type="flex" justify="center" align="middle" style={{lineHeight:"100px"}}><Col span="20" style={{textAlign:"left"}}><Button onClick={this.onBack.bind(this)} icon="left" size="large">Back</Button></Col></Row>
                <Row  type="flex" justify="center" align="middle" >
                    <Col className="content" span="20">
                        <Card
                        title={<h1>{content.title}</h1>}
                        bordered
                        hoverable={true}
                        >
                        <Card.Meta 
                        avatar={<Avatar size={64} src={content.avatar}/>} 
                        title = {<h3>{content.author}</h3>}
                        description = {<div>{content.date} <Icon type="eye-o"/> {content.reads} <Icon type="message"/> {content.comments} <Icon type="like-o"/> {content.likes} <Icon type="tag"/> {content.tags.map((tag,i)=>{return <Tag key={i} color="#108ee9">{tag}</Tag>})}</div>}
                        />
                        <div style={{paddingTop:"40px"}} dangerouslySetInnerHTML={{__html:marked(content.content)}}></div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default (props)=>{ return <Post {...props} />}