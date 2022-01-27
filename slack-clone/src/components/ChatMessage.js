import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        
    <Container>
        
        <UserAvatar>
        <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Not Found!!" /> 
        </UserAvatar>
        <MessageContent>
            <Name>
                Sree Shanker
                <span> 25/02/2021 15:25:55  </span>
            </Name>
            <Text>
                This is the best Challenge So far!!
            </Text>
        </MessageContent>


    </Container>

    )
}

export default ChatMessage

const Container = styled.div`
    padding:8px 20px;
    display:flex;
    align-items:center;

`
const UserAvatar = styled.div`
width:50px;
height:50px;
border-radius: 2px;
overflow: hidden;
margin-right:8px;
img{
    width:100%;
}

`
const MessageContent =styled.div`
    display:flex;
    flex-direction:column;
    cursor:pointer;
    :hover{
      background:#dfc8a2;
    }


`
const Name = styled.span`
    font-weight:900;
    font-size:15px;
    line-height:1.4;
    span{
        margin-left:10px;
        font-weight:400;
        color: rgb(97,96,97);
        font-size:13px;
    }
`
const Text = styled.span`

`