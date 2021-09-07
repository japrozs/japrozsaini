import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'

interface CommentsProps {

}

export const Comments : React.FC <CommentsProps> = ({}) => {
	const commentBox = React.createRef();
	useEffect(() => {
		let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js")
        scriptEl.setAttribute("crossorigin", "anonymous")
        scriptEl.setAttribute("async", true)
        scriptEl.setAttribute("label", "Comment... 🚀 😃 ")
        scriptEl.setAttribute("repo", "japrozs/japrozsaini")
        scriptEl.setAttribute("issue-term", "title")
        scriptEl.setAttribute("theme", "photon-dark")
        commentBox.current.appendChild(scriptEl)
	}, [])
		return (
			<Box id="comments">
			<hr style={{
				backgroundColor : "#242c37",
				marginBottom : 20,
			}}/>
			<h1 style={{
				fontFamily : "Inter",
				fontWeight : "600",
				fontSize : 25
			}}>Comments</h1>
				<div ref={commentBox}></div>
			</Box>
		)
}